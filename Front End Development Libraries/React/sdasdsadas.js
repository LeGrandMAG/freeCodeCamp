class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: (event.target.value)
    });
  }
  handleSubmit(event) {
    // Change code below this line
    let sum = (((this.state.input) *0.00076 + 18+5)/.7)
this.setState({
  submit: Number.parseInt(sum + (sum *5/100))+"$"
  })


    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
<input value={this.state.input} onChange={this.handleChange}/>
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
<h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
