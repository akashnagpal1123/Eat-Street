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

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating, locality } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards, title } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        console.log(categories);


        const fvar=998;
        console.log(fvar);


    return (
        <div className="restaurant-info-container">

            <div className="wrapper">

                {/* <div className="w-10/12 mx-auto p-4 my-3 flex full-w bg-gradient-to-r from-red-100 to-slate-400 shadow-md rounded-lg" */}
                
                <div className="w-10/12 mx-auto p-4 my-3 flex full-w bg-gradient-to-r bg-purple-200 shadow-md rounded-lg"

                >

                    <div className="basis-3/4 p-3">
                        <div className="ffr-1">
                            <h2 className="text-5xl font-bold text-gray-900 mb-8">{name}</h2>
                            <h3 className="text-2xl font-bold text-gray-600">{cuisines.join(", ")}</h3>
                            <h3 className="text-2xl font-bold text-gray-600 text-left">{costForTwoMessage}</h3>
                            <h3 className="text-2xl font-bold text-gray-600 text-left">
                                {avgRating}❤️
                            </h3>
                            <h3 className="text-2xl font-bold text-gray-600 text-left"> {locality}</h3>
                            {/* <div 
                            className={({avgRating}>4.9) ? ("temp2" ) : ("temp1") } >
                            Rating: {avgRating}❤️
                            </div> */}
                        </div>


                    </div>

                    <div className="basis-1/4 items-center">
                        <div className="block border border-blue-600">

                            <img  className="inline-block border border-blue-600" src={RES_IMAGE + cloudinaryImageId} />
                        </div>
                    </div>

                </div>

                <div className="font-bold">

                    {/* categories accordians */}

                    {categories.map((category,index)=>(
                        //controlled component
                        <RestaurantCategory key = {category?.card?.card.title} 
                        
                        data={category?.card?.card}
                        
                       showItems={index===showIndex ? true :false }
                     

                        setShowIndex={() => setShowIndex(index)}

                        />
                    ))}


                </div>
            </div>
            <PageScrollProgressBar className="pscrollbar" color="red
            
            4" bgColor="transparent" height="6px" top="99%" />
        </div >
    )
}


export default RestaurantMenu;