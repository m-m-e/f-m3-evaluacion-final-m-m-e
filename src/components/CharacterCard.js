import React from 'react';
import '../stylesheets/_charactercard.scss';
import gryff from '../images/gryffindor.jpg';

class CharacterCard extends React.Component {
  render() { 
    const {item} = this.props;
    return (
      <React.Fragment>
        <img src={item.image} alt={item.name} className="character-image"/>
        <div className="character-info">
          <h2 className="character-name">{item.name}</h2>
          {item.house ? <img src={gryff} alt={item.house} className="character-house" /> : <p>Sin casa en Hogwarts!</p>}
        </div>
      </React.Fragment>
    );
  }
}
 
export default CharacterCard;