import React, {Component} from 'react'


class NewTask extends Component {
    render() {
        return (
            <div class="task">
                <input class="newTask" type="text" placeholder="New Task..."/>
            </div>
        );
    }
}

export default NewTask;
