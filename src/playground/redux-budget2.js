import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//add expense

const addExpense = (expense = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: expense.description,
    note: expense.note,
    amount: expense.amount,
    createdAt: expense.createdAt
  }
});
//remove_expense
const removeExpense = (expense = {}) => ({
  type: "REMOVE_EXPENSE",
  id: expense.id
});

//edit expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SET_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
//SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
          s;
        }
      });
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
};
//filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});
const expenseOne = store.dispatch(
  addExpense({ description: "painting", amount: 8000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 500 })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(
  editExpense(expenseTwo.expense.id, { amount: 1500, description: "Travel" })
);
store.dispatch(sortByAmount());
store.dispatch(setTextFilter("coffee"));
store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(2500));