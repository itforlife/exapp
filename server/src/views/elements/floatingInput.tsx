import * as React from 'react';

export const FloatingInput = props => {
    return (
        <div>
            <label>{props.label}</label>
            <input {...props} />
        </div>
    );
};
