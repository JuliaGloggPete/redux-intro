import { useDispatch } from "react-redux"
import { actions } from "../features/counter";

const Counter = () => {

const dispatch = useDispatch();

const increase = () => dispatch(actions.increase());
const decrease = () => dispatch(actions.decrease());



    return(
        <div>
            Value:
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>




        </div>
    )

}

export default Counter;