import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { captured } from "../actions/items";
class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
    };
  }

  render() {
    console.log(this.props, "show page");
    return (
      <div>
        <div>
          {this.props.capItem.name ? (
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>{this.props.capItem.name}</Card.Header>

                  <Card.Description>
                    price of item {this.props.capItem.price}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      FAV
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
          ) : null}
          <Button
            basic
            color="red"
            onClick={() => {
              this.props.history.push(`/items`);
            }}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    capItem: state.capItem,
  };
};

export default connect(mapStateProps, { captured })(ItemShow);
