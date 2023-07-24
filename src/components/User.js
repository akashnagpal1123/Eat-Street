import { useState } from "react";

// const User =({name}) =>{
const User =(props) =>{
    const [count, setCount] = useState(0);
    const [count1] = useState(10);

    
    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count1}</h1>
        {/* <h2>Name: Akash {name}</h2> */}
        <h2>Name: Akash {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h3>Social Links: </h3>
    </div>
}

export default User;