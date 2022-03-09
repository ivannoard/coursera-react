import React, { useState } from 'react'
import {
  Card, CardImg, CardImgOverlay,
  CardTitle
} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

function DisplayCard(togglerDish, dish) {
  return (
    <Card key={dish.id}
      onClick={() => togglerDish(dish)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

const MenuComponent = ({ dishes }) => {

  const [showDish, setShowDish] = useState(false)
  const [arrDish, setArrDish] = useState([])

  const togglerDish = (dish) => {
    setShowDish(!showDish)
    setArrDish(dish)
  }

  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-4 mt-5 flex">
      {DisplayCard(togglerDish, dish)}
    </div>
  ))
  return (
    <>
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row mt-5">
          {showDish && (<DishdetailComponent arrDish={arrDish} />)}
        </div>
      </div>
    </>
  )
}

export default MenuComponent