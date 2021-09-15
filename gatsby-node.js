exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___id] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              category
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges;

  const m1Content = posts.filter(
    item => item.node.frontmatter.category === 'module-1'
  );

  const m2Content = posts.filter(
    item => item.node.frontmatter.category === 'module-2'
  );

  const m3Content = posts.filter(
    item => item.node.frontmatter.category === 'module-3'
  );

  m1Content.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        category: node.frontmatter.category,
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : m1Content[index - 1].node,
        next: index === (m1Content.length - 1) ? null : m1Content[index + 1].node
      },
    })
  });

  m2Content.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        category: node.frontmatter.category,
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : m2Content[index - 1].node,
        next: index === (m2Content.length - 1) ? null : m2Content[index + 1].node
      },
    })
  });

  m3Content.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        category: node.frontmatter.category,
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : m3Content[index - 1].node,
        next: index === (m3Content.length - 1) ? null : m3Content[index + 1].node
      },
    })
  });
};