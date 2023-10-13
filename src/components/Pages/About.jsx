import { Fragment } from 'react'
import React from 'react'

const About = () => {
  return (
    <Fragment>
      <section className="card card-cover shadow p-3 m-5">
        <article className="mt-3">
          <h3>About this App</h3>
          <p>
            It searches for all the Github users using the text inputted by the
            user in the form. It returns all the users matching the string in a
            grid format.
          </p>
        </article>

        <article className="mt-3">
          <h3>How to use this App</h3>
          <p>
            The user can search for any Github user by entering the username in
            the form. The user can also search for any Github organization by
            entering the organization name in the form. The user can also search
            for any Github repository by entering the repository name in the
            form.
          </p>
        </article>

        <article className="mt-3">
          <h3>Version: 2.0.0</h3>
        </article>

        <article className="mt-3">
          <h4 className="d-inline">Contributors:- </h4>
          <ul>
            <li className="fs-5">
              Sanchit Bajaj{' '}
              <a
                href="http://github.com/sanchitbajaj02/"
                target="_blank"
                className="link-hover"
                rel="noreferrer noopener"
              >
                @sanchitbajaj02
              </a>
            </li>
            <li className="fs-5">
              Sahil Gill{' '}
              <a
                href="https://github.com/SahilGill003"
                target="_blank"
                className="link-hover"
                rel="noreferrer noopener"
              >
                @SahilGill003
              </a>
            </li>
          </ul>
        </article>
      </section>
    </Fragment>
  )
}

export default About
