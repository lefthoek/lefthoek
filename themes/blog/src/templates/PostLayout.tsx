/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import PageLayout from "./PageLayout";
import Post from "../components/Post";

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      order
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
      order
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      order
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

const PostLayout: FunctionComponent = ({ data }: any) => {
  return (
    <PageLayout>
      <Post {...data.blogPost} />
    </PageLayout>
  );
};

export default PostLayout;
