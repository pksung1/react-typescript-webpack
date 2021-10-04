function HelloMessage({
  name
}) {
  return /*#__PURE__*/React.createElement("div", null, "Hello ", name);
}

ReactDOM.render( /*#__PURE__*/React.createElement(HelloMessage, {
  name: "Taylor2"
}), document.getElementById('container'));
