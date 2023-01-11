import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "../feature/task/taskSlice";

const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})

export default store