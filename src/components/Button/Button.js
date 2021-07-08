import React from 'react'
import "./Button.css"

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = props
        console.log(props);
    }

    render() {
        return <button className={`mybtn ${this.state.active && "active" || ""} ${this.state.className}`}>
            {this.state.text}
        </button>
    }

}

export default Button;