import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import { useContext } from "react"

import UserContext from "../utils/UserContext";

import { FaFilter } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

// import RestaurantMenu from "./RestaurantMenu";
// import resList from "../utils/m\ockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  // 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filtersActive, setFiltersActive] = useState(false);


  //Higher Order Component 
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //useEffect Hook

  useEffect(() => {
    console.log("useEffect CALLed")
    fetchData();

  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.634817297382003&lng=77.12153971195221&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    //optional chaining
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data);

    // setListOfRestaurants(
    //   // json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRestaurants(
    //   // json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };



  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (<h1>Offline. Please check your Internet Connection</h1>);
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (listOfRestaurants.length === 0) ? 
  <Shimmer />
    : (
      <div className="body bg-white">
        <div className="wrapper">
          <div className="w-10/12 mx-auto">

            <div className=" m-1 p-1 items-center">
              <label>UserName</label>

              <input className="border border-black p-3" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}>

              </input>
            </div>

            <div className="mr-1 mt-1 mb-1 p-1 text-left">

              <input type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-5"
                placeholder="Search any Restaurant"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}>
              </input>

              <button className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-400dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => {
                  //filter the retaurant cards &update UI
                  //searchText
                  console.log(searchText)
                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                    // res.data.name.toLowerCase().includes(searchText)

                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRestaurant);
                }}

              >Search</button>

            </div>

            <div className="flex">

              <div><VscSettings size="35px" className=" inline mt-2.5 mr-2 text-gray-700" /></div>


              <div className="m-1 p-1 flex items-center">
                <button
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400  dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      //  (res) => res.data.avgRating > 4
                      (res) => res.info.avgRating > 4.3

                    );
                    // setListOfRestaurants(filteredList);

                    setFilteredRestaurants(filteredList);
                    setFiltersActive(true);
                  }}
                  disabled={filtersActive}
                >
                  🌟 4.3 +
                </button>

              </div>

              <div className="m-1 p-1 flex items-center">
                <button
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      //  (res) => res.data.avgRating > 4
                      (res) => res.info.avgRating > 3.0

                    );
                    // setListOfRestaurants(filteredList);

                    setFilteredRestaurants(filteredList);
                  }}
                >
                  🌟 3.0 +
                </button>
              </div>

              <div className="m-1 p-1 flex items-center">
                <button
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      //  (res) => res.data.avgRating > 4
                      (res) => res.info.sla.deliveryTime < 21

                    );
                    // setListOfRestaurants(filteredList);

                    setFilteredRestaurants(filteredList);
                  }}
                >
                  🛵 in 20 mins
                </button>
              </div>

              <div className="m-1 p-1 flex items-center">
              <button
                className="text-white bg-gradient-to-r from-black to-gray-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={() => {
                  // Reset filters and enable all buttons
                  setFilteredRestaurants(listOfRestaurants);
                  setFiltersActive(false);
                }}
              >
                Remove Filters
              </button>
            </div>







            </div>

            

          </div>


          <h1 className="text-3xl text-purple-900 font-bold">{filteredRestaurants.length} Restaurants Near You</h1>
          {/* <div className="res-container  flex flex-wrap"> */}
          <div className="w-10/12 mx-auto p-4 my-3 flex flex-wrap">


            {filteredRestaurants.map((restaurant) => (
              // <RestaurantCard key={restaurant.info.id} resData={restaurant} />




              <Link
                // key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}>
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}>

                {/* {
                restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant} /> */}

                {restaurant?.info.promoted ? (
                  <RestaurantCardPromoted resData={restaurant?.info} />
                ) :
                  (
                    // <RestaurantCard resData={restaurant} />

                    //if restaurant is promoted then add a promoted label

                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                  )}
              </Link>


            ))}




          </div>
        </div>
      </div>
    );
};

export default Body;