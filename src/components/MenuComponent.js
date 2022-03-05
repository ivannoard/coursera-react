import React, { useState } from 'react'
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const MenuComponent = ({ dishes }) => {

  const [showDish, setShowDish] = useState(false)
  const arrDish = []
  const togglerDish = (dish) => {
    setShowDish(!showDish)
    arrDish.push(dish)
  }

  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-4 mt-5 flex">
      <Card key={dish.id}
        onClick={() => togglerDish(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        {/* conditional rendering */}
        {/* {showDish && (<CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>)} */}
        {/* ===================== */}
      </Card>
    </div>
  ))
  return (
    <>
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {showDish && (<h1>{arrDish}</h1>)}
        </div>
      </div>
    </>
  )
}

export default MenuComponent