import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import './todo-list-item.css';

const itemSource = {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props, monitor, component) {
        return props.handleDrop(props.item.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

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
        const { isDragging, connectDragSource, item } = this.props;
        const { onDeleted, number } = this.props;
        const { done } = this.state;
        let classNames = '';
        if (done) {
            classNames += 'done';
        }
        return (
            <span className='item'>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={this.handleChange}>
                </input>
                <span className={'content ' + classNames}>{number + 1}. {this.props.label}</span>
                <button
                    onClick={onDeleted}>X</button>
            </span>)
        };
};
TodoListItem.defaultProps = {
    done: false,
    text: '',
    number: 0
};

export default DragSource('item', itemSource, collect)(TodoListItem)
