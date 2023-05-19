import { CDN_URL } from "../utils/constants";
import { useState } from "react";
//cdn url is named export that is why curly braces is used

const styleCard = {
    border: "1px solid transparent"
}

// const RestaurantCard = ({resBranch, desc, resRating}) => {
const RestaurantCard = (props) => {

    const [likes, setLikes] = useState(0);
    const { resData } = props;

    const {
        cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo
    } = resData?.data;
    //optional chaining

    // console.log(props);
    return (

        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt='Tummy Section Outlet Image' />

            <h3>{name}</h3>
            <h4>Cose For Two: {costForTwo / 100}</h4>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating} Stars</h4>
            <h4>Delivery Time: {deliveryTime} mins</h4>
            <button onClick={() => {
                if (likes == 0) {
                    setLikes(1)
                }
                else {
                    setLikes(0)
                }
            }
            }>
                {likes} ❤️
            </button>
            {/* <h3>Tummy Section, {resBranch}</h3>
                <h4>North Indian, {desc}</h4>
                <h4>{resRating} Stars</h4> */}


        </div>
    )
}

export default RestaurantCard;