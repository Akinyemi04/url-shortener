import React, { useState } from 'react'

const List = (props) => {
    const[button,useButton]= useState('Copy!')
    console.log(props.keys)
    function Clicked(e){
        e.target.style.backgroundColor='black'
        e.target.style.color='white'
        e.target.value= 'Copied !'
        const data = e.target.dataset.action
        const copy = document.getElementById(data)
        const text = copy.getAttribute('value')
        useButton('Copied!')
        navigator.clipboard.writeText(text)
    }

  return (
    < div key={props.keys} className="array">
        <span  className="left">{props.val.inputLink}</span>
        <hr />
        <span id={`${props.keys}`} value={props.val.returnLink}  className="right">{props.val.returnLink}</span>
        <button data-action={`${props.keys}`}  onClick={Clicked}>{button}</button>
    </div>
  )
}

export default List