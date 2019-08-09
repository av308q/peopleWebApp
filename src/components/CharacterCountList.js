import React, {useState} from 'react';
import {Table} from "./componentStyles";

const CharacterCountList = ({charactersList}) => {
  const [toggle, setToggle] = useState(false);

  const orderedCounts = Object.entries(charactersList).sort((a, b) => {
    return a[1] - b[1];
  });
 
  return (
    <div>
      <h1>Character Count List</h1>
      <Table>
        <tr>
          <th>Character</th>
          <th>Count</th>
        </tr>
        <tbody>
          {orderedCounts.map(key => {
            return (
              <tr key={key[0]}>
                <td>{key[0]}</td>
                <td>{!toggle ? "?" : key[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button onClick={() => setToggle(!toggle)}> Show me the letters! </button>
    </div>
  );
 };
 
 export default CharacterCountList;