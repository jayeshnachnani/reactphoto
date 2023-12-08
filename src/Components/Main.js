import React, {Component} from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component{
    render(){
      return (<div>
        <Title todos = {'To Do'}/>
        <List tasks = {['kya','hua', 'bhai']}/>
        <List tasks = {['tere','wade', 'ka']}/>
      </div>)
    }
  }

  export default Main