import './styles/main.scss'
import { setupCounter } from './counter.js'
import backgroundLogo from './components/background-logo/backgroundLogo.js'

document.querySelector('#app').innerHTML = `
  <div class="testimonials">
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
  ${backgroundLogo}
`

setupCounter(document.querySelector('#counter'))
