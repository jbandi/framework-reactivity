import React from 'react';
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

    return (
        <div className={classes.counter}>
            <h1>Counter</h1>
           <Counter/>
        </div>
    )
}
