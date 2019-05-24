import React from 'react';
import CharacterCard from './CharacterCard';

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
                <CharacterCard item={item} />
              </li>
            )
          })}
        </ul>
    );
  }
}
 
export default CharacterList;