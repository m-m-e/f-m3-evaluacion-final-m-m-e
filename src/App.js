import React from 'react';
import './App.css';
import './components/CharacterList';
import CharacterList from './components/CharacterList';

const apiUrl = 'http://hp-api.herokuapp.com/api/characters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      filterName: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleNameFilter = this.handleNameFilter.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return {...item, id: index}
        });
        this.setState({characterData: newData})
      })
  }

  handleNameFilter(event) {
    const input = event.currentTarget.value;
    this.setState({filterName: input});
  }

  render() {
    const {characterData, filterName} = this.state;
    return (
      <div className="App">
        <input type="text" className="filter-character" onChange={this.handleNameFilter}/>
        <CharacterList characterData={characterData} filterName={filterName}/>
      </div>
    );
  }
}

export default App;
