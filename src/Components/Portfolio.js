import React from "react";
const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a target="_blank" rel="noreferrer" href={projects.url} title={projects.title} >
              <img alt={projects.title} src={projectImage} className={projects.title==="github.com/keshav304" ? "githubprojects" : ""} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
             
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <a target="_blank" rel="noreferrer" href={projects.url} >
          <h5 className="projectname">{projects.name}</h5>
          </a>
        </div>
        
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed ">
          <h2 className="projects">Check Out Some of My Works.</h2>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
