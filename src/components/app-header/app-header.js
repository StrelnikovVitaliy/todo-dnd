import React, { Component } from 'react';
import './app-header.css';


export default class AppHeader extends Component {
    state = {
        label: ''
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        } else {
            alert("the form can't be empty");
        }
    };
    render() {
        return (
            <form
                className='header'
                onSubmit={this.onSubmit}>
                <h1>TODO LIST</h1>
                <input
                    placeholder=''
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button>Add</button>
            </form>
        )
    };
};
