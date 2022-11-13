import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { fetching } from './Components/store';

function App() {
  const dispatch = useDispatch()
  const array = useSelector((val)=>{
    return val.Data.data_array
  })
  console.log(array)
  useEffect(()=>{
    if(array.length === 0 && localStorage.getItem('link')){
      dispatch(fetching.setArray(JSON.parse(localStorage.getItem('link'))))
    }
    else if (array.length !==0){
      localStorage.setItem('link',JSON.stringify(array))
    }
    else{
      
    }
  },[array,dispatch])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
