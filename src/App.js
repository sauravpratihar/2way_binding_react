import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],

    }
  }
  render() {
    return (
      <div>
        Write Your Name: <input type="text" ref="name" />
        <br />
        Write Your Age: <input type="text" ref="age"  />
        <br />
        <button onClick={this.df.bind(this)} >Add</button>
        
        {
          this.state.data.map((d) => (
            <Box name= {d.name} age={d.age} key={d.name} />
          ))
        }
      </div>
    );
  }

  df(){
    if(this.refs.name.value === '' || this.refs.age.value === ''){
      alert('Insert Value');
    }
    else{
      const data = {name:this.refs.name.value, age: this.refs.age.value}
      this.state.data.push(data);
      this.setState({data: this.state.data})
      this.refs.name.value = ""
      this.refs.age.value = ""
    }
    
    
  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name} </li>
          <li>Age: {this.props.age}</li>
        </ul>
      </div>
    )
  }
}


export default App;
