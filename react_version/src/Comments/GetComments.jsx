import React from "react";
import Comments from "./Comments";

class GetComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
    this._isMounted = false;
  }

  update = async () => {
    const response = await fetch(`/pokemons/comments/${this.props.name}`);
    if (response.ok) {
      const data = await response.json();
      this.props.getId(data.length);
      this.props.saveData(data);
      this.setState({ data });
    } else this.setState({ data: "" });
  };

  componentDidMount() {
    this._isMounted = true;
    this.update();
  }

  componentDidUpdate(prevProps) {
    this._isMounted = true;
    if (prevProps.name !== this.props.name) {
      this.props.getId(0);
      this.update();
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  onClickDelete = deleteValue => {
    this.props.onClickDelete(deleteValue);
  };

  onClickUpdate = updateValue => {
    this.props.onClickUpdate(updateValue);
  };

  render() {
    return (
      this.state.data && (
        <Comments
          data={this.state.data}
          onClickDelete={this.onClickDelete}
          onClickUpdate={this.onClickUpdate}
        />
      )
    );
  }
}

export default GetComments;
