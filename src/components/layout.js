import React from "react"
import { StaticQuery } from "gatsby";
import styled from "styled-components";

import './layout.css';

import Menu from './Menu';

const Container = styled.div`
  display: flex;
`;

const Layout = ({ children, location, noMenu }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___id] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                category
                title
                slug
                id
              }
            }
          }
        }
      }
    `}
    render={data => {
      const module = location.pathname.split('/')[1];

      const list = data.allMarkdownRemark.edges.filter(
        item => item.node.frontmatter.category === module
      ).map((item) => ({
        ...item.node.frontmatter
      }));

      return (
        <Container>
          {!noMenu && (
            <Menu links={list} location={location} />
          )}
          {children}
        </Container>
      );
    }}
  />
);

export default Layout;