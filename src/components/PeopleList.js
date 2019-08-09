import React from "react";
import {Table} from "./componentStyles";



const PeopleList = ({ list }) => {
	return (
    <div>
      <h1> People List </h1>
      <Table>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Job Title</th>
        </tr>
        {list.map(person => {
          return (
            <tr key={person.id}>
              <td>{person.display_name}</td>
              <td>{person.email_address}</td>
              <td>{person.title}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default PeopleList;
