import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32%;
  height: 250px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #0F2B92;
`;

const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #FFAC2D;
  font: 400 1.25rem 'Roboto', sans-serif;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: .5rem;
    color: #FFF;
    border-radius: 50%;
    background-color: #FFAC2D;
  }
`;

const Description = styled.span`
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
  color: #FFF;
  font: 300 .95rem 'Roboto', sans-serif;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 55px;
  height: 20px;
  margin: 5px 3px;
  padding: 0 .5rem;
  border-radius: 15px;
  color: #FFF;
  font: 400 .9rem 'Roboto', sans-serif;
  background-color: #FFAC2D;
`;

const MyLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 35px;
  margin: 1.5rem auto 0;
  padding: 0;
  border-radius: 8px;
  color: #FFF;
  text-decoration: none;
  font: 400 .95rem 'Roboto', sans-serif;
  background-color: #FFAC2D;
`;

const Message = styled.span`
  width: 40%;
  display: block;
  margin: 1.5rem auto 0;
  padding: 0;
  color: #FFAC2D;
  text-align: center;
  font: 400 .95rem 'Roboto', sans-serif;
`;

const Module = ({
  id,
  name,
  description,
  tags,
  link
}) => {
  const renderTags = () => {
    return tags.map((tag, index) => (
      <Tag key={index}>{tag}</Tag>
    ))
  };

  return (
    <Container>
      <Name>
        <span>{id}</span>
        {name}
      </Name>
      <Description>{description}</Description>
      <TagList>
        {renderTags()}
      </TagList>
      {link 
        ? <MyLink to={link}>Acessar</MyLink>
        : <Message>Aguarde...</Message>
      }
    </Container>
  );
};

export default Module;