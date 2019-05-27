import React from 'react';
import '../stylesheets/_charactercard.scss';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() { 
    const {item, showHouse} = this.props;
    return (
      <div className="character-card">
        <div className="character-image-container">
          <img src={item.image} alt={item.name} className="character-image"/>
        </div>
        <div className="character-info">
          <h2 className="character-name">{item.name}</h2>
          {item.house ? <img src={showHouse(item)} alt={item.house} className="character-house" /> : <p>No Hogwarts house!</p>}
        </div>
      </div>
    );
  }
}

CharacterCard.propTypes = {
  item: PropTypes.object,
  showHouse: PropTypes.func
};

export default CharacterCard;