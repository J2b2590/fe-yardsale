import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card } from "semantic-ui-react";

class ItemDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props, "item Dash");
    return (
      <div>
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
                <Button
                  basic
                  color="red"
                  onClick={() => {
                    this.props.history.push(`/items/show/${this.props.id}`);
                  }}
                >
                  Show
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateProps)(ItemDashboard);
