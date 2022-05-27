import React from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState([
    // {
    //   firstName: 'ivan',
    //   lastName: 'nova',
    //   telNum: '123',
    //   email: 'asd@gamqwe',
    //   agree: false,
    //   contactType: 'Tel.',
    //   message: 'asdasdqwemnb'
    // }
  ])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [telNum, setTelNum] = useState('')
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)
  const [contactType, setContactType] = useState('Tel.')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState(
    {
      firstName: false,
      lastName: false,
      telnum: false,
      email: false
    }

  )

  const handleBlur = (field) => (evt) => {
    // console.log(field);
    setTouched(
      { ...touched, [field]: true }
    )
  }

  function validate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: '',
      lastName: '',
      telNum: '',
      email: '',
    }
    const regex = /^[0-9]*$/

    if (touched.firstName && firstName.length < 3) {
      errors.firstName = 'FirstName should be more 3 characters'
    } else if (touched.firstName && firstName.length > 10) {
      errors.firstName = 'FirstName should be less than 10 characters'
    }
    if (touched.lastName && lastName.length < 3) {
      errors.lastName = 'LastName should be more 3 characters'
    } else if (touched.lastName && lastName.length > 10) {
      errors.lastName = 'LastName should be less than 10 characters'
    }
    if (touched.telnum && !regex.test(telNum)) {
      errors.telNum = 'Tel. Number should contain only numbers';
    }
    if (touched.email && email.split('').filter(x => x === '@').length !== 1) {
      errors.email = 'Email should contain a @';
    }

    return errors
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newData = { firstName, lastName, telNum, email, agree, contactType, message }
    setData([...data, newData])
    // console.log(data);
    alert(JSON.stringify(data))
  }
  const errors = validate(firstName, lastName, telNum, email)
  console.log(errors);
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
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label htmlFor='firstname' md={2}>First Name</Label>
            <Col md={10}>
              <Input
                type='text'
                id='firstname'
                name='firstname'
                valid={errors.firstName === ''}
                invalid={errors.firstName !== ''}
                onBlur={handleBlur('firstName')}
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
              <FormFeedback>{errors.firstName}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='lastname' md={2}>Last Name</Label>
            <Col md={10}>
              <Input
                type='text'
                id='lastname'
                name='lastname'
                valid={errors.lastName === ''}
                invalid={errors.lastName !== ''}
                onBlur={handleBlur('lastName')}
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
              <FormFeedback>{errors.lastName}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
            <Col md={10}>
              <Input
                type='tel'
                id='telnum'
                name='telnum'
                valid={errors.telNum === ''}
                invalid={errors.telNum !== ''}
                onBlur={handleBlur('telnum')}
                placeholder='Tel. number'
                value={telNum}
                onChange={(e) => setTelNum(e.target.value)} />
              <FormFeedback>{errors.telNum}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='email' md={2}>Email</Label>
            <Col md={10}>
              <Input
                type='email'
                id='email'
                name='email'
                valid={errors.email === ''}
                invalid={errors.email !== ''}
                onBlur={handleBlur('email')}
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <FormFeedback>{errors.email}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    value={agree}
                    onChange={(e) => setAgree(e.curretTarget.value)} /> {' '}
                  <strong>May we contact you?</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Input
                type="select"
                name="contactType"
                value={contactType}
                onChange={(e) => setContactType(e.target.value)}>
                <option>Tel.</option>
                <option>Email</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="message" md={2}>Your Feedback</Label>
            <Col md={10}>
              <Input
                type="textarea"
                id="message"
                name="message"
                rows="12"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button
                type="submit"
                color="primary">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default Contact