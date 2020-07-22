import React from 'react';

export default (props) => (
    <header className='page-header mt-3'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
);