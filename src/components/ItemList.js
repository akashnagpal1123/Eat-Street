import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  // console.log(items);


  const dispatch = useDispatch();


  const handleAddItem=(item)=>{
    //dispatch and action
    dispatch(addItem(item));
  }


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pl-5 m-2 mb-8  text-left flex justify-between bg-stone-100 rounded-xl"
        >
          <div className="w-9/12">
            <div className="py-2">

              <span className="text-lg font-bold text-blue-900">{item.card.info.name}</span>

              <div className="text-md mt-2 font-semibold text-zinc-800">
                ₹ {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>

            </div>

            <p className="text-sm font-semibold text-gray-500 ">{item.card.info.description}</p>

          </div>

          <div className="w-3/12 p-3">
            
            <div className="absolute ">
              <button className=" p-2 my-12  rounded-lg bg-black text-white shadow-lg"
              // onClick={handleAddItem}
              onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>

            </div>

            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;