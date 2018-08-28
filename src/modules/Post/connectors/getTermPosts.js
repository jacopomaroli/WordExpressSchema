import Sequelize from 'sequelize'
const Op = Sequelize.Op

export default function (TermRelationships, Post, TermTaxonomy, settings){
  const {wp_prefix} = settings.privateSettings

  return function(termId, { post_type, order, limit = 10, skip = 0, from_date, to_date }) {
    const orderBy = order ? [Post, order.orderBy, order.direction] : [Post, 'post_date', 'DESC']

    let termIds = [termId]

    function getTermIds(parentTermIds) {
      if (!parentTermIds.length) return termIds

      return TermTaxonomy.findAll({
        attributes: ['term_taxonomy_id'],
        include: [],
        where: {
          parent: parentTermIds
        }
      })
      .then(function (posts) {
        const p = posts.map(post => post.term_taxonomy_id)
        termIds.push(...p)
        return p
      })
      .then(getTermIds)
    }

    let PostWhere = {
      post_type: post_type,
      post_status: 'publish'
    }

    if (from_date) {
      PostWhere.post_date = PostWhere.post_date || {}
      PostWhere.post_date[Op.gte] = new Date(from_date)
    }

    if (to_date) {
      PostWhere.post_date = PostWhere.post_date || {}
      PostWhere.post_date[Op.lte] = new Date(to_date)
    }

    return getTermIds([termId])
      .then((termIds) => {
        return TermRelationships.findAll({
          attributes: [],
          include: [{
            model: Post,
            where: PostWhere
          }, {
            model: TermTaxonomy,
            where: {
              taxonomy: 'category'
            }
          }],
          where: {
            term_taxonomy_id: termIds
          },
          order: [orderBy],
          limit: limit,
          offset: skip
        })
      })
      .then(posts => {
        const p = posts.map(post => post[`${wp_prefix}post`])
        return p
      })
  }
}