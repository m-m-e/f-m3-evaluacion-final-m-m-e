import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import '../stylesheets/_characterlist.scss';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {
  render() { 
    const {characterData, filterName, showHouse} = this.props;
    return (
      <ul className="character-list">
          {characterData
          .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
          .map(item => {
            return (
              <li className="character-list-item" key={item.id}>
                <Link className="character-link" to={`/characterdetails/${item.id}`}>
                  <CharacterCard item={item} showHouse={showHouse} />
                </Link>
              </li>
            )
          })}
        </ul>
    );
  }
}

CharacterList.propTypes = {
  characterData: PropTypes.array,
  filterName: PropTypes.string,
  showHouse: PropTypes.func
};
 
export default CharacterList;