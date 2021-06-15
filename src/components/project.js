import React from "react";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: 2rem 0;

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Name = styled.span`
  width: 100%;
  color: #0F2B92;
  text-align: center;
  font: 400 1.5rem 'Roboto', sans-serif;
`;

const Description = styled.span`
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  color: #505050;
  text-align: center;
  font: 300 .95rem 'Roboto', sans-serif;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  margin: 1rem auto 0;
  border: none;
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
  font: 400 1rem 'Roboto', sans-serif;
  background: #0F2B92;
`;

const Project = ({
  id,
  name,
  description,
  design
}) => {
  return (
    <Container>
      <Name>
        {`${id} - ${name}`}
      </Name>
      <Description>{description}</Description>
      {design && (
        <Link
          href={design}
          target="_blank"
        >
          Live
        </Link>
      )}
    </Container>
  );
};

export default Project;