import React from 'react';

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
            <img src={character.image} alt={character.name} className="character-image"/>
            <h1 className="character-name">Name: {character.name}</h1>
            {character.house ? <img src={showHouse(character)} alt={character.house} className="character-house" /> : <p>No Hogwarts house!</p>}
            <p className="character-birthyear">Birth year: {character.yearOfBirth}</p>
            <p className="character-patronus">Patronus: {character.patronus}</p>
            <p className="life-status">**Spoiler alert!** Status: 
            {character.alive === true ? <i className="fas fa-heart"/> : <i className="fas fa-skull-crossbones"/>}
            </p>
          </div>
        :
        <p>I'm sorry, I don't have any info right now!</p>

        }

      </React.Fragment>
    );
  }
}
 
export default CharacterDetails;