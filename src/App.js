import React from 'react';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
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
    this.clearFilter = this.clearFilter.bind(this);
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

  clearFilter() {
    this.setState({filterName: ''});
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
            <Route 
              exact path="/" 
              render={() => (
                <Home 
                  characterData={characterData} 
                  filterName={filterName} 
                  handleNameFilter={this.handleNameFilter}
                />
              )} 
            />
            <Route 
              path="/characterdetails/:id" 
              render={routerProps =>(
                <CharacterDetails 
                  match={routerProps.match}
                  characterData={characterData}
                  clearFilter={this.clearFilter}
                />
            )}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
