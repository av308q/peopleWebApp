import React, {useState} from 'react';
import styled from 'styled-components';

const CharacterCountList = ({characterslist}) => {
  const [toggle, setToggle] = useState(false);

  const items = []

  for (const [key, value] of Objects.entries(charactersList)){
    items.push(<li key={key}>{key}: {value}</li>)
  }

  console.log(items)

  return (
    <div>
    {items}
    </div>
  );
};

export default CharacterCountList;