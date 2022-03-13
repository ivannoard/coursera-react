import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap'

function RenderCard(data) {
  // console.log(data);
  return (
    <Card key={data.id}>
      <CardImg src={data.image} alt={data.name} />
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        {data.designation && <CardSubtitle>{data.designation}</CardSubtitle>}
        <CardText>{data.description}</CardText>
      </CardBody>
    </Card>
  )
}

const HomeComponent = ({ dishes, leaders, promotion }) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-4">
          {RenderCard(dishes)}
        </div>
        <div className="col-12 col-md-4">
          {RenderCard(promotion)}
        </div>
        <div className="col-12 col-md-4">
          {RenderCard(leaders)}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent