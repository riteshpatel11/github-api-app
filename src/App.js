import React, { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import UserList from "./components/UserList";

class App extends Component {
  state = {
    users: [],
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.github.com/search/users?q=${this.state.searchTerm}+location:bangalore&per_page=30`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          users: [...data.items]
        });
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
