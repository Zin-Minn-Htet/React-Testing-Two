import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoginContext } from '../Uliti/LoginContex';

const Allcat = () => {
  const [search,setSearch] = useSearchParams();
  const name = search.get("name");
  const age = search.get("age")
  const {setLogged} = useLoginContext();
  return (
    <div>
        <h1>All Category {name} {age} </h1>
        <button onClick={() => {setSearch({name: "Mg Mg", age: 20})}}>search</button>
        <button onClick={() => {setSearch({})}}>reset</button>
        <button onClick={() => {setLogged(false)}}>logout</button>
    </div>
  )
}

export default Allcat