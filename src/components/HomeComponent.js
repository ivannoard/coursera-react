import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Loading from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components';
function RenderCard(data) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card key={data.id}>
        <CardImg src={baseUrl + data.image} alt={data.name} />
        <CardBody>
          <CardTitle>{data.name}</CardTitle>
          {data.designation && <CardSubtitle>{data.designation}</CardSubtitle>}
          <CardText>{data.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  )
}

const HomeComponent = ({ dishes, leaders, promotion, dishesLoading, promoLoading, leadersLoading, err }) => {

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-4">
          {dishesLoading && (<Loading />)}
          {err && err}
          {RenderCard(dishes)}
        </div>
        <div className="col-12 col-md-4">
          {promoLoading && (<Loading />)}
          {RenderCard(promotion)}
        </div>
        <div className="col-12 col-md-4">
          {leadersLoading && (<Loading />)}
          {RenderCard(leaders)}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent