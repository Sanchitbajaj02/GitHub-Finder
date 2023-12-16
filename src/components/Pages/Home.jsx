import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="container my-5">
        <article className="text-center">
          <h1 className="fw-semibold">Welcome to GitHub Finder 👋</h1>
          <p>
            GitHub Finder is a web application that helps users retrieve
            information about their GitHub statistics, which dynamically change
            with their profile activity.
          </p>
        </article>

        <article className="row mx-auto">
          <div className="col-md-6">
            <div className="card card-shadow">
              <Link
                to="/users"
                className="card-body link-card-highlight text-center"
              >
                <h4 className="card-title">User Search</h4>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-shadow">
              <Link
                to="/orgs"
                className="card-body link-card-highlight text-center"
              >
                <h4 className="card-title">Organization Search</h4>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Home
