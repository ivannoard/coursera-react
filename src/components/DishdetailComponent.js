import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function DisplayCard(arrDish) {
  return (
    <Card key={arrDish.id}>
      <CardImg width="100%" src={arrDish.image} alt={arrDish.name} />
      <CardImgOverlay>
        <CardTitle>{arrDish.name}</CardTitle>
      </CardImgOverlay>
      <CardBody>
        <CardTitle>{arrDish.name}</CardTitle>
        <CardText>{arrDish.description}</CardText>
      </CardBody>
    </Card>
  )
}
const DishdetailComponent = ({ arrDish }) => {
  return (
    <>
      <div className="col-12 col-md-6">
        {DisplayCard(arrDish)}
      </div>
      <div className="col-12 col-md-6">
        <h2>Comments</h2>
        {arrDish.comments.map(item => {
          const date = new Date(item.date)
          const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
          console.log(date)
          return (
            <div key={item.id}>
              <p>{item.comment}</p>
              <p>--{item.author}, {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DishdetailComponent