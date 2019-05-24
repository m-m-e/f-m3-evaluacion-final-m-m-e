import React from 'react';
import '../stylesheets/_charactercard.scss';
import gryff from '../images/gryffindor.jpg';
import slyth from '../images/slytherin.jpg';
import huff from '../images/hufflepuff.jpg';
import raven from '../images/ravenclaw.jpg';

class CharacterCard extends React.Component {
  showHouse(character) {
    const house = character.house.toLowerCase();
    if (house === 'gryffindor') {
      return gryff
    } else if (house === 'slytherin') {
      return slyth
    } else if (house === 'hufflepuff') {
      return huff
    } else {
      return raven
    }
  }

  render() { 
    const {item} = this.props;
    return (
      <React.Fragment>
        <img src={item.image} alt={item.name} className="character-image"/>
        <div className="character-info">
          <h2 className="character-name">{item.name}</h2>
          {item.house ? <img src={this.showHouse(item)} alt={item.house} className="character-house" /> : <p>Sin casa en Hogwarts!</p>}
        </div>
      </React.Fragment>
    );
  }
}
 
export default CharacterCard;