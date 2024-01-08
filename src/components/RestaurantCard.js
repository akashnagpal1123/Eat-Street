import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext "

const RestaurantCard = (props) => {
  const { resData } = props;


  const {loggedInUser} = useContext(UserContext);

  // const {
  //   cloudinaryImageId,
  //   name,
  //   avgRating,
  //   cuisines,
  //   costForTwo,
  //   deliveryTime,
  //   sla,
  //   // } = resData?.data;
  // } = resData;


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
  resData?.info;
  console.log(resData?.info);
  // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

  return (

    <div className="res-card m-4 p-4 w-[250px] bg-neutral-100 hover:bg-neutral-200 rounded-lg shadow-lg hover:scale-105 transition ease-in-out delay-50">
      <div className="rescard-img">
        <img
          className="rounded-sm"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <h3 className=" text-xl text-left mt-2 mb-0 font-bold">{name}</h3>
      <p className="cuisines-class text-sm mb-5  text-gray-500 text-left font-semibold">{cuisines.join(", ")}</p>

      <div className="rescard-det-box flex">
        <h4 className="text-left text-purple-700 text-sm font-semibold w-full">{avgRating} Stars</h4>
        {/* <h4 className=" text-right text-purple-700 text-sm font-semibold w-full">₹{costForTwo / 100} FOR TWO</h4> */}
        <h4 className=" text-right text-purple-700 text-sm font-semibold w-full">{costForTwo}</h4>
      </div>
      <h4 className=" text-left mt-2 text-sm text-green-600  font-semibold">🛵 in {sla?.slaString} minutes ➡️</h4>
      {/* <h4>{loggedInUser}</h4> */}
    </div>
  );
};


// text-gray-600
//Creating a Higher Order Component

//input-restaurant Card  => //output-Restaurant cardPromoted

export const withPromotedLabel = (RestaurantCard) => {

  //return a promoted label new component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 text-red-100 ml-5 mt-4 rounded-md p-2">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };

};

export default RestaurantCard;
