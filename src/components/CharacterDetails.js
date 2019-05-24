import React from 'react';

class CharacterDetails extends React.Component {
  componentWillUnmount() {
    this.props.clearFilter();
  }

  render() { 
    const {match, characterData} = this.props;
    const id = parseInt(match.params.id);
    const character = characterData.find(item => item.id === id)

    return ( 
      <React.Fragment>
        {character ?
          <div className="details">
            <img src={character.image} alt={character.name} className="character-image"/>
            <h1 className="character-name">Nombre: {character.name}</h1>
            <h2 className="character-house">Casa: {character.house}</h2>
            <p className="character-birthyear">Año de nacimiento: {character.yearOfBirth}</p>
            <p className="character-patronus">Patronus: {character.patronus}</p>
            <p className="life-status">**Spoiler alert!** Estado: 
            {character.alive === true ? <i className="fas fa-heart"/> : <i className="fas fa-skull-crossbones"/>}
            </p>
          </div>
        :
        <p>No tengo datos hasta ahora!</p>

        }

      </React.Fragment>
    );
  }
}
 
export default CharacterDetails;