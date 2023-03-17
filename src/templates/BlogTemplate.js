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
        description
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

  const post = props.data.markdownRemark;
  const { title, description, image } = post.frontmatter;

  return (
    <Layout>
      <div className="blog-single container sm">

      <Helmet>
        {/* Basic meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph (OG) tags for LinkedIn */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
