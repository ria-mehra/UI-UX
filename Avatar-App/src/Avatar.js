import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component{
    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }

    namechange(){
        this.setState({
            name: "Subscribed to my page"
        })
    }
    render(){

        const avatarlistarray = [
            {
                id:1,
                name:"Ria",
                work:"Web Developer"
            },
            {
                id:2, name:"Neil", work:"Front-End Developer"
            },
            {
                id:3, name:"Zoya", work:"Database"
            },
            {
                id:4, name:"Krishi", work:"Backend"
            }
        ]
    
        const arrayavatarcard = avatarlistarray.map( (avatarcard, i)=> {
            return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        })
    
        return (
            <div className= "mainpage">
            <h1>{this.state.name}</h1>
            {arrayavatarcard}
             <button onClick= {() => this.namechange()}>Subscribe</button>
             </div>
        )
    }
}

export default Avatar;