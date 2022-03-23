import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

// import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

// include what chains you want to support
// 4 Rinkeby
const supportedChainIds = [4]

// include what type of wallet you want to support
// in this case, we support Metamask which is an 'injected wallet'

const connectors = {
  injected: {}
}

// Finally, wrapp App with ThirdwebWeb3Provider
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors = {connectors}
      supportedChainIds = {supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
