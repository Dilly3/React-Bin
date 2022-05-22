import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import Header from './components/header'

ReactDom.render(
<React.StrictMode>
< Header text = "Hello from prototype" />
< App />

</React.StrictMode>
 ,document.getElementById(`root`))