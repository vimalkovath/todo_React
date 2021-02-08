import React, { useState, useContext } from 'react';
import { TodoContext } from "../TodoContext";
import List from './List';

export default function Todo(props) {

    const [list, setList] = useContext(TodoContext);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        console.log("TodoContext");
        e.preventDefault();
        setList(state => [...state, value]);
        setValue("");
    }
    return (
        <>
            <br></br>
            <div>
                <input value={value} type="text" onChange={(e) => setValue(e.currentTarget.value)} placeholder="Enter task..." />

                <button onClick={handleSubmit}>Text</button>
            </div>
            
            <List />

        </>
    );
}
