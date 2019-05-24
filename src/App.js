import React from 'react';
import './App.css';

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
        <ul className="character__list">
          {characterData
          .filter(item => item.name.includes(filterName))
          .map(item => {
            return (
              <li className="character__list-item" key={item.id}>
                <img src={item.image} alt={item.name} className="character-image"/>
                <h1 className="character-name">{item.name}</h1>
                <p className="character-house">{item.house}</p>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
