import React from 'react';

function Button(props) {
    return (
        <div>
            <button style={props.style} onClick={props.onClick}><img src={props.src} alt=""/>{props.text}</button>
        </div>
    );
}

export default Button;