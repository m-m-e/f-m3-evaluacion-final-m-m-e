import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/_home.scss';

class Home extends React.Component {
  render() {
    const {characterData, filterName, handleNameFilter} = this.props; 
    return ( 
      <React.Fragment>
        <h1 className="main-title">Harry Potter Characters <i className="fas fa-quidditch"></i></h1>
        <Filters filterName={filterName} handleNameFilter={handleNameFilter}/>
        <CharacterList characterData={characterData} filterName={filterName}/>
      </React.Fragment>
    );
  }
}
 
export default Home;