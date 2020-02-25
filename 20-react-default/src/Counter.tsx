import React, { useEffect, useRef, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(createStyles({
    counter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'lightcyan',
        padding: 20,
    },
    counterDisplay: {
        width: 100,
        margin: 5,
        padding: 15,
        border: "purple solid 2px",
        fontSize: "xx-large",
    },
    button: {
        margin: 4
    }
}));

export function Counter() {

    const classes = useStyles();

    const [count, setCount] = useState(0);
    const intervalRef = useRef<number>();

    useEffect(() => {
        // setInterval(() => {
        //     setCount(count => count + 1)
        // }, 1000)
    }, []);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function toggle() {
        if (!intervalRef.current) {
            intervalRef.current = window.setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        } else {
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
        }
    }

    return (
        <div className={classes.counter}>

            <div className={classes.counterDisplay}> {count} </div>
            <div>
                <div>
                    <Button onClick={decrease} variant="contained" color="primary" className={classes.button}>-</Button>
                    <Button onClick={increase} variant="contained" color="primary" className={classes.button}>+</Button>
                </div>

                <div>
                    <Button onClick={toggle} variant="contained" color="primary"
                            className={classes.button}>Toggle</Button>
                </div>
            </div>
        </div>
    );
}
