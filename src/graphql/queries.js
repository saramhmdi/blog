import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query {
  posts {
    author {
      name
      avatar {
        url
      }
    }
    title
    slug
    id
    coverPhoto {
      url
    }
  }
}
`

const GET_AUTHORS_INFO = gql`
query {
  authors {
    avatar {
      url
    }
    id
    name
    slug
  }
}
`
const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug : String!) {
  author(where: {slug:$slug}) {
    name
    id
    description{
      html
    }
    field
    avatar{
      url
    }
    posts{
      coverPhoto{
        url
      }
      title
      id
      slug
    }
  }
}

`

const GET_BLOG_INFO = gql`
query getBlogInfo($slug : String!) {
  post(where: {slug : $slug}) {
    title
    content {
      html
    }
    coverPhoto {
      url
    }
    slug
    datePublished
    author {
      name
      avatar{
        url
      }
      field
    }
  }
}

`
const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;



export {GET_POST_COMMENTS ,GET_BLOGS_INFO , GET_AUTHORS_INFO , GET_AUTHOR_INFO , GET_BLOG_INFO }