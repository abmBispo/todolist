import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default () => (
    <div>
        <PageHeader name='Todo' small='list' />
        <TodoForm />
        <TodoList />
    </div>
);