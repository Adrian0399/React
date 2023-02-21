

import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { counterSlice, decrement, increment, incrementByAmount } from '../../store/slices';
import { store } from '../../store';

export function ContadorPage() {
  

  const count = useSelector((store) => store.counter)
  const dispatch = useDispatch()


  return (
    <div className="content  card">
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="../../assets/react.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
        </div> */}
      <h1>Vite + React</h1>

      {/* <h3 >Valor del count: <span className={`span-${count.span}`}>{ count.value }</span></h3> */}
      <h3 >Valor del count: <span className={count.color}>{ count.value }</span></h3>

      <div className="card">
        <button
          className=' btn btn-outline-success mb-2 mt-2'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        
        <button
          className='btn btn-outline-danger mb-2'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className='btn btn-outline-primary mb-2'
          aria-label="incrementByAmount"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          +2
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

        
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}



