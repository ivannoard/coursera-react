import { useParams } from 'react-router-dom';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form'
import { useDispatch } from 'react-redux';
import { postComment } from "../redux/ActionCreators";
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
function DisplayCard(dish) {
  let params = useParams()
  let id = params.id
  let data = dish.filter(item => item.id === Number(id))[0]
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card key={data.id}>
        <CardImg width="100%" src={baseUrl + data.image} alt={data.name} />
        <CardImgOverlay>
          <CardTitle>{data.name}</CardTitle>
        </CardImgOverlay>
        <CardBody>
          <CardTitle>{data.name}</CardTitle>
          <CardText>{data.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  )
}

function DisplayComment(comments) {
  let params = useParams()
  let data = comments.filter(comment => comment.dishId === Number(params.id))
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

  const display = data.map(item => {
    const date = new Date(item.date)
    return (
      <Fade>
        <div key={item.id}>
          <p>{item.comment}</p>
          <p>--{item.author}, {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
        </div>
      </Fade>
    )
  })
  return display
}
function displayIsLoading() {
  return (
    <div className="container">
      <div className="row">
        <Loading />
      </div>
    </div>
  )
}
const DishdetailComponent = ({ dish, comments, dishesLoading, err }) => {

  const [isComment, setIsComment] = useState(false)
  const required = (val) => val && val.length
  const minLength = (len) => (val) => !(val) || (val.length >= len)
  const maxLength = (len) => (val) => val && (val.length <= len)
  const dispatch = useDispatch()

  let params = useParams()
  let id = params.id
  let data = dish.filter(item => item.id === Number(id))[0]

  const handleSubmit = (val, id) => {
    // alert(`Current value is ${val.name}`)
    dispatch(postComment(id, val.rating, val.name, val.comment))
  }
  return (
    <div className='container my-5'>
      {dishesLoading && displayIsLoading}
      {err && (<div className="container">
        <div className="row">
          <h4>{err}</h4>
        </div>
      </div>)}
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{data.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          {dishesLoading ? displayIsLoading : DisplayCard(dish)}
        </div>
        <div className="col-12 col-md-6">
          <h2>Comments</h2>
          {dishesLoading ? displayIsLoading : <Stagger in>{DisplayComment(comments)}</Stagger>}
          <Button onClick={() => setIsComment(!isComment)}><span className='fa fa-pencil'></span> Submit Comment</Button>
          {isComment && (
            <Modal isOpen={isComment} toggle={() => setIsComment(!isComment)}>
              <ModalHeader toggle={() => setIsComment(!isComment)}>
                Submit Comment
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(val) => handleSubmit(val, data.id)}>
                  <Row className='form-group'>
                    <Label htmlFor='rating'>Rating</Label>
                    <Col >
                      <Control.select
                        model='.rating'
                        className='form-control'
                        name='rating'
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className='form-group'>
                    <Label htmlFor='name'>Your Name</Label>
                    <Col>
                      <Control.text
                        model='.name'
                        className='form-control'
                        id='name'
                        name='name'
                        placeholder='Your Name'
                        validators={
                          { required, maxLength: maxLength(15), minLength: minLength(3) }
                        }
                      />
                      <Errors
                        className='text-danger'
                        model='.name'
                        show='touched'
                        messages={{
                          required: 'Required',
                          minLength: 'Must be greater than 2 characters',
                          maxLength: 'Must be 15 characters or less'
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Label htmlFor='comment'>Comment</Label>
                    <Col>
                      <Control.textarea
                        model='.comment'
                        className='form-control'
                        id='comment'
                        name='comment'
                        rows='6'
                      >
                      </Control.textarea>
                    </Col>
                  </Row>
                  <Row className='form-group'>
                    <Col>
                      <Button type='submit' color='primary'>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          )}
        </div>
      </div>
    </div>
  )
}

export default DishdetailComponent