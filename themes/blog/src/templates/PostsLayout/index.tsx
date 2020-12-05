/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Listing } from "@lefthoek/layouts";
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
    allBlogPost(sort: { fields: [order], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          order
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

const posts: FunctionComponent<PostPageProps> = ({ data }) => {
  console.log(data);
  const { allBlogPost } = data;
  const entries = allBlogPost.edges.map(({ node }: any) => ({
    ...node,
  }));
  return <Listing entries={entries} />;
};

export default posts;
