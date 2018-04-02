import React, {Component} from 'react'



class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleFilterDaysInputChange = this.handleFilterDaysInputChange.bind(this);
        this.handleFilterTasksInputChange = this.handleFilterTasksInputChange.bind(this);
    }


    handleFilterDaysInputChange(e) {
        this.props.onFilterDaysInput(e.target.value);
    }

    handleFilterTasksInputChange(e) {
        this.props.onFilterTasksInput(e.target.value);
    }


    render() {
        return (
            <div class="selectionBox">
                <p>Days to show :
                    <select value={this.props.filterDays} onChange={this.handleFilterDaysInputChange} size="1">
                        <option value="all">All</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekend">Weekend</option>
                    </select>
                </p>

                <p>Tasks to show :
                    <select value={this.props.filterTasks} onChange={this.handleFilterTasksInputChange} size="1">
                        <option value="all">All</option>
                        <option value="toDo">To do</option>
                        <option value="Done">Done</option>
                    </select>
                </p>
            </div>
        );
    }
}

export default Filter;
