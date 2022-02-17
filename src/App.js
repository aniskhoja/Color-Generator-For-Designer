import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, SetList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      SetList(colors)
    } catch (err) {
      setError(true)
      console.log(err.message);
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input className={ error && "error"} type="text" placeholder='#f15025' value={color} onChange={(e) => setColor(e.target.value)}/>
          <button className="btn" type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index}/>
        })}
      </section>
    </>
  )
}

export default App
