import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import {formatOperand} from "./App"
import { ACTION } from "./App";

function Button ({currentOperation, previousOperation, operation, dispatch}) {
    
    return(
        <div className= "calculator-grid">
            <div className="output">
                <div className="previous-and-operation">
                <div className="previous">{formatOperand(previousOperation)}</div>
                {operation && <div className="operation">{operation}</div>}
                </div>
                <div className="current">{formatOperand(currentOperation)}</div>
            </div>
            <button className = "span-two" onClick={() =>dispatch({type: ACTION.CLEAR})}>C</button>
            <button onClick={() => dispatch({type: ACTION.DELETE})}>DEL</button>
            <OperationButton operation="+" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch}/>
            <DigitButton digit="2" dispatch={dispatch}/>
            <DigitButton digit="3" dispatch={dispatch}/>
            <OperationButton operation="*" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch}/>
            <DigitButton digit="5" dispatch={dispatch}/>
            <DigitButton digit="6" dispatch={dispatch}/>
            <OperationButton operation="/" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch}/>
            <DigitButton digit="8" dispatch={dispatch}/>
            <DigitButton digit="9" dispatch={dispatch}/>
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch}/>
            <DigitButton digit="0" dispatch={dispatch}/>
            <button className = "span-two" onClick={() => dispatch({type: ACTION.EVALUATE})}>=</button>
        </div>
    );
}

export default Button;