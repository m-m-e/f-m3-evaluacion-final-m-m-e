import React from 'react';

class CharacterDetails extends React.Component {
  render() { 
    const {match, characterData} = this.props;
    const id = parseInt(match.params.id);
    const filteredCharacterData = characterData.find(item => item.id === id)

    return ( 
      <React.Fragment>
        {filteredCharacterData ?
          <div className="details">
            <p>Hello I'm {filteredCharacterData.name}!</p>
            <p>My id is{id}</p>
          </div>
        :
        <p>No tengo datos hasta ahora!</p>

        }

      </React.Fragment>
    );
  }
}
 
export default CharacterDetails;