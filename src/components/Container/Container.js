import React from 'react'
import "./Container.css"

class Container extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = props;
    }

    render() {
        return <div className="container myContainer">
            {this.state.children}
        </div>
    }
}

export default Container;