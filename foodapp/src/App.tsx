
import './App.css'
import { Card } from './Componets/Card/Card';
import { useFoodData } from './Hooks/useFoodData';



function App() {
  const {data} = useFoodData();
  
  return (
  
      <div className='Container'>
     <h1>Cardapio</h1>
     
     <div className='card-grid'>
      {data?.map((foodDate: { price: number; title: string; image: string; }) => 
      <Card 
      price={foodDate.price} 
      title={foodDate.title} 
      image={foodDate.image}
      />
      )}
     </div>
      </div>
      
  
  )
}

export default App
