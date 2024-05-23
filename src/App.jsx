import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import {useToast} from './components/ToastContainer';
import { ToastType } from './utilities/EnumUtilities';

function App() {
  const {addToast} = useToast();
  const[count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
   };

   const handleDecrement = () => {
    if(count <= 0){
      addToast("Counter can't be decremented beyond 0", ToastType.ERROR)
      return
    }
    setCount(count - 1);
   };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
    <div className='flex flex-col'>
      <h1 className='font-semibold'>
          Counter App
        </h1>
          <div className='text-2xl text-purple-700'>
            {count}
          </div>
          <div className='space-x-10 pt-4'>
            <Button description='Increment' handlerFunction={handleIncrement}></Button>
            <Button description='Decrement' handlerFunction={handleDecrement}></Button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
