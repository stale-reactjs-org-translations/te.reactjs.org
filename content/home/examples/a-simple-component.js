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
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26
