import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api/todos';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    handleRemove(task) {
        axios.delete(`${BASE_URL}/${task._id}`).then((res) => this.refresh())
    }

    refresh() {
        axios.get(`${BASE_URL}?sort=-createdAt`).then(res => {
            this.setState({
                ...this.state,
                description: '',
                list: res.data
            })
        });
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        });
    }

    handleAdd() {
        const description = this.state.description
        axios.post(BASE_URL, { description }).then((response) => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name='Todo' small='list' />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}