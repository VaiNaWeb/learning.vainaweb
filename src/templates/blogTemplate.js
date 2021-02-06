import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import RehypeReact from "rehype-react";

const Article = styled.article`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 766px) {
    width: 65%
  }
`;

const Title = styled.h1`
  text-align: center;
  font: 400 2.5rem 'Open Sans', sans-serif;
`;

const SubTitle = styled.h2`
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
  width: 60%;
  margin: 2rem auto;
`;

const List = styled.ol`
  margin: 2rem 0;
  padding: 0;
  font: 400 1rem 'Open Sans', sans-serif;
`;

const Item = styled.li`
  margin: .75rem 0;
`;

const CodeContainer = styled.pre`
  padding: 1rem;
  border-radius: 4px;
  color: #f8f8f2;
  white-space: wrap;
  background-color: #272822;
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
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;

  return (
    <Article>
      {renderAst(htmlAst)}
    </Article>
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