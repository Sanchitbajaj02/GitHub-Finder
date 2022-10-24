import React, { useState } from "react";
import Search from "../Layouts/Search";

const Organization = () => {
  const [username, setUsername] = useState(null);
  console.log(username);

  return (
    <React.Fragment>
      <section>
        <h2 className="text-center mt-4">Search for Organization</h2>
      </section>
      <Search username={username} setUsername={setUsername} />
    </React.Fragment>
  );
};

export default Organization;
