import { useDispatch } from "react-redux"
import { fetching } from "./store"
import { useSelector } from "react-redux"
import List from "./List"

const Connector = () => {
    const dispatch = useDispatch()
    const url = useSelector((val)=>{
        return val.Data.input
    })
    const array = useSelector((val)=>{
        return val.Data.data_array
    })
    const text_color = useSelector((val)=>{
        return val.Data.text_color
    })
    const under_text = useSelector((val)=>{
        return val.Data.error_text
    })
    const makeRequest = (body) => {

    fetch(`https://api.shrtco.de/v2/shorten?url=${body}`)

    .then(res => {
        if(!res.ok){
            dispatch(fetching.changeTextData('error please input link again'))
        }
        else{
            return(res.json())
        }
        
    })
    .then((data)=>{
        console.log(data.result.full_short_link)
        dispatch(fetching.addArray({
            inputLink:data.result.original_link,
            returnLink:data.result.full_short_link
        }))
    })
    .catch((err)=>{
        dispatch(fetching.changeTextData('error please try again'))
    })
}
    function submit(e){
        e.preventDefault()
        setInterval(()=>{
            dispatch(fetching.changeTextData('please add a link'))
        },3000)
        if(url=== ""){
            dispatch(fetching.changeTextData('empty request'))
        }
        else{
            makeRequest(url)
            dispatch(fetching.changeInput(""))
        }
        

    }
    function Change(e){
        dispatch(fetching.changeInput(e.target.value))
    }
    
  return (
    <>
        <div className="connector" >
        <input onFocus={(e)=>{
            e.target.style.outline= '1px solid red'
            dispatch(fetching.changeTextColor('red'))
           const design =  document.getElementById('input')
            design.setAttribute('class','input')
        }} onBlur={(e)=>{
            e.target.style.outline= '1px solid white'
            dispatch(fetching.changeTextColor('white'))
            const design =  document.getElementById('input')
            design.removeAttribute('class')

        }} value={url}  type="text" id="input"  placeholder="Shorten a link here ..." onChange={(e)=>{Change(e)}}/>
        <button onClick={submit}> Shorten It !</button>
        <span style={{color:text_color}}>{under_text}</span>
        </div>
        {array.length > 0 && <div className="list">
            {array.map((val,index)=>{
                return(
                    <List key={index} val={val}/>
                )
            }

            )}
            </div>
        }
    </>
  )
}

export default Connector