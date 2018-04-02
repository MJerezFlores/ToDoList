
import React, {Component} from 'react'
import DayTasks from "./TasksDay";


class DaysList extends Component {

    constructor(props) {

        super(props);

        this.handleDataChangeInput = this.handleDataChangeInput.bind(this);

    }

    handleDataChangeInput(data) {
        this.props.onDataChangeInput(data);
    }



    daysMap(day) {
        return (
            <DayTasks
                day={day}
                key={day.name}
                filterTasksInput={this.props.filterTasks}
                onDataChangeInput={this.handleDataChangeInput}
            />
        );
    }

    applyFilter(filter, days){
        if (filter !== "all")
            return days.filter(day=>{
                return filter === (day.weekday? "weekdays" : "weekend")
            });
        return days;
    }

    render() {
        let daysFiltered = this.applyFilter(this.props.filterDays, this.props.data)
            .map(day=> this.daysMap(day));



        return (daysFiltered)

    }
}

export default DaysList;