import React from 'react'

class Filters extends React.Component {
  render() { 
    const {handleNameFilter} = this.props;
    return ( 
      <input type="text" className="filter-character" onChange={handleNameFilter}/>
    );
  }
}
 
export default Filters;