import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RES_IMAGE } from "../utils/constants";
import Shimmer from "./Shimmer";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import { MENU_API_URL } from "../utils/constants";

import PageScrollProgressBar from "react-page-scroll-progress-bar";

import BG11 from "../assets/bg-11.jpg";

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

        console.log(resInfo);

        console.log(resInfo?.cards[0]?.card?.card?.info);
    }

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating, locality } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards, title } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards.title);

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
                            
                            <img src={RES_IMAGE+cloudinaryImageId} />
                        </div>
                    </div>

                </div>

                <div className="wrap-list-set">


                    <div className="restaurant-menu-container">
                        {/* <h1>Restaurant id: </h1> */}
                        <ul className="menu-list-ul">
                            <h1>{title}</h1>
                            {itemCards.map(item =>
                                <div className="menu-item-div"
                                    key={item.card.info.id}>

                                    <div className="item-det-div">
                                        
                                        <div className="item-name">
                                            {item.card.info.name}
                                        </div>

                                        <div className="item-price">
                                            Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                        </div>

                                    </div>




                                    <div className="item-img-div">
                                        <img src={MENU_ITEM_IMG_URL + item.card.info.imageId} />
                                    </div>

                                </div>

                            )}


                            <li>{itemCards[3].card.info.name}</li>
                        </ul>
                        {/* <p>Use a map function to iterate</p> */}

                    </div>
                </div>
            </div>
            <PageScrollProgressBar className="pscrollbar" color="red
            
            4" bgColor="transparent" height="6px" top="99%" />
        </div >
    )
}


export default RestaurantMenu;