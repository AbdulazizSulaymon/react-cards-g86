import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./ClientCard.css"

class ClientCard extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = props.value;
    }

    render() {
        return <div className="clientCard bg-white h-100">
            <div className="row m-0 p-0">
                <div className="col-sm-4 p-0">
                    <img src={this.state.img} alt="" />
                </div>
                <div className="col-sm-8 text-dark py-3">
                    <p className="fw-bold mb-1">{this.state.name}</p>
                    <p className="mb-2 text-secondary">{this.state.job}</p>
                    <FontAwesomeIcon icon={this.state.star >= 1 && faStar || farStar} className="text-warning" />
                    <FontAwesomeIcon icon={this.state.star >= 2 && faStar || farStar} className="text-warning" />
                    <FontAwesomeIcon icon={this.state.star >= 3 && faStar || farStar} className="text-warning" />
                    <FontAwesomeIcon icon={this.state.star >= 4 && faStar || farStar} className="text-warning" />
                    <FontAwesomeIcon icon={this.state.star >= 5 && faStar || farStar} className="text-warning" />
                    <p className="mb-2 text-secondary">{this.state.desc}</p>
                </div>
            </div>
        </div>
    }
}

export default ClientCard;