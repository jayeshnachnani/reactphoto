import React, {Component} from "react";

class AddPhoto extends Component{

    constructor(){
        super()

        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description:description,
             imageLink:imageLink

        }
        if(imageLink && description){
            this.props.onAddPhoto(post)

        }

    }

    
    render(){
      return (
      <div>
      <h1>PhotoWall</h1>
      <div className="form">
      <form onSubmit={this.handleSubmit}>  
        <input type = "text" placeholder="Link" name = "link"></input>
        <input type = "text" placeholder="Description" name = "description"></input>
        <button> Post </button>
        </form>
        </div>
      </div>
      
      )
    }
  }

  /*function Photo (props){
    const post = props.post;
      return <figure>
        <img className = "photo" src={post.imageLink}  alt = {post.description}/>
        <figcaption> <p> {post.description}</p></figcaption>
        <div className="button-container">
        <button className="remove-button" onClick={()=>props.onRemovePhoto(post)} > Remove</button>
        </div>

      </figure>
    }*/




  export default AddPhoto