import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item, index) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}>
                <TodoListItem
                    {...itemProps}
                    number={index}
                    onDeleted = {() => onDeleted(id)} />
            </li>
        );
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default DragDropContext(HTML5Backend)(TodoList)
