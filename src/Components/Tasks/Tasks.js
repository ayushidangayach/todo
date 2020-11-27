import React from "react";

const Tasks = (props) => {
  let { task, taskStatusHandler, index, deleteTaskHandler } = props;
  let classname = task.status === "Completed" ? "completed" : "";

  return (
    <li className={classname}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => taskStatusHandler(index)}
            checked={task.status === "Completed" ? "checked" : ""}
          />{" "}
          {task.taskName}
          <i className="input-helper"></i>
        </label>
      </div>
      <button
        className="remove btn btn-danger btn-sm float-right"
        onClick={() => deleteTaskHandler(task.id)}
      >
        X
      </button>
    </li>
  );
};

export default Tasks;
