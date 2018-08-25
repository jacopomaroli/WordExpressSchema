import getPost from './getPost'
import getPosts from './getPosts'
import getPostTerms from './getPostTerms'
import getTermPosts from './getTermPosts'
import getPostLayout from './getPostLayout'
import getPermalink from './getPermalink'

export default function ({Post, Postmeta, Terms, TermRelationships, TermTaxonomy, Option}, settings) {
  return {
    getPost: getPost(Post),
    getPosts: getPosts(Post),
    getPostTerms: getPostTerms(Terms, TermRelationships, TermTaxonomy, settings),
    getTermPosts: getTermPosts(TermRelationships, Post, TermTaxonomy, settings),
    getPostLayout: getPostLayout(Postmeta),
    getPermalink: getPermalink(),
  }
}