import React from 'react';
import {render} from 'react-dom';
import ToDoList from './ToDoList';




const App = () => (
    <ToDoList/>
);


render(<App />, document.getElementById("root"));