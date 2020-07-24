import React from 'react';
import { connect } from 'react-redux';
import IconButton from '../template/iconButton';
import { loadTasks, deleteTask, markAsDone, markAsUndone } from './todoActions';
import { bindActionCreators } from 'redux';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        this.props.loadTasks();
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((task) => (
            <tr key={task._id}>
                <td className={task.done ? 'done-task' : ''}>
                    {task.description}
                </td>
                <td className='text-right'>
                    <IconButton
                        icon='check'
                        style='success'
                        onClick={() => this.props.markAsDone(task)}
                        hide={task.done} />
                    <IconButton
                        icon='undo'
                        style='warning'
                        onClick={() => this.props.markAsUndone(task)}
                        hide={!task.done} />
                    <IconButton
                        icon='trash-o'
                        style='danger'
                        onClick={() => this.props.deleteTask(task._id)} />
                </td>
            </tr>)
        );
    };

    render() {
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
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({ list: state.todo.list });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadTasks, deleteTask, markAsDone, markAsUndone }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);