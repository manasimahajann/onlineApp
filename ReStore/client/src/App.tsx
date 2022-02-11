 import {useState, useEffect} from "react";
 
//  const products = [
//    {
//      name:'pro1', price:100.00
//    },   
//    {
//     name:'pro2', price:120.00
//    }
 //]

function App() {
  const [products, setProducts] = useState([ 
    {
      name:'pro1', price:100.00
    },   
    {
     name:'pro2', price:120.00
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {name: "pro" + (prevState.length+1), price: (prevState.length*100)+100}]
      )
  }

  return (
    <div> 
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => 
          (
            <li key={index}>{item.name} - {item.price}</li>
          )
        )}
      </ul>
      
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
