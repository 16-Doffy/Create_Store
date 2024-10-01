import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from '../components/features/Counter/counterSlice';
import userReducer from '../components/features/Auth/components/userSlice';
    
const rootReducer = {
    counter:counterReducer,
    user:userReducer,
};
const store = configureStore ({
    reducer:rootReducer
});

export default store;