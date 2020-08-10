import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText,CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        
        if (comments!=null) {
            const comment = comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author} {comment.date}</li>
                        </ul>
                    </div>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        const dish  = this.props.selectedDish;
        if (dish!=null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default Dishdetail;