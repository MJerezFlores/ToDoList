import React, {Component} from 'react'
import Task from "./Task";
import NewTask from "./NewTask";

class DayTasks extends Component {
    constructor(props){

        super(props);

        this.handleDataChangeInput = this.handleDataChangeInput.bind(this);

    }

    handleDataChangeInput(data) {
        this.props.onDataChangeInput(data);
    }


addTask(task) {
        return <Task
            task={task}
            key={task.task}
            filterTasksInput={this.props.filterTasksInput}
            onDataChangeInput={this.handleDataChangeInput}
        />;
    }

    applyFilter(filter, tasks){
        if(filter!=="all")
            return tasks.filter(task=>{
                return filter===( task.done? "Done" : "toDo" )
            });
        return tasks;
    }

    render() {
        let listTasks = this.applyFilter(this.props.filterTasksInput, this.props.day.tasks)
                            .map(task => this.addTask(task));

        return(
            <div class="dayBox">
                <h3>{this.props.day.name}</h3>
                {listTasks}
                <NewTask/>
            </div>
        )
    }



}

export default DayTasks;