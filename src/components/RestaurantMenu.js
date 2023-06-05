import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    //how to read a dynamic url using params 
    const params = useParams();
    //destructuring id
    const { resId } = params;
    console.log(params);

    const [restaurant, setRestaurant] = useState({});

    //getrestarantinfo will be an async function
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.634817297382003&lng=77.12153971195221&restaurantId=343544"
        );

        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[0].card.card.info);
        console.log(Object.values(json.data.cards[0]))
        setRestaurant(json.data)
    }
        // {console.log(Object.values()) }
        // <h2>Restaurant Name {restaurant.cards[0].card.card.info.name}</h2>
        // <img src={CDN_URL + restaurant.cards[0].card.card.info.cloudinaryImageId} />
    return (
        <div>
            <div>
                <h1>Restaurant id: {resId}</h1>
                <h2>Restaurant Name {restaurant.cards[0].card.card.info.name}</h2>
                <img src={CDN_URL + restaurant.cards[0].card.card.info.cloudinaryImageId} />

            </div>

        </div>
    )
}


export default RestaurantMenu;