import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import RestaurantMenu from "./RestaurantMenu";
// import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  // 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  }

  console.log("hello1")

  return (listOfRestaurants.length === 0) ? <Shimmer />
    : (
      <div className="body">
        <div className="wrapper">
          <div className="filter-container">
            <div className="search">

              <input type="text" className="search-box-style"
                placeholder="Search any Restaurant"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}>
              </input>

              <button className="filter-search-Btn"
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
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.data.avgRating > 4
                );
                setListOfRestaurants(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <h1>{listOfRestaurants.length} Restaurants Near You</h1>
          <div className="res-container">

            {filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}>
                <RestaurantCard  resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Body;