import React from "react";
import ReactDOM from "react-dom"; //to take what is converted and taken to browser to be seen
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 4500, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 3400, createdAt: 11000 })
);
store.dispatch(
  addExpense({ description: "Visit Pakistan", amount: 7000, createdAt: 8000 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
