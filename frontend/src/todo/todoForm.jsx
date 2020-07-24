import React from 'react';
import { connect } from 'react-redux';
import IconButton from '../template/iconButton';
import { bindActionCreators } from 'redux';
import { changeDescription, createTask } from "./todoActions";

const TodoForm = (props) => (
    <div role='form' className='todoForm'>
        <div className='row'>
            <div className='col-12 col-md-11'>
                <input type='text'
                    className='form-control'
                    name="description"
                    id="description"
                    placeholder="Add a 'to do' task"
                    onChange={(e) => props.changeDescription(e)}
                    value={props.description} />
            </div>
            <div className='col-12 col-md-1'>
                <IconButton style='success' icon='plus' onClick={() => props.createTask(props.description)} />
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => ({ description: state.todo.form.description });
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription, createTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);