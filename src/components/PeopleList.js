import React from "react";
import styled from "styled-components";

const PeopleListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	margin: 20px;
	padding: 10px 5px 20px 5px;
`;

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PeopleList = ({ list }) => {
	return (
		<PeopleListWrapper>
			<PersonWrapper>
				<h2>Name</h2>
				<h2>Email Adress</h2>
				<h2> Job Title</h2>
			</PersonWrapper>
			{list.map(person => {
				return (
					<PersonWrapper key={person.id}>
						<div> {person.display_name}</div>
						<div> {person.email_address}</div>
						<div> {person.title}</div>
					</PersonWrapper>
				);
			})}
			;
		</PeopleListWrapper>
	);
};

export default PeopleList;
