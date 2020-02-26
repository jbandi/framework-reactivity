import React, { useState } from 'react';
import { Counter } from './Counter';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(createStyles({
    counter: {
        width: 300,
        padding: 20,
        backgroundColor: 'lightgoldenrodyellow'
    },
}));

export function CounterScreen() {

    const classes = useStyles();
    const [title, setTitle] = useState('Counter');

    return (
        <div className={classes.counter}>
            <h1>{title}</h1>
           <Counter/>
        </div>
    )
}
