/**
 * <Preview />
 */

import React from "react";
import update from "immutability-helper";
import store from "./stores/store";
import FormElementsEdit from "./form-dynamic-edit";
import SortableFormElements from "./sortable-form-elements";
import CustomDragLayer from "./form-elements/component-drag-layer";
import ID from "./UUID";

const { PlaceHolder } = SortableFormElements;

export default class Preview extends React.Component {
  state = {
    data: [],
    answer_data: {},
  };

  constructor(props) {
    super(props);

    const { onLoad, onPost } = props;
    store.setExternalHandler(onLoad, onPost);

    this.editForm = React.createRef();
    this.state = {
      data: props.data || [],
      answer_data: {},
    };
    this.seq = 0;

    this._onUpdate = this._onChange.bind(this);
    this.getDataById = this.getDataById.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.insertCard = this.insertCard.bind(this);
    this.setAsChild = this.setAsChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this._onClone = this._onClone.bind(this);
    this._onDestroy = this._onDestroy.bind(this);
  }

  componentDidMount() {
    const { data, url, saveUrl, saveAlways } = this.props;
    store.subscribe((state) => this._onUpdate(state.data));
    store.dispatch("load", {
      loadUrl: url,
      saveUrl,
      data: data || [],
      saveAlways,
    });
    document.addEventListener("mousedown", this.editModeOff);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.editModeOff);
  }

  editModeOff = (e) => {
    if (this.editForm.current && !this.editForm.current.contains(e.target)) {
      this.manualEditModeOff();
    }
  };

  manualEditModeOff = () => {
    const { editElement } = this.props;
    if (editElement && editElement.dirty) {
      editElement.dirty = false;
      this.updateElement(editElement);
    }
    this.props.manualEditModeOff();
  };

  _setValue(text) {
    return text.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
  }

  updateElement(element) {
    const { data } = this.state;
    let found = false;

    for (let i = 0, len = data.length; i < len; i++) {
      if (element.id === data[i].id) {
        data[i] = element;
        found = true;
        break;
      }
    }

    if (found) {
      this.seq = this.seq > 100000 ? 0 : this.seq + 1;
      store.dispatch("updateOrder", data);
    }
  }

  _onChange(data) {
    const answer_data = {};

    data.forEach((item) => {
      if (
        item &&
        item?.readOnly &&
        item?.variableKey &&
        this.props.variables[item.variableKey]
      ) {
        answer_data[item.field_name] = this.props.variables[item.variableKey];
      }
    });

    this.setState({
      data,
      answer_data,
    });
  }

  _onDestroy(item) {
    if (item.childItems) {
      item.childItems.forEach((x) => {
        const child = this.getDataById(x);
        if (child) {
          store.dispatch("delete", child);
        }
      });
    }
    store.dispatch("delete", item);
  }

  _onClone(item) {
    const { data } = this.state;
    let hoverIndex = data.findIndex((row) => row.id === item.id) + 1;
    const newItem = { ...item };
    newItem.id = ID.uuid();
    if (typeof newItem.field_name !== "undefined") {
      newItem.field_name =
        newItem.field_name.replace(/[A-Z0-9\-]+/g, "") + ID.uuid();
    }
    if (typeof newItem.options !== "undefined") {
      newItem.options = newItem.options.map((row) => {
        const option = { ...row };
        option.key = option.key.replace(/[A-Z0-9\-]+/g, "") + ID.uuid();
        return option;
      });
    }
    if (typeof newItem.childItems !== "undefined") {
      newItem.childItems = newItem.childItems.map((row, index) => {
        const child = this.getDataById(row);
        if (child) {
          const newChild = { ...child };
          newChild.id = ID.uuid();
          newChild.parentId = newItem.id;
          newChild.parentIndex = hoverIndex;
          if (typeof newChild.field_name !== "undefined") {
            newChild.field_name =
              newChild.field_name.replace(/[A-Z0-9\-]+/g, "") + ID.uuid();
          }
          if (typeof newChild.options !== "undefined") {
            newChild.options = newChild.options.map((row) => {
              const option = { ...row };
              option.key = option.key.replace(/[A-Z0-9\-]+/g, "") + ID.uuid();
              return option;
            });
          }
          this.insertCard(newChild, data.length + index);
          return newChild.id;
        }
        return null;
      });
    }

    this.insertCard(newItem, hoverIndex);
  }

  getDataById(id) {
    const { data } = this.state;
    return data.find((x) => x && x.id === id);
  }

  swapChildren(data, item, child, col) {
    if (child.col !== undefined && item.id !== child.parentId) {
      return false;
    }
    if (
      !(child.col !== undefined && child.col !== col && item.childItems[col])
    ) {
      // No child was assigned yet in both source and target.
      return false;
    }
    const oldId = item.childItems[col];
    const oldItem = this.getDataById(oldId);
    const oldCol = child.col;
    // eslint-disable-next-line no-param-reassign
    item.childItems[oldCol] = oldId;
    oldItem.col = oldCol;
    // eslint-disable-next-line no-param-reassign
    item.childItems[col] = child.id;
    child.col = col;
    store.dispatch("updateOrder", data);
    return true;
  }

  setAsChild(item, child, col, isBusy) {
    const { data } = this.state;
    // if (this.swapChildren(data, item, child, col)) {
    //   return;
    // }
    if (isBusy) {
      return;
    }

    const oldParent = this.getDataById(child.parentId);
    const oldCol = child.col;
    // eslint-disable-next-line no-param-reassign
    if (item.childItems[col] === null) {
      item.childItems[col] = child.id;
    } else if (Array.isArray(item.childItems[col])) {
      item.childItems[col].push(child.id);
    } else {
      item.childItems[col] = [item.childItems[col], child.id];
    }
    child.col = col;
    // eslint-disable-next-line no-param-reassign
    child.parentId = item.id;
    // eslint-disable-next-line no-param-reassign
    child.parentIndex = data.indexOf(item);
    if (oldParent) {
      if (Array.isArray(oldParent.childItems[oldCol])) {
        oldParent.childItems[oldCol] = oldParent.childItems[oldCol].filter(
          (x) => x !== child.id
        );
      } else {
        oldParent.childItems[oldCol] = null;
      }
    }
    const list = data.filter((x) => x && x.parentId === item.id);
    const allItemsInRow = item.childItems.flat();
    const toRemove = list.filter((x) => allItemsInRow.indexOf(x.id) === -1);

    let newData = data;
    if (toRemove.length) {
      // console.log('toRemove', toRemove);
      newData = data.filter((x) => toRemove.indexOf(x) === -1);
    }
    if (!this.getDataById(child.id)) {
      newData.push(child);
    }
    store.dispatch("updateOrder", newData);
  }

  removeChild(item, col, itemId = null) {
    const { data } = this.state;
    const oldId = itemId !== null ? itemId : item.childItems[col];

    const oldItem = this.getDataById(oldId);
    if (oldItem) {
      const newData = data.filter((x) => x !== oldItem);
      // eslint-disable-next-line no-param-reassign
      if (Array.isArray(item.childItems[col])) {
        item.childItems[col] = item.childItems[col].filter((x) => x !== itemId);
      } else {
        item.childItems[col] = null;
      }

      // delete oldItem.parentId;
      this.seq = this.seq > 100000 ? 0 : this.seq + 1;
      store.dispatch("updateOrder", newData);
      this.setState({ data: newData });
    }
  }

  restoreCard(item, id) {
    const { data } = this.state;
    const parent = this.getDataById(item.data.parentId);
    const oldItem = this.getDataById(id);
    if (parent && oldItem) {
      const newIndex = data.indexOf(oldItem);
      const newData = [...data]; // data.filter(x => x !== oldItem);
      // eslint-disable-next-line no-param-reassign
      parent.childItems[oldItem.col] = null;
      delete oldItem.parentId;
      // eslint-disable-next-line no-param-reassign
      delete item.setAsChild;
      // eslint-disable-next-line no-param-reassign
      delete item.parentIndex;
      // eslint-disable-next-line no-param-reassign
      item.index = newIndex;
      this.seq = this.seq > 100000 ? 0 : this.seq + 1;
      store.dispatch("updateOrder", newData);
      this.setState({ data: newData });
    }
  }

  insertCard(item, hoverIndex, id) {
    const { data } = this.state;
    if (id) {
      this.restoreCard(item, id);
    } else {
      data.splice(hoverIndex, 0, item);
      this.saveData(item, hoverIndex, hoverIndex);
      store.dispatch("insertItem", item);
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const { data } = this.state;
    const dragCard = data[dragIndex];
    this.saveData(dragCard, dragIndex, hoverIndex);
  }

  // eslint-disable-next-line no-unused-vars
  cardPlaceHolder(dragIndex, hoverIndex) {
    // Dummy
  }

  saveData(dragCard, dragIndex, hoverIndex) {
    const newData = update(this.state, {
      data: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    });
    this.setState(newData);
    store.dispatch("updateOrder", newData.data);
  }

  getElement(item, index) {
    if (item.custom) {
      if (!item.component || typeof item.component !== "function") {
        // eslint-disable-next-line no-param-reassign
        item.component = this.props.registry.get(item.key);
      }
    }
    const SortableFormElement = SortableFormElements[item.element];

    if (SortableFormElement === null) {
      return null;
    }
    return (
      <SortableFormElement
        id={item.id}
        seq={this.seq}
        index={index}
        moveCard={this.moveCard}
        insertCard={this.insertCard}
        mutable={false}
        parent={this.props.parent}
        editModeOn={this.props.editModeOn}
        isDraggable={true}
        key={item.id}
        sortData={item.id}
        data={item}
        getDataById={this.getDataById}
        setAsChild={this.setAsChild}
        removeChild={this.removeChild}
        _onDestroy={this._onDestroy}
        _onClone={this._onClone}
      />
    );
  }

  showEditForm() {
    const handleUpdateElement = (element) => this.updateElement(element);
    handleUpdateElement.bind(this);

    const formElementEditProps = {
      showCorrectColumn: this.props.showCorrectColumn,
      files: this.props.files,
      manualEditModeOff: this.manualEditModeOff,
      preview: this,
      element: this.props.editElement,
      updateElement: handleUpdateElement,
      imageMediaSource: this.props?.imageMediaSource ?? [],
      videoMediaSource: this.props?.videoMediaSource ?? [],
      isNeedAdditionalContext: this.props?.isNeedAdditionalContext ?? false,
    };

    return this.props.renderEditForm(formElementEditProps);
  }

  render() {
    let classes = this.props.className;
    if (this.props.editMode) {
      classes += " is-editing";
    }
    const data = this.state.data.filter((x) => !!x && !x.parentId);
    const items = data.map((item, index) => this.getElement(item, index));
    return (
      <div className={classes}>
        <div className="edit-form" ref={this.editForm}>
          {this.props.editElement !== null && this.showEditForm()}
        </div>
        <div className="Sortable">{items}</div>
        <PlaceHolder
          id="form-place-holder"
          show={items.length === 0}
          index={items.length}
          moveCard={this.cardPlaceHolder}
          insertCard={this.insertCard}
        />
        <CustomDragLayer />
      </div>
    );
  }
}
Preview.defaultProps = {
  showCorrectColumn: false,
  files: [],
  editMode: false,
  editElement: null,
  className: "md:w-9/12 react-form-builder-preview float-left",
  renderEditForm: (props) => <FormElementsEdit {...props} />,
};
