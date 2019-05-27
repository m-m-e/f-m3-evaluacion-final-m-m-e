import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/_home.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    const {characterData, filterName, handleNameFilter, showHouse, filterHouses, handleHouseFilter} = this.props; 
    return ( 
      <div className="home">
        <h1 className="main-title">Harry Potter Characters <i className="fas fa-quidditch"></i></h1>
        <Filters 
          filterName={filterName} 
          handleNameFilter={handleNameFilter}
          handleHouseFilter={handleHouseFilter}
        />
        <p className="main-subtitle">Click on a character for more information!</p>
        <CharacterList 
          characterData={characterData} 
          filterName={filterName} 
          showHouse={showHouse}
          filterHouses={filterHouses}
        />
      </div>
    );
  }
}

Home.propTypes = {
  characterData: PropTypes.array,
  filterName: PropTypes.string,
  handleNameFilter: PropTypes.func,
  showHouse: PropTypes.func
};
 
export default Home;