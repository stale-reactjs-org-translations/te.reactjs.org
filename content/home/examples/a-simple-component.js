class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
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
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> d522a5f4a9faaf6fd314f4d15f1be65ca997760f
