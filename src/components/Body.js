import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



function filterData(searchText, listOfRestaurants) {

    const filteredData = listOfRestaurants.filter((res) =>
        res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filteredData;
}

const Body = () => {

    //local state variable - super powerfuul variable
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = useState([]);

    //Avoid rendering a component 
    const [listAllOfRestaurants, setAllListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    // const [listOfRestaurants] = useState([{
    //     data: {

    //     }
    // }]);

    //normal js variable
    // let listOfRestaurants = [];

    // let searchTxt = "Dominos";
    //state hook
    const [searchText, setSearchText] = useState("");


    //a component renders 2 times : 1- when state is changed, 2- when state. 2- props changes
    //empty dependency array- it will be called once after render() is called
    // if dependency array is [searchtext] - it will be called once after evryinitial render + every time after rerender when searchText changes

    useEffect(() => {

        //API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.634817297382003&lng=77.12153971195221&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //optional chaining should be used
        setAllListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    //the [] is called as dependency array which stops the component from rerendering

//Conditional Rendering
//well have to render either schiimer ui or data ui
//if listOfrestaurants is empty: load schimmer ui
//if listOfrestaurants has data then load actual ui


//not render component  - early return
if(!listAllOfRestaurants) return null;

if(filteredListOfRestaurants?.length===0) return <h1>No restaurant match your filter</h1>

    return listAllOfRestaurants?.length === 0 ? 
    (<Shimmer/>)
    :(
        <div className="body">
            <div className="wrapper">
                <div className="search-container">

                    <input type="text" className="search-input" placeholder="Search"

                        value={searchText}
                        //this is known as two way binding
                        onChange={(e) => {
                            // searchText=e.target.value;
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn"
                        onClick={
                            () => {
                                //need to filter the daat
                                const data = filterData(searchText, listAllOfRestaurants);
                                // update the state - listofresaturants
                                setFilteredListOfRestaurants(data);
                            }}
                    >
                        Search</button>

                    <p>{searchText}</p>

                </div>

                <div className="filter">Filter Restaurants
                    <button className="filter-btn"
                        onClick={() => {
                            console.log("h")

                            const filteredList = listOfRestaurants.filter(
                                (res) => res.data.avgRating > 4.1
                            );
                            setListOfRestaurants(filteredList);

                            // ListOfRestaurants = ListOfRestaurants.filter(
                            //     (res) => res.data.avgRating>4
                            // );
                            // console.log(listOfRestaurants)
                        }
                        }
                    >
                        Top Rated Restaurant (4.0-5.0)
                    </button>
                </div>
                <div className="res-container">
                    {
                        // resList.map((restaurant, index) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                        // )

                        //write logic for no restaurant found here
                        filteredListOfRestaurants.map((restaurant, index) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;


//sarch functionality
/* 
when we click on search the data needs to be filtered
therefore the resList/listOfrestaurants needs to be modified
state is created listofres , setlistofrest....................
on click of search button
search text should filter the listofrest
filter algo is applied which gies some data about
filter data will take searchtext and listofrestaurants as args
therefore, if filtered data will return 3 rest
we will pass it (data) to setlistofrest...
*/