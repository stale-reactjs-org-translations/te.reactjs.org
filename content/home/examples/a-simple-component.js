class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        హలో {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Ashrith" />,
  document.getElementById('hello-example')
);