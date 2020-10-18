import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`;

const Blog = (props) => {
  const date = dayjs(props.data.markdownRemark.frontmatter.date).format(
    "MMMM DD, YYYY"
  );

  return (
    <Layout>
      <div className="blog-single container sm">

        <Helmet>
          <title>{props.data.markdownRemark.frontmatter.title}</title>
          <meta name="description" content={props.data.markdownRemark.frontmatter.description} />
        </Helmet>

        <header>
          <h1 className="title">
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <div className="meta">
            <div className="date">{date}</div>
            <span>{` | `}</span>
            <div className="length">
              {props.data.markdownRemark.timeToRead} min read
            </div>
          </div>
        </header>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
};

export default Blog;
