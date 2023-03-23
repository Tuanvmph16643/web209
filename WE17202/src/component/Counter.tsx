import { decrement, increaseByAmount, increment } from "../slice/couter";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Counter = () => {
    const counter = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <form action="">
                
            </form>
        </div>
    );
};

export default Counter;