function HelloMessage({ name }) {
    return <div>Hello {name}</div>;
  }
  
ReactDOM.render(
  <HelloMessage name="Taylor2" />,
  document.getElementById('container')
);