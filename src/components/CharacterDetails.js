import React from 'react';

class CharacterDetails extends React.Component {
  render() { 
    const {match, characterData} = this.props;
    return ( 
      <React.Fragment>
        <p>Hello I'm a character!</p>
        <p>My id is{match.params.id}</p>
      </React.Fragment>
    );
  }
}
 
export default CharacterDetails;