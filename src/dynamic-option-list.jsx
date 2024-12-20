/**
 * <DynamicOptionList />
 */

import React from "react";
import ID from "./UUID";
import IntlMessages from "./language-provider/IntlMessages";

export default class DynamicOptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: this.props.element,
      data: this.props.data,
      dirty: false,
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  _setValue(text) {
    return text.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
  }

  editOption(option_index, e) {
    const this_element = this.state.element;
    const val =
      this_element.options[option_index].value !==
      this._setValue(this_element.options[option_index].text)
        ? this_element.options[option_index].value
        : this._setValue(e.target.value);

    this_element.options[option_index].text = e.target.value;
    this_element.options[option_index].value = val;
    this.setState({
      element: this_element,
      dirty: true,
    });
  }

  editValue(option_index, e) {
    const this_element = this.state.element;
    const val =
      e.target.value === ""
        ? this._setValue(this_element.options[option_index].text)
        : e.target.value;
    this_element.options[option_index].value = val;
    this.setState({
      element: this_element,
      dirty: true,
    });
  }

  // eslint-disable-next-line no-unused-vars
  editOptionCorrect(option_index, e) {
    const this_element = this.state.element;
    if (this_element.options[option_index].hasOwnProperty("correct")) {
      delete this_element.options[option_index].correct;
    } else {
      this_element.options[option_index].correct = true;
    }
    this.setState({ element: this_element });
    this.props.updateElement.call(this.props.preview, this_element);
  }

  updateOption() {
    const this_element = this.state.element;
    // to prevent ajax calls with no change
    if (this.state.dirty) {
      this.props.updateElement.call(this.props.preview, this_element);
      this.setState({ dirty: false });
    }
  }

  addOption(index) {
    const this_element = this.state.element;
    this_element.options.splice(index + 1, 0, {
      value: "",
      text: "",
      key: ID.uuid(),
    });
    if (!this.props.canEditOptionValues) {
      this_element.options = this_element.options.map((option, index) => {
        option.value = index + 1;
        return option;
      });
    }
    this.props.updateElement.call(this.props.preview, this_element);
  }

  removeOption(index) {
    const this_element = this.state.element;
    this_element.options.splice(index, 1);
    if (!this.props.canEditOptionValues) {
      this_element.options = this_element.options.map((option, index) => {
        option.value = index + 1;
        return option;
      });
    }
    this.props.updateElement.call(this.props.preview, this_element);
  }

  render() {
    if (!this.state.isMounted) {
      return <div />;
    }
    if (this.state.dirty) {
      this.state.element.dirty = true;
    }
    return (
      <div className="dynamic-option-list">
        <ul>
          <li>
            <div className="row">
              <div className="sm:w-6/12 px-3">
                <b>
                  <IntlMessages id="options" />
                </b>
              </div>
              {this.props.canHaveOptionValue && (
                <div className="sm:w-2/12 px-3">
                  <b>
                    <IntlMessages id="value" />
                  </b>
                </div>
              )}
              {this.props.canHaveOptionValue &&
                this.props.canHaveOptionCorrect && (
                  <div className="sm:w-4/12 px-3">
                    <b>
                      <IntlMessages id="correct" />
                    </b>
                  </div>
                )}
            </div>
          </li>
          {this.props.element.options.map((option, index) => {
            const this_key = `edit_${option.key}`;
            const val =
              option.value !== this._setValue(option.text) ? option.value : "";
            return (
              <li className="clearfix" key={this_key}>
                <div className="row">
                  <div className="sm:w-6/12 px-3">
                    <input
                      tabIndex={index + 1}
                      className="form-control"
                      style={{ width: "100%" }}
                      type="text"
                      name={`text_${index}`}
                      placeholder="Option text"
                      value={option.text}
                      onBlur={this.updateOption.bind(this)}
                      onChange={this.editOption.bind(this, index)}
                    />
                  </div>
                  {this.props.canHaveOptionValue && (
                    <div className="sm:w-2/12 px-3">
                      <input
                        className="form-control"
                        type="text"
                        name={`value_${index}`}
                        value={val}
                        onChange={this.editValue.bind(this, index)}
                        readOnly={!this.props.canEditOptionValues}
                      />
                    </div>
                  )}
                  {this.props.canHaveOptionValue &&
                    this.props.canHaveOptionCorrect && (
                      <div className="sm:w-1/12 px-3">
                        <input
                          className="form-control"
                          type="checkbox"
                          value="1"
                          onChange={this.editOptionCorrect.bind(this, index)}
                          checked={option.hasOwnProperty("correct")}
                        />
                      </div>
                    )}
                  <div className="sm:w-3/12 px-3">
                    <div className="dynamic-options-actions-buttons">
                      <button
                        type="button"
                        onClick={this.addOption.bind(this, index)}
                        className="button button-primary"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={this.removeOption.bind(this, index)}
                          className="button button-secondary"
                        >
                          <i className="fas fa-minus-circle"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
