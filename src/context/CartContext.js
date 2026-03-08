import React,{createContext,useState} from "react"

export const CartContext = createContext()

function CartProvider({children}){

const [cart,setCart] = useState([])

function addToCart(product){

const exist = cart.find(i=>i.id===product.id)

if(exist){

setCart(cart.map(i=>
i.id===product.id
? {...i,qty:i.qty+1}
: i
))

}else{

setCart([...cart,{...product,qty:1}])

}

}

function increase(id){

setCart(cart.map(i=>
i.id===id
? {...i,qty:i.qty+1}
: i
))

}

function decrease(id){

setCart(cart.map(i=>
i.id===id
? {...i,qty:i.qty-1}
: i
).filter(i=>i.qty>0))

}

return(

<CartContext.Provider
value={{
cart,
addToCart,
increase,
decrease
}}
>

{children}

</CartContext.Provider>

)

}

export default CartProvider