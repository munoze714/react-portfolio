import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Projects from "../db/projects.json"


class Portfolio extends Component {
  state = {
    Projects
  };

  render(props) {
    return (
      <>
        <Wrapper>
          <Title>Projects</Title>
          {this.state.Projects.map(project => (
            <MediaCard
              id={project.id}
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              live={project.live}
              github={project.github}
            />
          ))}
        </Wrapper>
      </>
    )
  }
}

export default Portfolio;
