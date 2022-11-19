import React, {useState } from 'react';
import './dang.css';
export const Dang =()=>{
  const [listName, setName] = useState("");
  const [listAge,setAge] = useState("");
  const [students, setStudents] = useState([{name : 'Dang' , age: '21'},{name: 'Hoang', age: '22'}, {name: 'Nam', age: '22'},{name: 'Tuan', age: '22'},{name: 'Hoang', age: '22'}]);
    
    const handletextChange = (e) => {
    setName(e.currentTarget.value);
    console.log(e.currentTarget.value);
    }
    const handlenumChange = (e) => {
      e.preventDefault();
      setAge(e.currentTarget.value);
      console.log(e.currentTarget.value);
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem={
          name : listName ,
          age : listAge
        };
        
        setStudents([...students, newItem]);
        console.log([...students,newItem]);
        }
    return ( 
    <div className="student">
       <h2>Add a item</h2>
       <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th><label>Name</label></th>
                  <td>
                    <input name="name" type="text" value={listName}   onChange={handletextChange} />
                  </td>
                </tr>

                <tr>
                  <th><label>Age</label></th>
                  <td>
                    <input name="age" type="number" value={listAge}  onChange={handlenumChange} />
                  </td>
                </tr>
            
              </tbody>
            </table>
            <button type="submit" >Submit</button>
        
        <hr />
        <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {students.map( item => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          )
        })}
      </table> 
      </form>
    </div>
    )
};