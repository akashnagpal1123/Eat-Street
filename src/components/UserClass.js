import React from "react";


class UserClass extends React.Component {

    constructor(props){
        super(props);console.log(props);
    }

    render() {
        return (
        <div className="user-card">
            <h2>Name: Akash {this.props.name}</h2>
            <h3>Location: Delhi</h3>
            <h3>Social Links: </h3>
        </div>
        );
    }
}
export default UserClass;
