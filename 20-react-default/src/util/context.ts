import { createContext } from 'react';
import { CounterAction } from './counterReducer';

// Simple context for passing data
// export const CounterContext = createContext(0);

// Context with a service functionality
// type CounterService = {count: number, increase: ()=>void}
// export const CounterContext = createContext<Partial<CounterService>>({});


// Context with a store
type CounterStore = [{count: number}, (action: CounterAction)=>void]
export const CounterContext = createContext<CounterStore>(undefined as any);
