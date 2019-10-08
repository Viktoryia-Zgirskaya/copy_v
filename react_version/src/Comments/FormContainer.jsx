import React from "react";
import FormItem from "./FormItem";
import Methods from "./Methods";
import Utils from "../Utils";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      comment: "",
      id: 0,
      submit: false,
      update: false,
      data: {}
    };
  }

  saveData = data => {
    this.setState({ data });
  };

  updateValue = value => {
    const data = this.state.data;
    this.setState({ data: data[value] });
  };

  changeSubmit = () => {
    this.setState({ submit: false });
  };

  onSubmit = () => {
    const data = {
      user: this.state.user,
      comment: this.state.comment,
      date: Utils.getDateTime(),
      id: this.state.id
    };
    this.setState({ submit: true, data });
  };

  onChangeComment = comment => {
    this.setState({ comment, submit: false });
  };

  onChangeName = user => {
    this.setState({ user, submit: false });
  };

  getId = id => {
    this.setState({ id });
  };

  render() {
    return (
      <div className="container_comments_form">
        <FormItem
          onChangeComment={this.onChangeComment}
          onChangeName={this.onChangeName}
          onSubmit={this.onSubmit}
          newData={this.state.data}
        />

        <Methods
          data={this.state.data}
          id={this.state.id}
          name={this.props.name}
          changeSubmit={this.changeSubmit}
          getId={this.getId}
          submit={this.state.submit}
          saveData={this.saveData}
          updateValue={this.updateValue}
        />
      </div>
    );
  }
}

export default FormContainer;
