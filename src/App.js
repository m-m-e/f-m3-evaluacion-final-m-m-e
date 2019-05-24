import React from 'react';
import Home from './components/Home';
import './App.css';
import './components/CharacterList';
import { fetchData } from './services/FetchData';
import { Link, Route, Switch } from 'react-router-dom';

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
        <header className="header">
          <nav className="menu">
            <ul className="menu-list">
              <Link to="/">Home</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => (<Home characterData={characterData} filterName={filterName} handleNameFilter={this.handleNameFilter}/>)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
