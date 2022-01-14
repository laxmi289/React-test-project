import {Component} from 'react';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';


//import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users : [],
      newUsers : []
    }
  }

  addNewUser = (user) => {
    this.setState({newUsers: user.name})
    console.log(this.state.newUsers);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(user => this.setState({users: user}));
  }

  render() {
    return (
      <div className="App">
        <Header addNewUser={this.addNewUser}/>
        <Container users={this.state.users}/>
        <Footer />
      </div>
    );
  }
}

export default App;
