//UNONTROLLED COMPONENT
import React from 'react'

export default function FormU() {
    let inputValue= React.createRef();

    let handleSubmit=(e)=>{
        alert(`Input value: ${inputValue.current.value}`);
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
