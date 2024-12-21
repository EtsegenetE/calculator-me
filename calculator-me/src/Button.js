import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import {formatOperand} from "./App"

function Button ({currentOperation, previousOperation,dispatch}) {
    
    return(
        <div className= "calculator-grid">
            <div className="output">
                <div className="previous">{formatOperand(previousOperation)}</div>
                <div className="current">{formatOperand(currentOperation)}</div>
            </div>
            <button className = "span-two" onClick={() =>dispatch({type: "clear"})}>C</button>
            <button onClick={() => dispatch({type: "delete"})}>DEL</button>
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
            <button className = "span-two" onClick={() => dispatch({type: "evaluate"})}>=</button>
        </div>
    );
}

export default Button;