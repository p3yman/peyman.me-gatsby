import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";

import Layout from "../components/Layout";

const Blog = () => {
  const posts = useStaticQuery(graphql`{
  allMarkdownRemark(
    filter: {fields: {type: {eq: "blog"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        html
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
}`);

  const renderedPosts = posts.allMarkdownRemark.edges.map((edge) => {
    const date = dayjs(edge.node.frontmatter.date).format("MMMM DD, YYYY");
    return (
      <div className="blog-item" key={edge.node.fields.slug}>
        <Link className="title" to={`/blog/${edge.node.fields.slug}`}>
          <h3>{edge.node.frontmatter.title}</h3>
        </Link>
        <span className="date">{date}</span>
      </div>
    );
  });

  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Peyman Eskandari Blog" />
      </Helmet>

      <div className="container sm">
        <h1 className="page-title">Blog.</h1>
        <div className="blog-items">{renderedPosts}</div>
      </div>
    </Layout>
  );
};

export default Blog;
