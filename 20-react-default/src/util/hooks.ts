import { useEffect, useRef, useState } from 'react';

export function useCounter(): [number, () => void]{
    const [count, setCount] = useState(0);

    const now = new Date().toISOString();
    console.log('USE COUNTER', now);

    function increase(){
        console.log('INCREASE', now);
        setCount(count => count + 1);
    }

    return [count, increase];
}

// Hook from:
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
type Callback = () => any
export function useInterval(callback: Callback, delay: number | null) {
    const savedCallback = useRef<Callback>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current?.(); // Whoohoo, nullish coalescing arrived in TypeScript 3.7
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

// Further examples for custom hooks:
// https://usehooks.com/
// https://github.com/streamich/react-use
// https://github.com/palmerhq/the-platform
// https://github.com/zeit/swr
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/hooks.md
