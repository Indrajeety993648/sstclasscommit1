import "./AddToCart.css";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function AddToCart({ product }) {
    let { incrementProductQty, decrementProductQty } = useContext(CartContext);

    function increase() {
        // dispatch({type : , payload : })
        const product  = action.payload;
        if(state.items[product.id]){
          return{
            ...state,
            items:{
              ...state.items,
              [product.id]:{
                ...state.items[product.id],
                quantity : state.items[product.id].quantity +1
              }
            }
          }
        }
        else{
          return{
            ...state,
            items:{
              ...state.items,
              [product.id]:{
                ...product,
                quantity : 1
              }
            }
          }
        }
    }

    function decrease() {
        // dispatch({type : , payload :})
        const product = action.payload;
        if(state.items[product.id].quantity >1){
           return{
            ...state,
            items:{
              ...state.items,
              [product.id]:{
                ...state.items[product.id],
                quantity : state.items[product.id].quantity -1
              }
            }
           }
        }
        else{
          return{
            ...state,
            items:{
              ...state.items,
              [product.id]:{
                ...product,
                quantity : 0
              }
            }
          }
        }
    }

    return (
        <div className="product-controls">
            <button onClick={increase}>
                +
            </button>

            <button onClick={decrease}>
                -
            </button>
        </div>
    );
}

export default AddToCart;