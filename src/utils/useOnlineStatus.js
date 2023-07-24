import { useEffect, useState } from "react";

//finalize the contracct
//input and output

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    //check if online status

    useEffect(() => {
       window.addEventListener("offline", () => { 
        setOnlineStatus(false);
       });

       window.addEventListener("online", () => { 
        setOnlineStatus(true);
       });
     

    }, []);

    //onlineStatus is a Boolean Value
    return onlineStatus;
}

export default useOnlineStatus;