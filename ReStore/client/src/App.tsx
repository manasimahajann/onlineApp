 const products = [
   {
     name:'pro1', price:100.00
   },   
   {
    name:'pro2', price:120.00
   }
 ]
function App() {
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
    </div>
  );
}

export default App;
