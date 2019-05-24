import React from 'react';
import './App.css';
import './components/CharacterList';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import { fetchData } from './services/FetchData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      filterName: ''
    }
    this.getData = this.getData.bind(this);
    this.handleNameFilter = this.handleNameFilter.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchData()
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
        <Filters handleNameFilter={this.handleNameFilter}/>
        <CharacterList characterData={characterData} filterName={filterName}/>
      </div>
    );
  }
}

export default App;
