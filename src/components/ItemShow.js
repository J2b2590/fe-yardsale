import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card } from "semantic-ui-react";

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.item, "show page");
    return (
      <div>
        <div>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>{this.props.item.name}</Card.Header>

                <Card.Description>
                  price of item {this.props.item.price}
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
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateProps)(ItemShow);
