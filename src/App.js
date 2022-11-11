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
  useEffect(()=>{
    if(array.length === 0 && localStorage.getItem('url')){
      dispatch(fetching.addArray())
    }
    else if (array.length !==0){
      localStorage.setItem('url',JSON.stringify(array))
    }
    else{
      localStorage.setItem('url',JSON.stringify(array))
    }
  },[array,dispatch])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
