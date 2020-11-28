import "./App.css";
import Tasks from "./Components/Tasks/Tasks";
import React, { Component } from "react";
import Status from "./Components/Status/Status";

class App extends Component {
  state = {
    tasks: [],
    status: ["Total", "Active", "Completed"],
    newTask: "",
    activeStatus: "Total",
  };

  filterHandler = (status) => {
    this.setState({
      activeStatus: status,
    });
  };

  addTaskHandler = (e) => {
    e.preventDefault();
    if (this.state.newTask) {
      let tasks;
      tasks = [
        ...this.state.tasks,
        {
          id: this.state.tasks.length,
          taskName: this.state.newTask,
          status: "Active",
        },
      ];
      this.setState({ tasks });
    } else {
      alert("Please fill the task field first!");
    }
    this.setState({
      newTask: "",
    });
  };

  taskInputHandler = (newTask) => {
    this.setState({
      newTask,
    });
  };

  taskStatusHandler = (taskIndex) => {
    let tasks;
    tasks = [...this.state.tasks];
    tasks[taskIndex].status =
      tasks[taskIndex].status === "Active" ? "Completed" : "Active";
    this.setState({ tasks });
  };

  deleteTaskHandler = (taskId) => {
    let tasks;
    tasks = [...this.state.tasks];
    tasks = tasks.filter((e) => e.id !== taskId);
    this.setState({ tasks });
  };

  taskChangeHandler = (taskIndex, newTaskName) => {
    let tasks;
    tasks = [...this.state.tasks];
    tasks[taskIndex].taskName = newTaskName;
    this.setState({ tasks });
  };

  render() {
    let statusData = "";
    statusData = this.state.status.map((st, index) => {
      return (
        <Status
          name={st}
          filterHandler={this.filterHandler}
          key={index}
          activeStatus={this.state.activeStatus}
        />
      );
    });

    let tasks = this.state.tasks;
    if (this.state.activeStatus !== "Total") {
      tasks = tasks.filter((task) => task.status === this.state.activeStatus);
    }

    tasks = tasks.map((task, index) => {
      return (
        <Tasks
          task={task}
          key={index}
          taskStatusHandler={this.taskStatusHandler}
          index={index}
          deleteTaskHandler={this.deleteTaskHandler}
          taskChangeHandler={this.taskChangeHandler}
        />
      );
    });

    return (
      <div className="container">
        <div className="page-content page-container" id="page-content">
          {/* <div className="row custom-alert">
            <div className="col-md-12">
              <p className="float-right">Changes are being saved...</p>
            </div>
          </div> */}
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-2">{this.state.tasks.length} Tasks</div>
              <div className="col-md-4"></div>
              {statusData}
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title">Awesome Todo list</h4>
                    <div className="add-items d-flex">
                      <form
                        onSubmit={this.addTaskHandler}
                        className="col-md-12"
                      >
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <input
                              type="text"
                              className="form-control todo-list-input"
                              placeholder="What do you need to do today?"
                              value={this.state.newTask}
                              onChange={(e) =>
                                this.taskInputHandler(e.target.value)
                              }
                            />
                          </div>
                          <div class="form-group col-md-4">
                            <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                              Add
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="list-wrapper">
                      <ul className="d-flex flex-column-reverse todo-list">
                        {this.state.tasks.length ? (
                          tasks
                        ) : (
                          <p className="text-center">
                            Is it a lazy day, or ya planning to do something?
                          </p>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
