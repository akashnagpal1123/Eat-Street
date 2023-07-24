import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    console.log(data)
    return (
        <div>
            {/* {header} */}
            <div className="w-6/12 mx-auto bg-slate-300 shadow-lg p-4 my-3 ">

                <div className="flex justify-between">

                    <span >{data.title} ({data.itemCards.length})</span>

                    <span>🔻</span>
                </div>
                <ItemList items={data.itemCards}/>
            </div>
            {/* {accordian body} */}


        </div>
    );
};

export default RestaurantCategory;