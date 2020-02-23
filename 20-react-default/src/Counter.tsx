import React, { useEffect, useRef, useState } from 'react';

export function Counter() {

    const [count, setCount] = useState(0);
    let intervalRef = useRef<number>();

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, []);

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
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
        <>
            <div> {count} </div>
            <div>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
            <div>
                <button onClick={toggle}>Toggle</button>
            </div>
        </>
    );
}
