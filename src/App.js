import React, {useState} from 'react';
import {Modal} from 'reactstrap'
import Modala from './components/Modala'
import TableHead from './components/TableHead';
import TableBody from './components/TableBody'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  const [active, setactive] = useState(false)
  const [users, setUsers] = useState([])

  function addCount() {
    setCount(()=>count+1)
  }

  function removeCount() {
    setCount(()=>count-1)
  }

  function addUsers() {
    setactive(prev=>!prev)
  }

  function addPerson(name, fname, phone) {
    
    users.push({id: users.length +1, name: name, fname: fname, phone: phone})
    setUsers([...users])
    console.log(users);
  }

  function removeUser(item) {
    users.splice(item[item], 1)
    setUsers([...users])
  }
  return (
    <div className="container">
      <button className="btn btn-success" onClick={addUsers}>Add</button>
        <table className="table table-bordered ">
          <thead>
            <TableHead />

          </thead>
            

          <TableBody 
                    users={users} 
                    setUsers={setUsers} 
                    addCount={addCount} 
                    removeCount={removeCount} 
                    removeUser={removeUser} 
                    count={count}/>


        </table>
        {
          active?<Modala active={active} addUsers={addUsers} addPerson={addPerson} />:''
        }

    </div>
  )
}
export default App