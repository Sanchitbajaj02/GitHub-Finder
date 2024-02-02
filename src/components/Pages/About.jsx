export default function About() {
  return (
    <>
      <section className="card card-cover shadow p-3 m-5">
        <article className="mt-3">
          <h3>👋 Introduction</h3>
          <p>
            GitHub Finder is a web application that helps users retrieve
            information about their GitHub statistics, which dynamically change
            with their profile activity.
          </p>
        </article>

        <article className="mt-3">
          <h3>🔨 What does it do?</h3>
          <p>
            Github finder contains a search feature that searches for all the
            Github users using the text entered by the user. It displays the
            users whose username fully or partially matches with the entered
            text. This GitHub Finder differs from others in the sense that, it
            not only shows the basic information of that GitHub user account but
            also shows their activities, contributions, commits, pull requests
            and overall profile score.
          </p>
        </article>

        <article>
          <h3 className="mt-3">🙏🏽 Support</h3>
          <p>
            This project needs a star from you. Do not forget to leave a star 🌟
          </p>
        </article>

        <article className="mt-3">
          <h3>
            Version:{' '}
            <img
              src="https://img.shields.io/github/v/release/sanchitbajaj02/github-finder?style=for-the-badge"
              alt="Current Release"
            />
          </h3>
        </article>

        <article className="mt-3">
          <h4 className="d-inline">Contributors:- </h4>
          <br />
          <br />

          <img
            src="https://contrib.rocks/image?repo=sanchitbajaj02/github-finder"
            alt="github-finder-contributors"
          />
        </article>
      </section>
    </>
  )
}
