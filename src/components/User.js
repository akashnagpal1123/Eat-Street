import { useState } from "react";

const User =(props) =>{
    const [count] = useState(0);

    
    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name: Akash {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h3>Social Links: </h3>
    </div>
}

export default User;