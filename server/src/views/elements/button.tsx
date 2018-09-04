import * as React from 'react';

export const Button = props => {
    return (
        <div>
            <a
                href="#"
                className={props.className}
                onClick={props.onClick}
                {...props}
            >
                {props.children}
            </a>
        </div>
    );
};
