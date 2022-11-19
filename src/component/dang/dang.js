import React, {useState, useEffect} from 'react';
import './dang.css';
export const Dang =()=>{
    const [students, setStudents] = useState([{name : 'Dang' , age: 21},
                                                {name: 'Hoang', age: 22},
                                                {name: 'Nam', age: 22},
                                                {name: 'Tuan', age: 22},
                                                {name: 'Hoang', age: 22}]);


    return ( 
    <div className="student">
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
    </div>
    )
};