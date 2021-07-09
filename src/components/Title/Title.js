import React from 'react'
import "./Title.css"

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6">
                <h1 className="text-center mb-4">{this.state.heading}</h1>
                <p className="text-center">{this.state.subtitle}</p>
            </div>
        </div>

    }
}

export default Title;