import React from 'react';
import '../stylesheets/_characterdetails.scss';

class CharacterDetails extends React.Component {
  componentWillUnmount() {
    this.props.clearFilter();
  }

  render() { 
    const {match, characterData, showHouse} = this.props;
    const id = parseInt(match.params.id);
    const character = characterData.find(item => item.id === id)

    return ( 
      <React.Fragment>
        {character ?
          <div className="details">
            <img src={character.image} alt={character.name} className="details-character-image"/>
            <div className="details-character-info">
              {character.house ? 
              <img 
              src={showHouse(character)} 
              alt={character.house} 
              className="details-character-house" 
              />
              :
              <p>No Hogwarts house!</p>
              }
              <h1 className="details-character-name">Name: {character.name}</h1>
              <p className="character-birthyear">Birth year: {character.yearOfBirth}</p>
              {character.patronus ?
              <p className="character-patronus">Patronus: {character.patronus}</p>
              :
              <p className="character-patronus">Patronus: Unknown/ none</p>              
              }
              <p className="life-status">Status:  
              {character.alive === true ? 
              <i className="fas fa-heart"/> 
              : 
              <i className="fas fa-skull-crossbones"/>
              }
              </p>
              <small className="key">KEY: Alive <i className="fas fa-heart"/> Dead <i className="fas fa-skull-crossbones"/></small>
            </div>
          </div>
        :
        <p>I'm sorry, I don't have any info right now!</p>

        }

      </React.Fragment>
    );
  }
}
 
export default CharacterDetails;