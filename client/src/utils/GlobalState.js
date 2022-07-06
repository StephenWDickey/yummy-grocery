
// import function to instantiate Context object
// import React Hook to use state from Context object
import React, { createContext, useContext } from "react";


// we import our reducer we created
import { useProductReducer } from './reducers';


// instantiate global Context object
const StoreContext = createContext();

// Context objects have a Provider and Consumer
// Provider takes state data that's passed into it and 
// allows components to use it as props
// Consumer grabs and uses data from Provider
const { Provider } = StoreContext;


// instantiate global state with useProductReducer
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    // state and dispatch are returned by useProductReducer
    // state is most up-to-date version of global state object
    // dispatch is the method to update our state, looks for an ACTION
    // we take state and add it as value to props object
    // this way we can pass more states into the object and use them!
    return <Provider value={[state, dispatch]} {...props} />;
};


// this is a custom hook that will take data from StoreProvider
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };