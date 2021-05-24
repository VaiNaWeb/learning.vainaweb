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
  const posts = result.data.allMarkdownRemark.edges

  const m1Content = posts.filter(
    item => item.node.frontmatter.category === "frontend-module-1"
  )

  m1Content.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        category: node.frontmatter.category,
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : m1Content[index - 1].node,
        next: index === m1Content.length - 1 ? null : m1Content[index + 1].node,
      },
    })
  })

  const backendM1Content = posts.filter(
    item => item.node.frontmatter.category === "backend-module-1"
  )

  backendM1Content.forEach(({ node }, index) => {
    console.log(node)
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        category: node.frontmatter.category,
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : backendM1Content[index - 1].node,
        next:
          index === backendM1Content.length - 1
            ? null
            : backendM1Content[index + 1].node,
        showTableOfContents: true,
      },
    })
  })
}
