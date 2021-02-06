import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import RehypeReact from "rehype-react";

// Layout
import Layout from '../components/layout';

const Article = styled.article`
  width: 85%;
  padding: 0 10%;
  margin-left: 15vw;
`;

const Title = styled.h1`
  text-align: center;
  font: 400 2.5rem 'Open Sans', sans-serif;
`;

const SubTitle = styled.h2`
  margin: 3rem 0;
  text-align: center;
  text-decoration: underline;
  font: 400 1.5rem 'Open Sans', sans-serif;
`;

const Paragraph = styled.p`
  margin: 1.5rem 0;
  font: 400 1rem 'Open Sans', sans-serif;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
  margin: 4rem auto;
`;

const List = styled.ol`
  margin: 2rem 0;
  padding: 0;
  font: 400 1rem 'Open Sans', sans-serif;
`;

const Item = styled.li`
  margin: .75rem 0;
  font: 400 1rem 'Open Sans', sans-serif;
`;

const CodeContainer = styled.pre`
  padding: 1rem;
  border-radius: 4px;
  color: #f8f8f2;
  white-space: wrap;
  font: 400 1rem 'Open Sans', sans-serif;
  background-color: rgb(24, 48, 85);
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    h2: SubTitle,
    p: Paragraph,
    img: Image,
    ol: List,
    li: Item,
    pre: CodeContainer,
  },
}).Compiler;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;

  return (
    <Layout location={location}>
      <Article>
        {renderAst(htmlAst)}
      </Article>
    </Layout>
  )
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;