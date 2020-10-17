const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    const folders = node.fileAbsolutePath.split('/');
    const type = folders[folders.length - 3];

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
    createNodeField({
      node,
      name: "type",
      value: type,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogTemplate = path.resolve("./src/templates/BlogTemplate.js");

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach((edge) => {
    const { type, slug } = edge.node.fields;

    const templates = {
      blog: BlogTemplate,
      newsletter: BlogTemplate,
    }

    createPage({
      component: templates[type],
      path: `/${type}/${slug}`,
      context: {
        slug,
      },
    });
  });
};
