
import React, {useState} from 'react'

function TableBody({users, setUsers, addCount, removeCount, removeUser, count}) {

    return (            
            <tbody>

           

                {
              users.map(item=>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.fname}</td>
                    <td>{item.phone}</td>
                    <td><input type="checkbox"/></td>
                    <td><button onClick={addCount}>+</button>{count} <button onClick={removeCount}>-</button> </td>
                    <td><button onClick={()=>removeUser(item.id)}>*</button></td>
                  </tr>
              
              )
            }
 </tbody>
            
    )
    
}

export default TableBody