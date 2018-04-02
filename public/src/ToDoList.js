import React, {Component} from 'react';
import data from './data.json';
import DayLists from './DaysList'
import Filter from './Filter'



class ThingsToDo extends Component {

    constructor(props){
        super(props);
        this.state ={
            filterDays: "all",
            filterTasks: "all",
            data: this.props.data
        };

        this.handleFilterDaysInput = this.handleFilterDaysInput.bind(this);
        this.handleFilterTasksInput = this.handleFilterTasksInput.bind(this);
        this.handleDataChangeInput = this.handleDataChangeInput.bind(this);
    }

    handleDataChangeInput(data) {
        this.setState({data})
    }

    handleFilterDaysInput(filterDays) {
        this.setState({filterDays})
    }

    handleFilterTasksInput(filterTasks) {
        this.setState({filterTasks})
    }

    render() {
        return (
            <div className="todoList">
                <div className="title">
                    <h1>Things To Do</h1>
                </div>
                <Filter
                    filterDays= {this.state.filterDays}
                    filterTasks = {this.state.filterTasks}
                    onFilterDaysInput={this.handleFilterDaysInput}
                    onFilterTasksInput={this.handleFilterTasksInput}
                />
                <DayLists
                    filterDays= {this.state.filterDays}
                    filterTasks= {this.state.filterTasks}
                    data= {this.state.data}
                    onDataChangeInput={this.handleDataChangeInput}
                />
            </div>
        );
    }
}

export default props =>
    <ThingsToDo data={data}/>
;


