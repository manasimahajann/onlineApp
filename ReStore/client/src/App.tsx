import {useState, useEffect} from "react";
import { Product } from "./product";
 
//  const products = [
//    {
//      name:'pro1', price:100.00
//    },   
//    {
//     name:'pro2', price:120.00
//    }
 //]

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: "pro" + (prevState.length+1), 
        price: (prevState.length*100)+100,
        description: "some description", 
        pictureUrl: "http://picsum.photos/200",
        brand: "Some brand"
      }])
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
