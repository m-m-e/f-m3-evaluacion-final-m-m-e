import React from 'react';

class CharacterCard extends React.Component {
  render() { 
    const {item} = this.props;
    return (
      <React.Fragment>
        <img src={item.image} alt={item.name} className="character-image"/>
        <div className="character-info">
          <h2 className="character-name">{item.name}</h2>
          {item.house ? <p className="character-house">{item.house}</p> : <p>No tiene casa en Hogwarts!</p>}
        </div>
      </React.Fragment>
    );
  }
}
 
export default CharacterCard;