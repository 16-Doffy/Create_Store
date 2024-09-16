import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";
import Button from '@mui/material/Button';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);


  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    console.log(action);
    dispatch(action);
  };


  const handleDecreaseClick = () => {
    const action = decrease(); // action creator
    console.log(action);
    dispatch(action);
  };


  return (
    <div>
      <div>
        <Button variant="contained" color="success" onClick={handleIncreaseClick}>Increase</Button>
      </div>
      
      counter:{count}
      
      <div>
        <Button variant="contained" color="success" onClick={handleDecreaseClick}>Decrease</Button>
      </div>
    </div>
  );
}

export default CounterFeature;
