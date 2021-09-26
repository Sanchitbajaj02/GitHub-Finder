import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <section className="mt-3">
        <h2>About this App</h2>
        <p>
          It searches for all the Github users using the text inputted by the
          user in the form. It returns all the users matching the string in a
          grid format.
        </p>
      </section>

      <section>
        <h4 className="d-inline">Version:</h4> 1.0.0
        <br />
        <h4 className="d-inline">Author:</h4> Sanchit Bajaj
        <br />
        <h4 className="d-inline">Github:</h4>{" "}
        <a
          href="http://github.com/sanchitbajaj02/"
          target="_blank"
          rel="noreferrer"
        >
          @sanchitbaj02
        </a>
      </section>
    </Fragment>
  );
};

export default About;
