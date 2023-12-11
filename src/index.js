import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import Main from "./Components/Main";
import  './styles/stylesheet.css';

const tasks = ['ek', 'do', 'teen'];

/*const element = <div>
  <h1>
    <ol>
      {tasks.map((task,index) => <li key = {index}>{task}</li>)}
    </ol>
  </h1>
</div>  

class List extends Component{
  render() { return(
  <ol>
      {this.props.tasks.map((task,index) => <li key = {index}>{task}</li>)}
    </ol>)
  }


}

class Title extends Component{
  render() { return (
  <h1>
    {this.props.todos}
  </h1>)
  }


}

class Main extends Component{
  render(){
    return (<div>
      <Title todos = {'To Do'}/>
      <List tasks = {['kya','hua']}/>
      <List tasks = {['tera','wada']}/>
    </div>)
  }
}*/
ReactDOM.render(<Main/>,document.getElementById('root'));