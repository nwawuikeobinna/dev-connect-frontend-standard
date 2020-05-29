import React, {Component} from "react";
// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

class CheckboxGroup extends Component {

    state = {
      valueArray: []
    }
    
  handleChange = event => {
    const target = event.currentTarget;
    const { valueArray } = this.state;

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, error, touched, label, children } = this.props;

    

    // const classes = classNames(
    //   "input-field", {
    //     "is-success": value || (!error && touched), // handle prefilled or user-filled
    //     "is-error": !!error && touched },
    //   className
    // );

    return (
      <div className="input-field">
        <fieldset>
          <legend>{label}</legend>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            });
          })}
          {touched && <InputFeedback error={error} />}
        </fieldset>
      </div>
    );
  }
}

export default CheckboxGroup;