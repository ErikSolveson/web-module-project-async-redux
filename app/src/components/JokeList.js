import React from "react";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeList extends React.Component {
  state = {
    newJoke: this.props.joke,
  };

  render() {
    return (
      <div>
        {this.props.jokes.map((joke) => {
          <Joke />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title.title,
  };
};

export default connect(
  mapStateToProps
  // same as { updateTitle: updateTitle }
)(JokeList);
