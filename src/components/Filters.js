import React from 'react'

class Filters extends React.Component {
  render() { 
    const {handleNameFilter, filterName} = this.props;
    return ( 
      <div className="filters">
        <input type="text" className="filter-character" value={filterName} onChange={handleNameFilter}/>
      </div>
    );
  }
}
 
export default Filters;