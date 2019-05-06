import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import { SortableElement } from 'react-sortable-hoc';


import './todo-list.css';
const SortableItem = SortableElement(TodoListItem);


class TodoList extends Component {
    getList() {
        const { todoData, onDeleted } = this.props;

        return todoData.map((item, index) => (
            <SortableItem
                label={item.label}
                id={item.id}
                key={item.id}
                number={index}
                index={index}
                done={item.done}
                onDeleted={() => onDeleted(item.id)} />

        ));
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        );
    }
};
TodoList.defaultProps = {
    todoData: [],
    onDeleted: () => null
}

export default TodoList;
