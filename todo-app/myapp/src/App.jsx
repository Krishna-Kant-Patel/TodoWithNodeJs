import React from 'react';
import Tasks from './services/Tasks';
import { Paper, TextField } from '@mui/material';
import './App.css';

class App extends Tasks {
  state = { tasks: [], currentTask: "" }
  render() {
    return (<div className='container'>
      <form onSubmit={this.handleSubmit} >
        <input value={this.state.currentTask} required={true}
          onChange={this.handleChange}
          placeholder='Add new TO-DO ' />
        <button type='submit' >Add task</button>
      </form>
      <div className='tasklist'>
        {this.tasks &&
          this.tasks.map((task) =>
            <div key={task._id} >
              <input type="checkbox" checked={task.completed}
                onClick={(() => this.handleUpdate(task._id))} id="" />
              <div className={task.completed ? "task line_though" : "task"}>{task.task}</div>
              <button onClick={(() => this.handleDelete(task._id))} >delete</button>
            </div>

          )}
      </div>
    </div>);
  }
}

export default App;
