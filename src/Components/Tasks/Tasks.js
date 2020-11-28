import React from "react";

const Tasks = (props) => {
  let {
    task,
    taskStatusHandler,
    index,
    deleteTaskHandler,
    taskChangeHandler,
  } = props;
  let classname = task.status === "Completed" ? "completed" : "";

  return (
    <li className={classname}>
      <div className="form-check">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => taskStatusHandler(index)}
          checked={task.status === "Completed" ? "checked" : ""}
        />{" "}
        <label className="form-check-label">
          {task.status === "Active" ? (
            <input
              type="text"
              value={task.taskName}
              className="form-control task-edit"
              onChange={(e) => taskChangeHandler(index, e.target.value)}
            />
          ) : (
            task.taskName
          )}
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
