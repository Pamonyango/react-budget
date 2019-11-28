// // import { createStore } from "redux"; //state is a container

// // //Action creators - functions that return objects
// // const incrementCount = ({ incrementBy = 1 } = {}) => {
// //   return {
// //     type: "INCREMENT",
// //     incrementBy
// //   };
// // };

// // const decrementCount = ({ decrementBy = 1 } = {}) => {
// //   return {
// //     type: "DECREMENT",
// //     decrementBy
// //   };
// // };
// // const setCount = payload => {
// //   return {
// //     type: "SET",
// //     count: payload.count
// //   };
// // };
// // const resetCount = () => {
// //   return {
// //     type: "RESET"
// //   };
// // };
// // //reducers are pure function
// // const countReducer = (state = { count: 0 }, action) => {
// //   switch (action.type) {
// //     case "INCREMENT":
// //       return {
// //         count: state.count + action.incrementBy
// //         // count: state.count + increment
// //       };
// //     case "SET":
// //       return {
// //         count: action.count
// //       };

// //     case "RESET":
// //       return {
// //         count: 0
// //       };

// //     case "DECREMENT":
// //       return {
// //         count: state.count - action.decrementBy
// //       };
// //     default:
// //       return state;
// //   }
// // };
// // const store = createStore(countReducer);
// // store.subscribe(() => {
// //   console.log(store.getState());
// // });

// // //action is an object that gets sent to the store
// // //action must have a type/ pay load

// // //increment count
// // store.dispatch(incrementCount({ incrementBy: 5 })); //dispatching invocation

// // store.dispatch(incrementCount());
// // // store.dispatch({
// // //     type: 'INCREMENT',
// // //     incrementBy: 5
// // // });

// // // store.dispatch({
// // //     type: 'INCREMENT'
// // // });

// // // store.dispatch
// // // ({
// // //     type:'RESET',

// // // });
// // store.dispatch(resetCount());
// // store.dispatch(decrementCount());
// // store.dispatch(decrementCount({ decrementBy: 10 }));

// // // store.dispatch({
// // //     type:'DECREMENT',
// // //     decrementBy:10

// // // store.dispatch({
// // //     type:'SET',
// // //     count: '101'
// // // });
// // store.dispatch(setCount({ count: 101 }));
// import { createStore } from "redux";

// const defaultState = { count: 0 };
// //state = { count: 0};

// const counterReducer = (state = defaultState, action) => {
//   switch (
//     action.type //
//   ) {
//     case "INCREMENT":
//       const incrementBy = action.incrementBy ? action.incrementBy : 55;
//       return {
//         count: state.count + incrementBy
//       };
//     case "DECREMENT":
//       const decrementBy = action.decrementBy ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy
//       };
//     case "SET":
//       return {
//         count: action.count
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 5
//       };
//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   //listens to changes in the state
//   console.log(store.getState());
// });

// //ACTION CREATORS
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: payload.incrementBy ? payload.incrementBy : 1
// });

// store.dispatch(incrementCount());

// const decrementCount = (payload = {}) => ({
//   type: "DECREMENT",
//   decrementBy: payload.decrementBy ? payload.decrementBy : 1
// });
// store.dispatch(decrementCount());

// store.dispatch({
//   type: "SET",
//   count: 250
// });
// // store.dispatch({
// //   type: "DECREMENT",
// //   decrementBy: 5
// // });

// store.dispatch(decrementCount({ decrementBy: 55 }));

// const payload = { incrementBy: 55 };
// store.dispatch(incrementCount(payload));

//store.dispatch(decrementcount({ decrementBy: 5 }));

//Assignment(28/11/2019)
//use different action creators to incrememnt, decrement, set a value(e.g 500), reset a value to 0.

//dispatch the action creators to the reducer and change the state

//to do this import the createstore module and use subscribe to note state changes with each dispatch

import { createStore } from "redux";
const defaultState = { count: 0 };

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = action.incrementBy ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case "SET":
      return {
        count: action.count
      };

    case "RESET":
      return {
        count: 0
      };

    case "DECREMENT":
      const decrementBy = action.decrementBy ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(setCount({ count: 500 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 50 }));
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 50 }));

import { createStore } from "redux";
const defaultState = { count: 0 };

const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: payload.incrementBy ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
  type: "DECREMENT",
  decrementBy: payload.decrementBy ? payload.decrementBy : 1
});

const setCount = payload => {
  return {
    type: "SET",
    count: payload.count
  };
};
const resetCount = () => {
  return {
    type: "RESET"
  };
};

// store.dispatch(setCount({ count: 500 }));
// store.dispatch(incrementCount());
// store.dispatch(resetCount());
// store.dispatch(decrementCount());
// store.dispatch(decrementCount({ decrementBy: 50 }));
