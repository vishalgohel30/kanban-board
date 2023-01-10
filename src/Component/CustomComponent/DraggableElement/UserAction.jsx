import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

/**
 * This  is UserAction Compenent.
 * @param {function} handleAction accept  fun.
 * @returns jsx
 */

const  UserAction = ({ handleAction = () => {} }) =>{
  return (
    <div style={{ textAlign: "end" }}>
      <FontAwesomeIcon
        icon={faPen}
        aria-label={"edit-icon"}
        style={{ cursor: "pointer" }}
        onClick={() => {handleAction("edit")}}
      />
      &nbsp;&nbsp;
      <FontAwesomeIcon
        icon={faTrash}
        aria-label={"delete-icon"}
        style={{ cursor: "pointer" }}
        onClick={() => handleAction("delete")}
      />
    </div>
  );
}

export default memo(UserAction);
