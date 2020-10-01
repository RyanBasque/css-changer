import React from 'react';

import classes from './Viewer.module.css'

const Viewer = (props) => {

    const textStyle = {
        color: props.color,
    }

    const viewerStyle = {
        width: "70%",
        margin: '0 auto',
        marginTop: '10%',
        marginBottom: '6%',
        padding: 5,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        color: '#ffffff',
    }

    return (
        <div style={viewerStyle} >
            <p style={textStyle}>{props.text}</p>
        </div>
    )

};

export default Viewer;