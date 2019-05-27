import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/_filters.scss';

class Filters extends React.Component {
  render() { 
    const {handleNameFilter, filterName, handleHouseFilter} = this.props;
    return ( 
      <div className="filters">
        <label className="filter-character-label" htmlFor="filter-character">Filter by character here:</label>
        <input type="text" className="filter-character" if="filter-character" value={filterName} onChange={handleNameFilter}/>

        <div className="checkbox-container">
          <p className="checkbox-subtitle">Filter by house here:</p>
          <div className="checkbox">
            <input type="checkbox" className="house-checkbox" id="gryffindor" onChange={handleHouseFilter}/>
            <label htmlFor="gryffindor">Gryffindor</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" className="house-checkbox" id="slytherin" onChange={handleHouseFilter}/>
            <label htmlFor="slytherin">Slytherin</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" className="house-checkbox" id="hufflepuff" onChange={handleHouseFilter}/>
            <label htmlFor="hufflepuff">Hufflepuff</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" className="house-checkbox" id="ravenclaw" onChange={handleHouseFilter}/>
            <label htmlFor="ravenclaw">Ravenclaw</label>
          </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string,
  handleNameFilter: PropTypes.func
};
 
export default Filters;