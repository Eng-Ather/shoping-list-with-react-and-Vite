import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card';
import { getAllProduct } from './utils/getProduct';

function App() {
  const [product, setProduct] = useState([])
  const [searchItem, setsearchItem] = useState('');
  

  useEffect(()=>{
    console.log("use effect");
    gettingProductArray()

  },[])
  
  //invok function imported from utils --> getProduct
   const gettingProductArray = async ()=>{
    const productsThroughApi = await getAllProduct()
    setProduct([...productsThroughApi])
    console.log(productsThroughApi);
    }


 // Filter products based on search term
 const filteredProducts = product.filter(data =>
  data.category.name.toLowerCase().includes(searchItem.toLowerCase())
)
 
  return (
    <div className='parent w-full'>
    {/* display vite and react logo */}
      <div className='heading '>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

          {/* Main heading  */}
         <h1>SHOPPING LIST</h1>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
     
      {/* shopping list cards */}
      <div className='cardParent'>

        <input
          placeholder="Search"
          onChange={(e) => setsearchItem(e.target.value)}
          className="p-2 border rounded w-full mx-auto my-2"
        />

        {filteredProducts.map((data) => (
          <Card key={data.id} item={data}/>
        ))}
        
      </div>

    </div>
  )
}

export default App
