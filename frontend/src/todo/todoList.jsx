import React from 'react';
import IconButton from '../template/iconButton';

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        return list.map((task) => {
            return (
                <tr key={task._id}>
                    <td>
                        {task.description}
                    </td>
                    <td>
                        <IconButton
                            icon='trash-o'
                            style='danger'
                            onClick={() => props.handleRemove(task)} />
                    </td>
                </tr>)
        });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
};