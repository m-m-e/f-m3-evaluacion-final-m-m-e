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
      }
      )
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
