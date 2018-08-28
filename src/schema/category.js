import Post from './post'

const Category = `
  type Category {
    term_id: Int!
    name: String
    slug: String
    posts(post_type: String = "post", limit: Int, skip: Int, order: OrderInput, from_date: String, to_date: String): [Post]
  }
`

export default () => [Category, Post]