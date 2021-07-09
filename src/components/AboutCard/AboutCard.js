import React from 'react'
import "./AboutCard.css"

class AboutCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="aboutCard h-100">
            <img src="icon.svg" alt="" />
            <div>
                <p className="fw-bold mb-2">{this.state.title}</p>
                <p className="mb-0">{this.state.subtitle}</p>
            </div>
        </div>
    }
}

export default AboutCard;