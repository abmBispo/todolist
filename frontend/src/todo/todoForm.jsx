import React from 'react';
import IconButton from '../template/iconButton';

export default (props) => (
    <div role='form' className='todoForm'>
        <div className='row'>
            <div className='col-12 col-md-10'>
                <input type='text'
                    className='form-control'
                    name="description"
                    id="description"
                    placeholder="Add a 'to do' task"
                    onChange={(e) => props.handleChange(e) }
                    value={props.description} />
            </div>
            <div className='col-12 col-md-2 text-right'>
                <IconButton style='success' icon='plus' onClick={props.handleAdd} />
            </div>
        </div>
    </div>
);