# State Management

## Diffence between Local and Global state

For **Local**:

- State only needed only by one or few components;
- Only that component and child components have access to it (via _props_).
- Always start with local state and use global when needed.

For **Global**:

- State that many componets might need;
- _Shared_ state that is accessible to every component in the entire app.

## **When** to use state?

If you need to store data and the data doesn't change at some point
// Use regular _const_ variable

If the data does change and can be computed from existing state/props
// Use derived state

If the data can't be computed from existing state/props and it doesn't re-render a component
// Use Ref (useRef)

And if it _does_ re-render a component, use a _new piece of state_

## **Where** to use state?

If it's used by the component
// Leave in component

If not and yes to a child component
// Pass to child via props

If not used by child and yes to siblings or parent
// **Lift state up** to first common parent

## Child-to-Parent communication

Since it's an inverse data flow, the only way of updating the parent state from the child component is to use the _set_ function
which updates the state in the parent component

## Derived State

State that is computed from an existing piece of state or from props

So this:

const [cart, setCart] = useState([
{ name: "Java", price: 15.99 },
{ name: "Node", price: 14.99 },
]);
const [numItems, setNumItems] = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);

Will turn into this:

const [cart, setCart] = useState([
{ name: "Java", price: 15.99 },
{ name: "Node", price: 14.99 },
]);
const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
