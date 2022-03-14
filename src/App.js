import React from "react";

function App() {
  const [githubData, setGithubData] = React.useState({});
  const handleChange = (e) => {
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      });
  };

  return (
    <div className="wrapper">
      <div className="inner_part">
        <input
          type="text"
          name="username"
          placeholder="Enter your github username"
          onChange={handleChange}
        />
        <div className="user_info">
          <h1> User Profile </h1>
          {githubData?.id ? (
            <div className="user_details">
              <img src={githubData?.avatar_url} alt="user_pic" width="100%" />
              <div className="user_name">
                <a href={githubData?.html_url} rel="noreferrer" target="_blank">
                  {githubData?.login}
                </a>
              </div>
            </div>
          ) : (
            <h3 className="not_found">Loading...</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
