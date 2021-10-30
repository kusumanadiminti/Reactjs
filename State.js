import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'kusuma'
        }
    }
    
    render() {

    setTimeout(()=>{

         this.setState({name:"kusuma nadiminti"})
    },2000)



        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}
