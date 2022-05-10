import {useState, useEffect} from "react";
import Catalog from "../../feature/catalog/catalog";
import { Product } from '../models/product';
 
 let count = 0 
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
      fetch('http://localhost:5000/api/products')
      .then(response => response.json() )
      .then(data => setProducts(data))
  },[])

  function addProduct(){
   // setProducts([...products, {name: 'product3', price:300.00}])
     
   setProducts(prevState => [...prevState, 
    {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length*100) + 100,
        brand: 'some brand',
        description: 'some descriprion',
        pictureUrl: 'http://picsumphotos/200'
    }])
  
  }
  return (
    <div> 
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct = {addProduct}/>
 
    </div>
    
  );
}

export default App;
