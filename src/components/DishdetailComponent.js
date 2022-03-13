import { useParams } from 'react-router-dom';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function DisplayCard(dish) {
  let params = useParams()
  let id = params.id
  let data = dish.filter(item => item.id === Number(id))[0]
  return (
    <Card key={data.id}>
      <CardImg width="100%" src={data.image} alt={data.name} />
      <CardImgOverlay>
        <CardTitle>{data.name}</CardTitle>
      </CardImgOverlay>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardText>{data.description}</CardText>
      </CardBody>
    </Card>
  )
}

function DisplayComment(comments) {
  let params = useParams()
  let data = comments.filter(comment => comment.dishId === Number(params.id))
  const date = new Date(data.date)
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  console.log(data);
  const display = data.map(item => (
    <div key={item.id}>
      <p>{item.comment}</p>
      <p>--{item.author}, {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
    </div>
  ))
  return display
}
const DishdetailComponent = ({ dish, comments }) => {
  let params = useParams()
  let id = params.id
  let data = dish.filter(item => item.id === Number(id))[0]
  return (
    <div className='container my-5'>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{data.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          {DisplayCard(dish)}
        </div>
        <div className="col-12 col-md-6">
          <h2>Comments</h2>
          {DisplayComment(comments)}
        </div>
      </div>
    </div>
  )
}

export default DishdetailComponent