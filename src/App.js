
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  
  const data = [{
    productimage: "https://tse4.mm.bing.net/th?id=OIP.kLNRhSrRG5BaSOMEEcktFAHaFu&pid=Api&P=0",
    productName: "Honda Dio",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>,
    price: "68625"
  },
  {
    productimage: "https://cdn1.acedms.com/uploads/category/hero/20190523052937000000-6968367914025868289.jpg",
    productName: "Hero Pleasure",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>,
    price: "77628"
  },
  {
    productimage: "https://tse2.mm.bing.net/th?id=OIP.QmIcY74TlRNCA5wwaGAGBAHaEi&pid=Api&P=0",
    productName: "Vespa ZX",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>,
    price: "117000"
  },
  {
    productimage: "https://tse1.mm.bing.net/th?id=OIP.NTTsbirnuiZwLDStFKzmwQHaFu&pid=Api&P=0",
    productName: "TVS Jupiter",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>,
    price: "87123"
  },
  {
    productimage: "https://tse1.mm.bing.net/th?id=OIP.aK4p6vWrU-v02pTYFDWKIwHaHa&pid=Api&P=0",
    productName: "TVS Apache RTR 160",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>,
    price: "125000"
  },
  {
    productimage: "https://tse4.mm.bing.net/th?id=OIP.uHFZrDGqaot1P1jhd2UUXQHaFr&pid=Api&P=0",
    productName: "Hero splendor pro",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    price: "74396"
  },
  {
    productimage: "https://tse3.mm.bing.net/th?id=OIP.6TRDKUC-EuBXxu77vLYjyQHaE6&pid=Api&P=0",
    productName: "Yamaha MT 15 V2",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>,
    price: "168000"
  },
  {
    productimage: "https://tse1.mm.bing.net/th?id=OIP.Z3gVJ_LGwPhWiCNNnjBdDAHaFj&pid=Api&P=0",
    productName: "Royal Enfield",
    rating: <div className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>,
    price: "172000"
  },
  ];
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div className='cart'>
        <h3><i class="fa-solid fa-cart-shopping"></i>CART {count}</h3>
      </div>
      <div className='header'>
        <h1>New Exclusive</h1>
        <h4>BIKE FOR SALES</h4>
      </div>
      <div className='parent'>
        {data.map((value, index)=><Cards
        index ={index}
        value ={value}
        count ={count}
        setCount ={setCount}
        />)}
    </div>
    </div>
  );
}

export default App;


function Cards({value,index,count,setCount}){
  const [show, setShow] = useState(false);
  function addtocart(){
    setShow(!show)
    setCount(count + 1)
  }
  function removefromcart(){
    setShow(!show)
    setCount(count - 1)
  }
  return(
    <div key={index} className='content'>
            <img className='image' variant="top" src={value.productimage} />
            <h3>{value.productName}</h3>
            <p>{value.rating}</p>
            <p>{value.price} RS</p>

            {!show ? <button className='normal'
            variant="primary"
            onClick={addtocart}
            >Add cart</button> :""}

            {show ? <button className='danger'
            variant="danger"
            onClick={removefromcart}
            >Remove cart</button> :""}
          </div>

        
      
      
  )
}