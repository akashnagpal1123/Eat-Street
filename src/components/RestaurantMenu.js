import { useParams} from "react-router-dom"

const RestaurantMenu = () =>{

    //how to read a dynamic url using params 
    const params = useParams();
    //destructuring id
    const {resId} = params;
    console.log(params);

    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>Restaurant Name </h2>
        </div>
    )
}


export default RestaurantMenu;