import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RES_IMAGE } from "../utils/constants";
import Shimmer from "./Shimmer";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


import PageScrollProgressBar from "react-page-scroll-progress-bar";
import RestaurantCategory from "./RestaurantCategory";
import BG11 from "../assets/bg-11.jpg";


const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    //how to read a dynamic url using params 
    // const params = useParams();
    //destructuring id
    const { resId } = useParams();
    // console.log(params);

    const resInfo = useRestaurantMenu(resId);

    //getrestarantinfo will be an async function

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating, locality } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards, title } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        console.log(categories);

    return (
        <div className="restaurant-info-container">

            <div className="wrapper">

                <div className="restaurant-basic-details-container">

                    <div className="basic-det-1">
                        <div className="ffr-1">
                            <h2>{name}</h2>
                            <h3>{cuisines.join(", ")}</h3>
                            <h3>{costForTwoMessage}</h3>
                            <h3>
                                {avgRating}❤️
                            </h3>
                            <h3> {locality}</h3>
                            {/* <div 
                            className={({avgRating}>4.9) ? ("temp2" ) : ("temp1") } >
                            Rating: {avgRating}❤️
                            </div> */}
                        </div>


                    </div>

                    <div className="basic-det-2">
                        <div className="basic-det-1-img-div">

                            <img src={RES_IMAGE + cloudinaryImageId} />
                        </div>
                    </div>

                </div>

                <div className="wrap-list-set">

                    {/* categories accordians */}
                    {categories.map((category)=>(
                        <RestaurantCategory data={category?.card?.card}/>
                    ))}


                </div>
            </div>
            <PageScrollProgressBar className="pscrollbar" color="red
            
            4" bgColor="transparent" height="6px" top="99%" />
        </div >
    )
}


export default RestaurantMenu;