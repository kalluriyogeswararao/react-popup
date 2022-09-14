import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home"
      />
    </div>
  </div>
)

export default Home
