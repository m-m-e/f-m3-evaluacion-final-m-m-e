import React from 'react';
import '../stylesheets/_charactercard.scss';

class CharacterCard extends React.Component {
  render() { 
    const {item, showHouse} = this.props;
    return (
      <React.Fragment>
        <img src={item.image} alt={item.name} className="character-image"/>
        <div className="character-info">
          <h2 className="character-name">{item.name}</h2>
          {item.house ? <img src={showHouse(item)} alt={item.house} className="character-house" /> : <p>No Hogwarts house!</p>}
        </div>
      </React.Fragment>
    );
  }
}
 
export default CharacterCard;