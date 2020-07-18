import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//functional way
const Demo = (props) => {
    return <div className="maindiv_style">
            <h1>Hello {props.name} </h1>
            <p>Welcome to my page</p>
        </div>
} 

/*class way
class Demo extends Component{
    render(){
        //return <h1>Hello World</h1>
            //<p>Welcome to my page</p>  - this is JSX
        return <div className="maindiv_style">
            <h1>Hello {this.props.name} </h1>
            <p>Welcome to my page</p>
        </div>
    }
}*/

export default Demo;