import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    const {characterData, filterName, handleNameFilter} = this.props; 
    return ( 
      <React.Fragment>
        <Filters filterName={filterName} handleNameFilter={handleNameFilter}/>
        <CharacterList characterData={characterData} filterName={filterName}/>
      </React.Fragment>
    );
  }
}
 
export default Home;