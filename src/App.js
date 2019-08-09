import React, { useState, useEffect } from "react";

import "./App.css";
import PeopleList from "./components/PeopleList";
import axios from "axios";
import CharacterCountList from "../src/components/CharacterCountList";

function App() {
  const [people, setPeople] = useState([]);// initailize people using hooks 'useState'
  const [emails, setEmails] = useState([]); 

	const fetchPeople = async () => {
		const response = await axios.get("/api");
		setPeople(response.data.data);
		
  };
  
  // subscribe and unsubscribe from fetchUsers
 useEffect(() => {
   fetchPeople(people);
   setEmails(ListAllEmails(people));
 }, [people]);

 // function to capture emails from every person from list of people and return array
 const ListAllEmails = arrayOfPeople => {
   return arrayOfPeople.map(singleEmail => {
     return singleEmail.email_address;
   });
 };

 // function to count each character and return an object
 const characterCount = emailArr => {
   let repeatingCharacters = emailArr.join("").split("");

   let characterCount = {};

   repeatingCharacters.forEach(char => {
     if (characterCount[char]) {
       // if character exists again increase count
       characterCount[char]++;
     } else {
       // else equal count to 1
       characterCount[char] = 1;
     }
   });
   return characterCount;
 };

 const characterList = characterCount(emails);

 return (
   <div
     style={{
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-around"
     }}
   >
     <PeopleList list={people} />
     <CharacterCountList charactersList={characterList} />
   </div>
 );
}

export default App;

