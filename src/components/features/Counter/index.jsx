import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";
import Button from '@mui/material/Button';
import style  from './style.module.css';
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
    <div className={style.count}>
      <div>
        <Button variant="contained" color="primary" onClick={handleIncreaseClick}>Increase</Button>
      </div>
      
      counter:{count}
      
      <div>
        <Button variant="contained" color="secondary" onClick={handleDecreaseClick}>Decrease</Button>

      </div>
    </div>
  );
}

export default CounterFeature;
