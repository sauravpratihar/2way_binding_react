import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : '',
      age : ''
    } 
  }
  render() {
    return (
      <div>
        Write Your Name: <input type="text" ref="name"  onChange={this.df.bind(this)}/>
        Write Your Age: <input type="text" ref="age"  onChange={this.df.bind(this)}/>
        
        <Box name= {this.state.name} age={this.state.age} />
      </div>
    );
  }

  df(){
    this.setState({name: this.refs.name.value, age : this.refs.age.value})
  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name} </h1>
        <h2>Age: {this.props.age}</h2>
      </div>
    )
  }
}


export default App;
