/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import { jsx, Box } from "theme-ui";
import Layout from "../../templates/Page";
import PostHeader from "../../components/PostHeader";
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
      <Box
        sx={{
          py: ["30vh", "40vh"],
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
      >
        {entries.map(({ id, ...entry }: any, index: number) => (
          <PostHeader
            {...entry}
            highlightLevel={
              index === currentPost
                ? "high"
                : index === currentPost + 1 || index === currentPost - 1
                ? "low"
                : "off"
            }
          />
        ))}
      </Box>
    </Layout>
  );
};

export default posts;
