import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
  return(
    <div>
      <div className="user-card-style">
          <p>This is the about page for the food recipe app </p>
          <User name={"Akash (Function)"}/>
    
      </div>

      <div className="user-card-style">
          <p>This is the about page for the food recipe app </p>
  
          <UserClass name = {"Akash Nagpal (class)"}/>
      </div>
    </div>
      
  )
}

export default About;