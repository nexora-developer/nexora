import React,{createContext,useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children})=>{

const [cart,setCart] = useState([])

function addToCart(product){

const exist = cart.find(item=>item.id===product.id)

if(exist){

setCart(cart.map(item=>

item.id===product.id
? {...item,qty:item.qty+1}
: item

))

}else{

setCart([...cart,{...product,qty:1}])

}

}

function increase(id){

setCart(cart.map(item=>

item.id===id
? {...item,qty:item.qty+1}
: item

))

}

function decrease(id){

setCart(cart.map(item=>

item.id===id
? {...item,qty:item.qty-1}
: item

).filter(item=>item.qty>0))

}

return(

<CartContext.Provider value={{cart,addToCart,increase,decrease}}>

{children}

</CartContext.Provider>

)

}