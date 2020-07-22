import React from 'react';
import IconButton from '../template/iconButton';

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        return list.map((task) => {
            return (
                <tr key={task._id}>
                    <td className={ task.done ? 'done-task' : ''}>
                        {task.description}
                    </td>
                    <td className='text-right'>
                        <IconButton
                            icon='check'
                            style='success'
                            onClick={() => props.handleMarkAsDone(task)}
                            hide={task.done} />
                        <IconButton
                            icon='undo'
                            style='warning'
                            onClick={() => props.handleMarkAsPending(task)}
                            hide={!task.done} />
                        <IconButton
                            icon='trash-o'
                            style='danger'
                            onClick={() => props.handleRemove(task)} />
                    </td>
                </tr>)
        });
    };

    return (
        <div className='mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td className='text-right'>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
};