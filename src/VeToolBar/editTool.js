import {Icon} from '@blueprintjs/core';
import React from "react";

export default ({readOnly, toggleReadOnlyMode}) => {

  return {
    Icon: <Icon iconName={readOnly ? "lock" : "unlock" }></Icon>,
    onIconClick: toggleReadOnlyMode,
    tooltip: readOnly ? "Switch to edit mode" : "Switch to read only mode",
    id: "editMode"
  }
};
