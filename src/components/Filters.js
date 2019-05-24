import React from 'react'

class Filters extends React.Component {
  render() { 
    const {handleNameFilter, filterName} = this.props;
    return ( 
      <input type="text" className="filter-character" value={filterName} onChange={handleNameFilter}/>
    );
  }
}
 
export default Filters;