import React from 'react';

class CharacterCard extends React.Component {
  render() { 
    const {item} = this.props;
    return (
      <React.Fragment>
        <img src={item.image} alt={item.name} className="character-image"/>
        <h2 className="character-name">{item.name}</h2>
        <p className="character-house">{item.house}</p>
      </React.Fragment>
    );
  }
}
 
export default CharacterCard;