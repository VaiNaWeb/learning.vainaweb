import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Project from "../components/project";

// Images
import logo from '../assets/logo.svg';

const Logo = styled(Link)`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
	display: flex;
	justify-content: center;
	width: 150px;
`;

const Image = styled.img`
	width: 70%;
`;

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

const Title = styled.h2`
  color: #0F2B92;
  text-align: center;
  font: 700 2rem 'Roboto', sans-serif;
`;

const Message = styled.p`
  color: #505050;
  width: 55%;
  margin: 1.5rem auto;
  text-align: center;
  font: 400 1.25rem 'Roboto', sans-serif;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 2rem auto 0;
  padding: 0;
`;

const projects = [
  {
    id: 1,
    name: 'Counter',
    description: 'Um contador que aumenta e diminui um número exibido na tela. Nele o aluno vai aprender o que é o state e como interagir com eventos básicos como o click.',
    design: 'https://alicecomoura.github.io/quiz-js-ar/',
    level: 'basic'
  },
  {
    id: 2,
    name: 'Calculator',
    description: 'Expandindo os conhecimentos de state vamos criar uma calculadora que executa as 4 operações matemáticas em 2 números. Nesse desafio vamos usar inputs e o evento onchange.',
    design: 'https://alicecomoura.github.io/quiz-js-ar/',
    level: 'basic'
  },
  {
    id: 3,
    name: 'Todo - Básico',
    description: 'O clássico to-do, uma lista de tarefas onde o usuário pode adicionar, marcar e excluir tarefas. Vamos aplicar nossos conhecimentos de arrays nesse desafio.',
    design: 'https://alicecomoura.github.io/quiz-js-ar/',
    level: 'basic'
  },
  {
    id: 4,
    name: 'Netflix',
    description: 'Vamos elevar o nível com esse buscador de filmes. Nesse app você poderá buscar por filmes e visualizar os detalhes (sinopse, stars, tags). Vamos entender como conversar com uma API na prática com esse desafio e entender um pouco sobre components',
    design: 'https://bigsondev.com/projects/find-movies-app-project/',
    design: 'https://alicecomoura.github.io/quiz-js-ar/',
    level: 'medium',
  },
  {
    id: 5,
    name: 'Quizz',
    description: 'Vamos praticar nossa lógica criando uma Quizz. Nesse desafio vamos usar arrays, condicionais e eventos para criar um show de perguntas e respostas!',
    design: 'https://alicecomoura.github.io/quiz-js-ar/',
    level: 'medium'
  },
  {
    id: 6,
    name: 'Todo - Avançado',
    description: 'Com os novos conhecimentos adquiridos vamos revisitar o nosso Todo e expandir as funcionalidades aplicando filtros e melhorando a UX.',
    design: 'https://bigsondev.com/projects/notes-app-project/',
    level: 'medium'
  }
];

const Projects = ({ location }) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Project
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          level={project.level}
          design={project.design}
        />
      )
    })
  }

  return (
    <Layout
      location={location}
      noMenu
    >
      <SEO title="Projetos | Academia VNW" />
      <Container>
        <Logo
          to="/"
        >
          <Image src={logo} />
        </Logo>
        <Title>
          Projetos React
        </Title>
        <Message>
          Os projetos foram pensados para dar a oportunidade ao aluno de aprender na prática como são desenvolvidas as aplicações no mundo real:
        </Message>
        <List>
          {renderProjects()}
        </List>
      </Container>
    </Layout>
  );
};

export default Projects;
