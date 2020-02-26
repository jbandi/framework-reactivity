

# Angular 

### 01: Zone.js

Go to `http://localhost:4200/assets/no-load.html`



### 02: Change Detection

1. Counter Component: Wrap `count`with getter/setter with log statement.
2. Counter Screen Component: Wrap `title`with getter/setter with log statement -> getter is called when counter changes.
3. Introduce new dummy component with a setIntervall -> all the getters are still called.
4. Use `window.ng` to change a component -> the UI does not update -> call `ng.applyChanges(comp)` 





### 03: Unidirectional Data Flow

Inject the parent into the Counter component, and change the parent when rendering:

```typescript
constructor(private parent: CounterScreenComponent) {}

ngOnInit(): void {
  this.parent.title = 'Update from Child!'
}
```

Parent is not updated and in Dev mode we get an exception: `ExpressionChangedAfterItHasBeenCheckedError`.





### 04: Setter/Getter - ngOnChanges - Pure Pipe 

- Call `fibonacci(36)` in the getter of the counter screen component.

- Introduce a `<input [(ngModel)]="val">`and display the fibonacci number of the entered value via getter
- Better solution: introduce child component `<app-fib [val]="val">` and implement `OnChange` 

```typescript
ngOnChanges(changes: SimpleChanges): void {
  console.log('CHANGES', changes);
  this.fibVal = fibonacci(changes.val.currentValue);
}
```

=> Bad: redundant state: `this.fibVal`

=> Further optimization: `changeDetection: ChangeDetectionStrategy.OnPush,`

- Implement pure pipe <div>{{val | fib}}</div>





### 05: Async / Await

In counter component;

```typescript
tick(){
  return new Promise(resolve => {
    setTimeout(() => {resolve()}, 1000);
  });
}
```

```typescript
  incAsync(){
    this.tick()
      .then(() => {
        console.log('INCREASING');
        this.count++;
        this.incAsync();
      });
  }
```

Then switch to async/await:

```
async incAsync(){
  await this.tick();
  console.log('INCREASING');
  this.count++;
  this.incAsync();
}
```

Show code in `main.js` bundle in browser tools. => no async/await

Switch in `tsconfig.json` -> `"target": "ES2017"`

=> Bummer!

Fix:

```
import { Component, OnInit, ɵmarkDirty } from '@angular/core';
ɵmarkDirty(this);
```

or:

```
constructor(private cdRef: ChangeDetectorRef) {}
...
this.cdRef.detectChanges()
```



Switch off Zones: main.ts

```
platformBrowserDynamic().bootstrapModule(AppModule,  { ngZone: 'noop'})
```





### 06: Observable Streams

In counter component:

```
  private inc$ = new Subject();
  count$: Observable<number>;
  
  ngOnInit(): void {
    this.count$ = this.inc$
      .pipe(
        scan((acc, _) => acc + 1, 0),
        startWith(0),
      )
  }
  
  increase() {
    this.inc$.next()
  }
```

```
{{count$ | async }}
```

Note: To get streams directly from the template: https://github.com/typebytes/ngx-template-streams

We can set: `changeDetection: ChangeDetectionStrategy.OnPush,`

Strangely we can't set: `platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})`

=> ???



Computed state with observables:

```
square$: Observable<number>;

this.square$ = this.count$
      .pipe(
        map(v => v*v)
      )
```

```
{{square$ | async }}
```

But: Monitor dataflow with `tap(v => console.log('VALUE', v)),` => two subscriptions

Fis: `share()` as last operator in the `count$` 



### 07: External State

Introduce a service.

- Service with field, getter on the component,
  - introduce second component
- Service with BehaviorSubject ... 
  - multiple subscriptions -> share()





# React

###  01: Everything is Re-Rendered, Rendering is just "a function call" 

- log the function calls of the components
- In the screen component -> introduce state 'title' -> update title on button press -> children are also re-rendered
- We don't have instance: so we cant get hold o a "parent" component -> Unidirectional data flow is implicit!
- Instead of using `setInterval` in `useEffect`, we could just call `setTimeout` in the function ...

Try:

- changing state during rendering -> Error

```jsx
<Counter changeParent={(val) => setTitle(val)}/>
```

- calling `changeParent`during rendering of Child -> Error

###  

### 02: State can't be changed directly

Change state definition in Counter:

```typescript
const [state, setState] = useState({count: 0});
```

Try to change it in an event handler:

```
state.count++
```

-> not working!



### 03: Derived State / Optimize Rendering with useMemo

- derive state: `const fib = fibonacci(value);` -> re-calculated on every update

- Optimize: `const fib = useMemo(() => fibonacci(value), [value]);`

- introduce a `<Fib/>` component -> it is rerenderd if parent re-renders

- Optimize:

  ```
  const fib = useMemo(() => <Fib val={value}/>, [value]);
  ```




### 04: Extracting state management into a reducer

Use the reducer in `util/counterReducer`

```typescript
const [state, dispatch] = useReducer(counterReducer, initialState);
```

Using: `const initialState = {count: 0};`

```typescript
    function increase() {
        dispatch('increment')
    }
```



### 05: Extracting state management into custom hook

Use the custom hooks in `util/hooks.ts`

```typescript
const [count, increase] = useCounter();
```

and also

```typescript
useInterval(increase, 1000);
```

then even:

```typescript
const [isRunning, setIsRunning] = useState(true);
useInterval(() => setCount(count + 1), isRunning ? 1000 : null);

function toggle() {
  setIsRunning(!isRunning);
}
```



### 06: Extracting state into a context

In `App.tsx`:

```
const [count, setCount] = useState(42);

<CounterContext.Provider value={count}>
    <CounterScreen/>
</CounterContext.Provider
```

Then in component: `const count = useContext(CounterContext)`



Improvement: Change the exported Context definition in `util/context.ts`

```
 const increase = () => setCount(count + 1);
 const service = {count, increase};
 
 <CounterContext.Provider value={service}>
    <CounterScreen/>
</CounterContext.Provider>
```

Then in component: `const {count, increase} = useContext(CounterContext)`



Improvement: Change the exported Context definition in `util/context.ts`

```
const store = useReducer(counterReducer, {count: 0});

 <CounterContext.Provider value={store}>
    <CounterScreen/>
</CounterContext.Provider>
```

Then in component: `const [state, dispatch]  = useContext(CounterContext);`





# Vue.js

### 01: Reactive State with Proxies

In the example `31-vue-barebone`:

- change the state on the developer console
- show the type of the state -> Proxy

- add another property to the state -> still reactive

- add the property later on -> no reactivity -> type is a plain object
- Fix: use `Vue.set(state, 'person', {name: 'Jonas'})`
- Limitations: add a property to state of type `Array`: 
  - print the size: `${state.items.length}`
  - then add an item:  `DEBUG.items.push(42)` -> working
  - then add an item:  `DEBUG.items[42] = 42` -> not working
- Limitations: add a property to state of type `Map`: `items: new Map()`
  - print the size: `${state.items.size}`
  - then add an item:  `DEBUG.items.set(1, 42)`



### 02: Computed State

In the example `31-vue-barebone`:

```
const state = reactive({
  name: 'Jonas',
  count: 0,
  double: computed(() => state.count * 2)
  });
```

- put `${double}` in the output string
- add `console.log` in the getter of the computed proeprty
- put another `${double}` in the output string -> getter only called once!
- change `name` -> getter not called



Show: Computed property in class component -> getter

Show: Computed property in composition api:

```
type State = {count: number, double: number};

const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
```



### 03: State outside the component

Use the `counterStore.ts`

- initialize it in `created`of Vue instance in `main.ts`

In `Counter.ts`

```
import {counterStore} from '../counterStore'


    function increase() {
      counterStore.decrease()
    }
    
    
    return {
      state: counterStore.state,
      increase,
      decrease,
      toggle
    };

```

