const products = Array.from({length:29},(_,i)=>({

id:i+1,
name:"Product "+(i+1),
price:100+i*15,
category:i%2===0?"Grocery":"Electronics",
image:"https://via.placeholder.com/200"

}))

export default products