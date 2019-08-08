import React, { useState, useEffect } from "react";

import "./App.css";
import PeopleList from "./components/PeopleList";
import axios from "axios";

function App() {
	const [people, setPeople] = useState([]); // initailize people using hooks 'useState'

	const fetchPeople = async () => {
		const response = await axios.get("/api");
		setPeople(response.data.data);
		console.log(people);
	};

	useEffect(() => {
		fetchPeople(people);
	}, [people]);
	return (
		<div className="App">
			<PeopleList list={people} />
		</div>
	);
}

export default App;
