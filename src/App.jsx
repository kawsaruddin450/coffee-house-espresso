import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  return (
    <div className='lg:container mx-auto'>
      <h1 className='text-6xl text-purple-800'>Hot-Cold Coffee : {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-28'>
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
