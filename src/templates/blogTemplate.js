import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import RehypeReact from "rehype-react";
import {
  defineCustomElements as deckDeckGoHighlightElement
} from "@deckdeckgo/highlight-code/dist/loader";

// Layout
import Layout from '../components/layout';
import SEO from "../components/seo"

// Assets
import arrow from '../assets/arrow.svg';

deckDeckGoHighlightElement();

const Article = styled.article`
  width: 85%;
  max-width: 1440px;
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
  margin: 1.5rem 0.2rem;
  color: #505050;
  font: 400 1rem 'Open Sans', sans-serif;
  line-height: 1.75;
  text-align:justify;
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

const Links = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0 4rem;

  ${({ prev, next }) => prev && !next &&`
		justify-content: flex-start;
  `}

  ${({ prev, next }) => !prev && next &&`
		justify-content: flex-end;
  `}

  ${({ prev, next }) => prev && next &&`
		justify-content: space-around;
  `}
`;

const NavItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  min-height: 80px;
  padding: 1rem 5%;
  border: 1px solid rgb(230, 236, 241);
  box-shadow: rgb(116 129 141 / 10%) 0px 3px 8px 0px;
  color: #505050;
  text-decoration: none;
  font: 400 .95rem 'Open Sans', sans-serif;

  ${({ prev }) => prev &&`
		justify-content: flex-start;
  `}

  ${({ next }) => next &&`
    justify-content: flex-end;
    text-align: right;
  `}

  &:hover {
    color: #FFAC2D;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  
  ${({ prev }) => prev &&`
    left: 8px;
    transform: translateY(-50%) rotate(180deg);
  `}

  ${({ next }) => next &&`
    right: 8px;
    transform: translateY(-50%);
  `}
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
  },
}).Compiler;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;

  return (
    <Layout location={location}>
      <SEO title="Aulas | Academia" />
      <Article>
        {renderAst(htmlAst)}
        <Links
          prev={pageContext.prev}
          next={pageContext.next}
        >
          {pageContext.prev && (
            <NavItem
              to={pageContext.prev.frontmatter.slug}
              prev
            >
              {pageContext.prev.frontmatter.title}

              <Icon
                src={arrow}
                prev
              />
            </NavItem>
          )}
          {pageContext.next && (
            <NavItem
              to={pageContext.next.frontmatter.slug}
              next
            >
              {pageContext.next.frontmatter.title}
              <Icon
                src={arrow}
                next
              />
            </NavItem>
          )}
        </Links>
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