import React, { Component } from 'react'
import Acompo from './Acompo'
import Bcompo from './Bcompo'

class ParentCompo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isA: true,
            name: "Mg Mg"
        }
    }

    HandlerCondation = () => {
        if (this.state.isA) {

            this.setState({
                name: "Aung Aung",
                isA: false
            })
        }else {
            this.setState({
                name: "Mg Mg",
                isA: true
            })
        }
    }

    render() {
        return (
            <div> {this.state.name}
                <button onClick={this.HandlerCondation}>Change Name</button>
            </div>

        )
    }
}

export default ParentCompo