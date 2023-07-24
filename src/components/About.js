import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <div className="user-card-style">
          <h1>About Class Component</h1>
          <h2>This is Namaste React Web Series</h2>
          <UserClass name={"First"} location={"Delhi Class"} />
        </div>
        {/* <div className="user-card-style">
          <h1>About Class Component</h1>
          <h2>This is Namaste React Web Series</h2>
          <UserClass name={"Second"} location={"US Class"} />
        </div> */}

      </div>
    );
  }
}

export default About;

//React life cycle method diagram  