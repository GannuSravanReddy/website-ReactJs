import React, { Component } from 'react'
import axios from 'axios';
import '../Setupproxy.js';

class Phpreact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        }

    }
    handleFormSubmit(event) {
        
        event.preventDefault();
        console.log(this.state);
        var obj = {
            name: this.state.name,
            email:this.state.email
        }
        axios.post(`insert.php`, obj)
        .then(res =>console.log(res.data))
    }
    render() {
        return (
            <div>
                <form action='#'>
                    <input
                        type="text" id="name" name="firstname" placeholder="Your name.."
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    /><br/>
                    <input
                        type="email" id="email" name="email" placeholder="Your email.."
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    /><br/>
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                </form>
            </div>
        )
    }
}

export default Phpreact