import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// import RestaurantMenu from "./RestaurantMenu";
// import resList from "../utils/m\ockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  // 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");


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
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data);
  }



  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (<h1>Offline. Please check your Internet Connection</h1>);
  }

  return (listOfRestaurants.length === 0) ? <Shimmer />
    : (
      <div className="body">
        <div className="wrapper">
          <div className="filter-container flex">
            <div className="m-4 p-4">

              <input type="text" className="border border-solid border-black"
                placeholder="Search any Restaurant"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}>
              </input>

              <button className="px-5 py-1 mx-5 bg-blue-400 rounded-lg"
                onClick={() => {
                  //filter the retaurant cards &update UI
                  //searchText
                  console.log(searchText)
                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.data.name.toLowerCase().includes(searchText)
                  );
                  setFilteredRestaurants(filteredRestaurant);
                }}

              >Search</button>
            </div>
            <div className="m-4 p-4 flex items-center">
              <button
                className="px-4 py-2 mx-5 rounded-lg bg-green-300"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                  );
                  setListOfRestaurants(filteredList);
                }}
              >
                Top Rated Restaurants
              </button></div>

          </div>
          <h1>{listOfRestaurants.length} Restaurants Near You</h1>
          <div className="res-container flex flex-wrap">

            {filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}>

                {
                restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : 
                (<RestaurantCard resData={restaurant} />)
                }

                

                

              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Body;