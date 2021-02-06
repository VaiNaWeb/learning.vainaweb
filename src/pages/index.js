import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Module from "../components/module";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  max-width: 1440px;
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
  font: 400 1.15rem 'Roboto', sans-serif;
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
`;

const modules = [
  {
    id: 1,
    name: 'Páginas Web Responsivas',
    description: 'Aprendendo como a internet funciona e a criar páginas responsivas',
    tags: ['html', 'css', 'responsive design'],
    link: 'module-1/how-it-works',
  },
  {
    id: 2,
    name: 'Interatividade de Páginas',
    description: 'Aprendendo a pensar como um software funciona e desenvolver aplicações usando JavaScript',
    tags: ['lógica', 'js', 'react'],
    link: null,
  },
  {
    id: 3,
    name: 'Arquitetura Front-End',
    description: 'Aprendendo a criar uma aplicação robusta e a pensar a arquitetura do código',
    tags: ['front-end first', 'testes automatizados', 'hooks'],
    link: null,
  }
];

const IndexPage = ({ location }) => {
  const renderModules = () => {
    return modules.map((module) => (
      <Module
        key={module.id}
        id={module.id}
        name={module.name}
        description={module.description}
        tags={module.tags}
        link={module.link}
      />
    ));
  };

  return (
    <Layout
      location={location}
      noMenu
    >
      <SEO title="Learning" />
      <Container>
        <Logo src="https://www.vainaweb.com.br/assets/Logo-VnW.svg" />
        <Message>
          Olá! Aqui você vai encontrar todo o material de apoio relacionado as carreiras do Vai na Web.
        </Message>
        <ModulesList>
          {renderModules()}
        </ModulesList>
      </Container>
    </Layout>
  );
};

export default IndexPage
