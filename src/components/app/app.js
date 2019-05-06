import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';


import './app.css';
const SortableList = SortableContainer(TodoList);


export default class App extends Component {


    state = {
        todoData: [
            { label: 'first task', done: false, id: Math.random() },
            { label: 'second task', done: false, id: Math.random() },
            { label: 'third task', done: false, id: Math.random() }
        ]
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            todoData: arrayMove(this.state.todoData, oldIndex, newIndex),
        });
    };


    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            done: false,
            id: Math.random(),
        };
        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData, newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    render() {
        return (
            <div className='app'>
                <AppHeader
                    onItemAdded={this.addItem} />
                <SortableList
                    {...this.state}
                    todoData={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onSortEnd={this.onSortEnd} />
            </div>
        );
    }
}


