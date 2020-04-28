import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class Dishdetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    if (this.props.dish != null) {
      return this.renderDish(this.props.dish)
    } else {
      return <div></div>
    }
  }

  renderDish(dish) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle className='font-weight-bolder text-left'>{dish.name}</CardTitle>
                <CardText className='text-left'>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className='col-12 col-md-5 m-1'>
            { this.renderComments(dish.comments) }
          </div>
        </div>
      </div>
    )
  }

  renderComments(comments) {
    if ((comments == undefined) || (comments == null) || (comments.length == 0)) {
      return <div></div>
    }

    const commentRows = comments.map((comment) => {
      let commentDate = new Date(comment.date).toDateString().split(' ')
      commentDate = commentDate[1] + ' ' + commentDate[2] + ', ' + commentDate[3];
      return (
        <li key={comment.id} >
           <blockquote className='blockquote'>
            <p className='mb-0 text-left small'>{comment.comment}</p>
            <footer className='blockquote-footer text-left'>
              {comment.author}, {commentDate}
            </footer>
          </blockquote>
        </li>
      )
    })

    return (
      <div>
        <h4 className='text-left'>Comments</h4>
        <ul className="list-unstyled">
          {commentRows}
        </ul>
      </div>
    )
  }
}

export default Dishdetail;