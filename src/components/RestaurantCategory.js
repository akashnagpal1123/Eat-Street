import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {


    console.log(data);


    // const [showItems,setShowItems] = useState(false)

    //accordian feature
    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    }
    // bg-gray-100 shadow-lg 
    return (
        <div>
            {/* {header} */}
            <div className="w-8/12 mx-auto p-5 my-3 shadow-md ">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}
                >
                    <span className="text-black font-bold text-lg">{data.title} ({data.itemCards.length})</span>

                    <span>🔽</span>

                </div>
                {/* {accordian body} */}

                {showItems && <ItemList items={data.itemCards} />}


            </div>



        </div>
    );
};

export default RestaurantCategory;