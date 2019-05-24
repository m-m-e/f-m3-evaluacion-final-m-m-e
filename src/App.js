import React from 'react';
import './App.css';

const apiUrl = 'http://hp-api.herokuapp.com/api/characters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: []
    }
    this.fetchData = this.fetchData.bind(this);
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

  render() {
    const {characterData} = this.state;
    return (
      <div className="App">
        <ul className="character__list">
          {characterData.map(item => {
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
