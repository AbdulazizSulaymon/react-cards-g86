import React from 'react'
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = props;
    }

    render() {
        return <div className="card-box shadow rounded overflow-hidden">
            <div className="p-3">
                <div className="d-flex align-items-center mb-2">
                    <img className="avatar" src={this.state.img} alt="" />
                    <p className="fw-bold mb-0">{this.state.name}</p>
                </div>
                <p className="text-secondary">
                    {this.state.desc}
                </p>
            </div>
            <img src={this.state.photo} className="w-100 mb-2" alt="" />
            <p className="d-flex justify-content-between mx-3">
                <span><FontAwesomeIcon icon={faComment} /> {this.state.comment}</span>
                <span><FontAwesomeIcon icon={faThumbsUp} /> {this.state.like}</span>
            </p>

        </div>
    }
}

export default Card;