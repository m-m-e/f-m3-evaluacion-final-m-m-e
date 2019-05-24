import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() { 
    const {handleNameFilter, filterName} = this.props;
    return ( 
      <div className="filters">
        <label className="filter-character-label" htmlFor="filter-character">Filter by character here:</label>
        <input type="text" className="filter-character" if="filter-character" value={filterName} onChange={handleNameFilter}/>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string,
  handleNameFilter: PropTypes.func
};
 
export default Filters;