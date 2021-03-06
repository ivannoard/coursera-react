import React from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Form, Control, Errors, actions } from 'react-redux-form'

const Contact = (resetFeedbackForm) => {

  const required = (val) => val && val.length
  const maxLength = (len) => (val) => !(val) || (val.length <= len)
  const minLength = (len) => (val) => val && (val.length >= len)
  const isNumber = (val) => !isNaN(Number(val))
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]\.[A-Z]{2.4}$/i.test(val)

  function handleSubmit(values) {
    alert(`current state are ${JSON.stringify(values)}`)
    resetFeedbackForm()
  }
  return (
    <div className="container my-5">
      {/* {errors} */}
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG<br />
            <i className="fa fa-phone"></i>: +852 1234 5678<br />
            <i className="fa fa-fax"></i>: +852 8765 4321<br />
            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
          </div>
        </div>
      </div>
      <div className="row">
        <Form model='feedback' onSubmit={(values) => handleSubmit(values)}>
          <Row className='form-group'>
            <Label htmlFor='firstname' md={2}>First Name</Label>
            <Col md={10}>
              <Control.text
                model='.firstname'
                className='form-control'
                id='firstname'
                name='firstname'
                placeholder='First Name'
                validators={
                  { required, maxLength: maxLength(15), minLength: minLength(3) }
                }
              />
              <Errors
                className='text-danger'
                model='.firstname'
                show='touched'
                messages={{
                  required: 'Required',
                  maxLength: 'Must be greater than 2 characters',
                  minLength: 'Must be 15 characters or less'
                }}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='lastname' md={2}>Last Name</Label>
            <Col md={10}>
              <Control.text
                model='.lastname'
                id='lastname'
                name='lastname'
                className='form-control'
                placeholder='Last Name'
                validators={
                  { required, maxLength: maxLength(15), minLength: minLength(3) }
                }
              />
              <Errors
                className='text-danger'
                model='.lastname'
                show='touched'
                messages={{
                  required: 'Required',
                  maxLength: 'Must be greater than 2 characters',
                  minLength: 'Must be 15 characters or less'
                }}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
            <Col md={10}>
              <Control.text
                model='.telnum'
                className='form-control'
                placeholder='Tel. Number'
                id='telnum'
                name='telnum'
                validators={
                  { required, maxLength: maxLength(15), minLength: minLength(3), isNumber }
                }
              />
              <Errors
                className='text-danger'
                model='.telnum'
                show='touched'
                messages={{
                  required: 'Required',
                  maxLength: 'Must be greater than 2 numbers',
                  minLength: 'Must be 15 numbers or less',
                  isNumber: 'Must be Number'
                }}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='email' md={2}>Email</Label>
            <Col md={10}>
              <Control.text
                model='.email'
                className='form-control'
                placeholder='Email'
                id='email'
                name='email'
                validators={
                  { required, validEmail }
                }
              />
              <Errors
                className='text-danger'
                model='.email'
                show='touched'
                messages={{
                  required: 'Required',
                  validEmail: 'Email Address Not Valid'
                }}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Col md={{ size: 6, offset: 2 }}>
              <div className='form-check'>
                <Label check>
                  <Control.checkbox
                    model='.agree'
                    className='form-check-input'
                    name="agree"
                  /> {' '}
                  <strong>May we contact you?</strong>
                </Label>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Control.select
                model='.contactType'
                className='form-control'
                name="contactType"
              >
                <option>Tel.</option>
                <option>Email</option>
              </Control.select>
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor="message" md={2}>Your Feedback</Label>
            <Col md={10}>
              <Control.textarea
                model='.message'
                className='form-control'
                id="message"
                name="message"
                rows="12"
              ></Control.textarea>
            </Col>
          </Row>
          <Row className='form-group'>
            <Col md={{ size: 10, offset: 2 }}>
              <Button
                type="submit"
                color="primary">
                Send Feedback
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default Contact