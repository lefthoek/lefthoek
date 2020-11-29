/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import { jsx } from "theme-ui";
import Layout from "../../templates/Page";
import PostListing from "../../components/PostListing";
import { graphql } from "gatsby";

type PostPageProps = {
  data: any;
  path: string;
  location: any;
  uri: string;
  pathContext: any;
  pageContext: any;
  pageResources: any;
  navigate: any;
};
export const postQuery = graphql`
  query PostsQuery {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          coverImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author
          date(formatString: "MMMM DD, YYYY")
          excerpt
          slug
          title
        }
      }
    }
  }
`;

const posts: FunctionComponent<PostPageProps> = ({ data, ...props }) => {
  const [currentPost, setCurrentPost] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      setCurrentPost(Math.floor(entries.length * scrollYProgress.get()));
    });
  }, []);
  const { allBlogPost } = data;
  const entries = allBlogPost.edges.map(({ node }: any) => ({
    ...node,
    coverImage: node.coverImage.childImageSharp.fluid,
  }));
  return (
    <Layout {...props}>
      <PostListing entries={entries} currentPost={currentPost} />
    </Layout>
  );
};

export default posts;
