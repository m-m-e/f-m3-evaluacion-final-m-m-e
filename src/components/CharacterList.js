import React from 'react';

class CharacterList extends React.Component {
  render() { 
    const {characterData, filterName} = this.props;
    return (
      <ul className="character__list">
          {characterData
          .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
          .map(item => {
            return (
              <li className="character__list-item" key={item.id}>
                <img src={item.image} alt={item.name} className="character-image"/>
                <h1 className="character-name">{item.name}</h1>
                <p className="character-house">{item.house}</p>
              </li>
            )
          })}
        </ul>
    );
  }
}
 
export default CharacterList;