import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RES_IMAGE } from "../utils/constants";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    //how to read a dynamic url using params 
    // const params = useParams();
    //destructuring id
    const { resId } = useParams();
    // console.log(params);

    //getrestarantinfo will be an async function
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);

        console.log(resInfo?.cards[0]?.card?.card?.info);
    }

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);



    return (
        <div className="restaurant-info-container">
            <div className="wrapper">
                <div className="restaurant-basic-details-container">
                    <div className="basic-det-1">
                        <h2>{name}</h2>
                        <h3>{cuisines.join(", ")}</h3>
                        <h3>{costForTwoMessage}</h3>
                    </div>

                    <div className="basic-det-2">
                        {/* <img src={RES_IMAGE+cloudinaryImageId} /> */}

                    </div>


                </div>


                <div className="restaurant-menu-container">
                    {/* <h1>Restaurant id: </h1> */}
                    <ul className="menu-list-ul">
                        {itemCards.map(item =>
                            <li
                                key={item.card.info.id}
                            >
                                {item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                            </li>)}

                        <li>{itemCards[3].card.info.name}</li>
                    </ul>
                    {/* <p>Use a map function to iterate</p> */}

                </div>
            </div>



        </div >
    )
}


export default RestaurantMenu;