import React from "react"
import { StaticQuery } from "gatsby";
import styled from "styled-components";

import './layout.css';

import Menu from './Menu';

const Container = styled.nav`
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
      const list = data.allMarkdownRemark.edges.map((item) => ({
        ...item.node.frontmatter
      }));

      return (
        <Container>
          {!noMenu && (
            <Menu links={list} location={location} />
          )}
          <main>{children}</main>
        </Container>
      );
    }}
  />
);

export default Layout;