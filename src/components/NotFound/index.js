import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found"
      />
      <h1 className="lost">Lost Your Way?</h1>
      <p className="para">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page.
      </p>
    </div>
  </div>
)

export default NotFound
