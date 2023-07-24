import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

  return (

    <div className="res-card m-4 p-4 w-[250px] bg-purple-300 hover:bg-green-200">
      <div className="rescard-img">
        <img
          className="rounded-xl"
          alt="res-logo" 
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <h3>{name}</h3>
      <p className="cuisines-class">{cuisines.join(", ")}</p>

      <div className="rescard-det-box">
        <h4>{avgRating} Stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
      </div>
      <h4 >Approx. {deliveryTime} minutes</h4>
    </div>
  );
};

//Creating a Higher Order Component

//input-restaurant Card  //output-Restaurant card promoted

export const withPromotedLabel =(RestaurantCard)=>{

  //return a promoted label new component
  return (props)=>{
     return (
      <div>
        <label className="absolute bg-red-600 text-red-100 ml-5 mt-4 rounded-md p-2">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
     );
  };

};

export default RestaurantCard;
