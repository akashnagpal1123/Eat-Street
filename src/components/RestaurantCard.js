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

    <div className="res-card">
      <div className="rescard-img">
        <img
          className="res-logo"
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

export default RestaurantCard;
