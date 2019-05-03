import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: 'first task', done: false, id: 1 },
            { label: 'second task', done: false, id: 2 },
            { label: 'third task', done: false, id: 3 }
        ]
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
            id: this.maxId++
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
                onItemAdded={this.addItem}/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />
            </div>
        );
    }
}
