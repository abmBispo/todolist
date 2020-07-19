import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        });
    }

    handleAdd() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <PageHeader name='Todo' small='list' />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}