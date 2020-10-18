import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import dayjs from "dayjs";

import Layout from "../components/Layout";

const Newsletter = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {type: {eq: "newsletter"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            frontmatter {
              title
              date
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const renderedPosts = posts.allMarkdownRemark.edges.map((edge) => {
    const date = dayjs(edge.node.frontmatter.date).format("MMMM DD, YYYY");
    return (
      <div className="blog-item" key={edge.node.fields.slug}>
        <Link className="title" to={`/newsletter/${edge.node.fields.slug}`}>
          <h3>{edge.node.frontmatter.title}</h3>
          <h4>{edge.node.frontmatter.description}</h4>
        </Link>
        <span className="date">{date}</span>
      </div>
    );
  });

  return (
    <Layout>
      <div className="container sm">
        <h1 className="page-title">Newsletter.</h1>
        <div className="blog-items">{renderedPosts}</div>
      </div>
    </Layout>
  );
};

export default Newsletter;
