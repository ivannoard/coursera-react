import React from 'react'
import {
  Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'

function DisplayCard(dish) {

  return (
    <Card key={dish.id} >
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card >
  )
}

const MenuComponent = ({ dishes, dishesLoading, err }) => {

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
          {dishesLoading && (<Loading />)}
          {menu}
        </div>
      </div>
    </>
  )
}

export default MenuComponent