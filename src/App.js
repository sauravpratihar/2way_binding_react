import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      counter : 0
    }
  }
  render() {
    return (
      <div>

        URL: <input type="text" ref="url" />
        
        <button onClick={this.get_json.bind(this)} >Get Data</button>
        
        {
          this.state.data.map((data) => (
            <Box id= {data.id} title={data.title} body={data.body} key={data.id} />
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
      this.refs.name.value = "";
      this.refs.age.value = "";
    }
  }

  get_json(){
    axios.get(this.refs.url.value)
    .then((response) => {
    this.state.data.push(response.data[this.state.counter]);
    this.setState({data: this.state.data});
    this.setState({counter: this.state.counter + 1});
    })
    .catch((error) => {
      console.log('Error occured');
    });
    

  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>ID: {this.props.id} </li>
          <li>Title: {this.props.title}</li>        
          <li>Body: {this.props.body}</li>
        </ul>
      </div>
    )
  }
}


export default App;
