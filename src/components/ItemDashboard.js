import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

class ItemDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "item Dash");
    return (
      // <div>
      //   <h3>{this.props.name}</h3>
      //   <p>{this.props.price}</p>
      // </div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>

            <Card.Description>
              price of item {this.props.price}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Like
              </Button>
              <Button basic color="red">
                Show
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default ItemDashboard;
