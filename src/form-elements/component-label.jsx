import React from "react";
import myxss from "./myxss";

const ComponentLabel = (props) => {
  const hasRequiredLabel =
    props.data.hasOwnProperty("required") &&
    props.data.required === true &&
    !props.read_only;
  const isShowQuestionNumber = props.data?.isShowQuestionNumber ?? false;
  const labelText = myxss.process(props.data.label);
  if (!labelText) {
    return null;
  }
  return (
    <label className={props.className || "form-label"}>
      <div className="flex max-w-full">
        {isShowQuestionNumber ? (
          <span className="react-form-builder-question-number">
            {props.data?.qIndex ?? 0}.
          </span>
        ) : null}
        <span dangerouslySetInnerHTML={{ __html: labelText }} />
      </div>
      {hasRequiredLabel && (
        <span className="label-required badge badge-danger">Required</span>
      )}
    </label>
  );
};

export default ComponentLabel;
