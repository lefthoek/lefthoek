/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../../templates/Page";
import Post from "../../components/Post";

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      author
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

const PostLayout: FunctionComponent = ({ data, ...props }: any) => {
  return (
    <Layout pageData={data.blogPost} {...props}>
      <Post isFullPost {...data.blogPost} />
    </Layout>
  );
};

export default PostLayout;
