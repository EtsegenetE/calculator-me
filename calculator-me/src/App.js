
import './App.css';
import Button from './Button';
import {useReducer} from "react";


export const ACTION ={
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
}

function reducer(state, {type, payload}) {
  console.log("Action Type:", type);
  console.log("Payload:", payload);
  console.log("State Before:", state);
  
 
  switch(type) {
    case ACTION.ADD_DIGIT:
      if(state.overwrite) {
        return{
          ...state,
          currentOperation: payload.digit,
          overwrite: false,
        }
      }

      if(payload.digit === "0" && state.currentOperation === "0") {
        return state
      }

      if (payload.digit === "." && state.currentOperation.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperation: `${state.currentOperation || ""}${payload.digit}`,
      };
      case ACTION.CHOOSE_OPERATION:
        // If there's no current or previous operation, return as is
        if (state.currentOperation === null && state.previousOperation === null) {
          return state;
        }
  
        // If currentOperation is null, just set the operation without changing the number
        if (state.currentOperation === null) {
          return {
            ...state,
            operation: payload.operation,
          };
        }
  
        // If previousOperation is null, move currentOperation to previousOperation and reset current
       
          return {
            ...state,
            previousOperation: state.currentOperation,
            operation: payload.operation,
            currentOperation: null,
          };
        
  
        // If both current and previous exist, evaluate and set new operation
        
    case ACTION.CLEAR:
      return{
      currentOperation: "",
      previousOperation: "",
      operation: null,
    };
    case ACTION.DELETE: 
    if(state.overwrite) {
      return{
        ...state,
        overwrite: false,
        currentOperation: "",
      };
    }
    return{
      ...state,
      currentOperation: state.currentOperation?.slice(0, -1) || "",
    };

    case ACTION.EVALUATE:
      if(state.operation == null || state.currentOperation == null || state.previousOperation ==null) {
        return state;
      }
     return{
      ...state,
      overwrite: true,
      currentOperation: evaluate(state),
      previousOperation: "",
      operation: null
     };
     default: 
     return state;
  }
}

function evaluate({currentOperation, previousOperation, operation}) {
  const prev = parseFloat(previousOperation);
  const curr = parseFloat(currentOperation);
  if (isNaN(prev) || isNaN(curr)) 
    return "";

  let computation = "";
  switch (operation) {
    case "+" :
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "*":
      computation = prev * curr;
      break;
    case "/":
      computation = prev / curr;
      break;
      default:
        return "";
  }
  return computation.toString();
}

const initialState = {
  currentOperation: "",
  previousOperation: "",
  operation: null,
  overwrite: false,
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigit: 0,
})

export function formatOperand(operand) {
  if(operand == null || operand === "") 
    return 
  const [integer, decimal] = operand.split(".")
  if(decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  const[{currentOperation, previousOperation, operation}, dispatch] = useReducer(reducer, initialState)

 
  return (
   <Button 
    currentOperation={currentOperation}
    previousOperation={previousOperation}
    operation={operation}
    dispatch={dispatch}
   />
  );
}

export default App;
