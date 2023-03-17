import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import Layout from "../components/Layout";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        cover {
          childImageSharp {
            gatsbyImageData(width: 720)
          }
        }
      }
      html
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Blog = (props) => {
  const date = dayjs(props.data.markdownRemark.frontmatter.date).format(
    "MMMM DD, YYYY"
  );

  const post = props.data.markdownRemark;
  const { title, description, cover } = post.frontmatter;

  console.log(props.data.site);

  const coverImg = cover ? getImage(cover) : null;
  const coverSrc = cover ? getSrc(cover) : null;

  return (
    <Layout>
      <div className="blog-single container sm">

      <Helmet>
        {/* Basic meta tags */}
        <title>{title}</title>
        {coverSrc && <meta name="image" content={coverSrc} />}
        <meta name="description" content={description} />

        {/* Open Graph (OG) tags for LinkedIn */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {coverSrc && <meta property="og:image" content={coverSrc} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${props.data.site.siteMetadata.siteUrl}${location.pathname}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {coverSrc && <meta name="twitter:image" content={coverSrc} />}
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
        {coverImg && <GatsbyImage className="blog-cover" image={coverImg} alt={props.data.markdownRemark.frontmatter.title} />}
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
