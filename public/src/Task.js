import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskDone: this.props.task.done
        };

        this.handleDataChangeInput = this.handleDataChangeInput.bind(this);

    }

    handleDataChangeInput(data) {
        this.props.onDataChangeInput(data);
    }


    //     this.handleTaskDoneInput = this.handleTaskDoneInput.bind(this);
    // }
    //
    //
    //     this.setState({
    //         taskDone: event.target.checked
    //     });
    //     this.props.task.done = !this.state.taskDone;
    // }


    render() {
        console.log(this.props.onDataChangeInput)
        return (
            <div class="task">
                <p>
                    <input type="checkbox" checked={this.state.taskDone} onChange={this.handleDataChangeInput}/>
                    {this.props.task.task + "       "}
                </p>
            </div>
        )

    }
}

export default Task;