import React from 'react';

import classes from './Texter.module.css'


const Texter = (props) => {
    return (
        <div className={classes.Texter}>
            <input type="text" placeholder="Put some text" onChange={props.changeText} />
            <input type="text" placeholder="Put color name, rgb or hexadecimal" onChange={props.changeColor} />
            <input type="text" placeholder="Change border-radius" onChange={props.changeRadius} />
            <input type="text" placeholder="Change background-color" onChange={props.changeBackground} />
        </div>
    )
};

export default Texter;