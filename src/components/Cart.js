import { useSelector } from "react-redux";
import ItemList from "./ItemList";

import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        //dispatch and action
        dispatch(clearCart());
    }

    const handleRemoveItem = () => {
        //dispatch and action
        dispatch(removeItem());
        
    }


    //to read the store we have to subscribe to the store\

    //inefficient way
    // const store = useSelector((store)=>store)
    // const cartItems = stroe.cart.items;


    //efficient way
    const cartItems = useSelector((store) => store.cart.items);


    return (
        <>
            <div className="text-center m-5 p-5 font-bold text-3xl">Cart Page </div>


            <div className=" p-2 pl-5 m-2 mb-8  text-left flex justify-between  rounded-xl">
                <div className=" w-10/12 m-auto">
                    {cartItems.length === 0 && <h1>Your Cart is Empty. Add Items to the cart</h1> 

                    }

                    <ItemList items={cartItems} />

                    {cartItems.length != 0 && <h1>{cartItems.length} Items</h1> && <button className="border bg-red-300 text-sm p-1 rounded-md" onClick={() => handleClearCart()} >Empty Cart</button>
                    }

<button className="border bg-yellow-500 text-sm p-1 rounded-md" onClick={() => handleRemoveItem()} >Remove     Item</button>
                  

                    

                </div>

            </div>



        </>
    )
}

export default Cart;