import React, { Component } from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        };
    }
    handleChange = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        });
    };

    render() {
        const { id, onDeleted, number } = this.props;
        const { done } = this.state;
        let classNames = '';
        if (done) {
            classNames += 'done';
        }
        return (
            (<li key={id}>
                <span className='item'>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleChange}>
                    </input>
                    <span className={'content ' + classNames}>{number + 1}. {this.props.label}</span>
                    <button
                        onClick={onDeleted}>X</button>
                </span>
            </li>))
    };
};
TodoListItem.defaultProps = {
    done: false,
    text: '',
    number: 0
};

export default TodoListItem;
