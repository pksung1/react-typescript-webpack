import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function HelloMessage({ name }) {

  const [msg, setMsg] = useState(name)
  const onClickButton = () => {
    setMsg('Seonpark')
  }

  return <div>Hello {msg} <button onClick={onClickButton}>Change MSg</button></div>;
}
  
ReactDOM.render(
  <HelloMessage name="Taylor2" />,
  document.getElementById('container')
);