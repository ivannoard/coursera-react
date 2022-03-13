import React from 'react'
import {
  Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'

function DisplayCard(dish) {

  return (
    <Card key={dish.id} >
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card >
  )
}

const MenuComponent = ({ dishes }) => {

  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-4 mt-5 flex" >
      {DisplayCard(dish)}
    </div >
  ))
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    </>
  )
}

export default MenuComponent