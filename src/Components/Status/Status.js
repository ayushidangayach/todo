import React from "react";

function Status(props) {
  let classname = props.activeStatus === props.name ? "active" : "";

  return (
    <div className="col-md-2">
      <button
        className={`btn-sm btn-default btn ${classname}`}
        onClick={() => props.filterHandler(props.name)}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Status;
