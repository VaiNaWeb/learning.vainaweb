import React from "react";
import styled from "styled-components";
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

import LogoImg from '../assets/logo-vnw.svg';

// Components
import Module from "../components/module";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  max-width: 1440px;
  @media (max-width: 667px) {
    width: 90%;
  }
`;

const Logo = styled.img`
  display: block;
  width: 150px;
  margin: 2rem auto;
`;

const Message = styled.span`
  display: block;
  width: 50%;
  margin: 1.5rem auto;
  text-align: center;
  font: 400 1.5rem 'Roboto', sans-serif;

  @media (max-width: 667px) {
    width: 90%;
  }
`;

const ModulesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  list-style: none;

  @media (max-width: 667px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const IndexQuery = graphql`
  query {
    vnw {
      modules {
        name
        description
        slug
        tags
      }
    }
  }
`;

const IndexPage = ({ location, data }) => {
  const renderModules = () => {
    return data.vnw.modules.map((module, index) => (
      <Module
        key={module.id}
        id={index + 1}
        name={module.name}
        description={module.description}
        tags={module.tags}
        link={`/module-${index + 1}/${module.slug}`}
        projectsLink={module.projectsLink}
      />
    ));
  };

  return (
    <Layout
      location={location}
      noMenu
    >
      <SEO title="Início | Academia" />
      <Container>
        <Logo src={LogoImg} />
        <Message>
          Olá! Aqui você encontra todo o material de apoio relacionado as carreiras do Vai na Web :)
        </Message>
        <ModulesList>
          {renderModules()}
        </ModulesList>
      </Container>
    </Layout>
  );
};

export default IndexPage
