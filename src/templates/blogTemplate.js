import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import RehypeReact from "rehype-react";

// Layout
import Layout from '../components/layout';

const Article = styled.article`
  width: 85%;
  max-width: 1110px;
  padding: 0 10%;
  margin-left: 20vw;

  @media (max-width: 667px) {
    width: 100%;
    margin-left: 0;
    padding: 0 2%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font: 700 2.25rem 'Open Sans', sans-serif;
`;

const SubTitle = styled.h2`
  margin: 3rem 0;
  font: 700 1.5rem 'Open Sans', sans-serif;
`;

const ThirdTitle = styled.h3`
  margin: 3rem 0;
  font: 700 1.15rem 'Open Sans', sans-serif;
`;

const FourthTitle = styled.h3`
  margin: 3rem 0;
  font: 700 1rem 'Open Sans', sans-serif;
`;

const Paragraph = styled.p`
  margin: 1.5rem 0;
  color: #505050;
  font: 400 .95rem 'Open Sans', sans-serif;
  line-height: 1.75;
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
    h3: ThirdTitle,
    h4: FourthTitle,
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