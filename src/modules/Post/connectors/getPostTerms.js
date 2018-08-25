export default function (Terms, TermRelationships, TermTaxonomy, settings) {
  const {wp_prefix} = settings.privateSettings

  return function(postId) {
    return TermRelationships.findAll({
      where: {
        object_id: postId,
      },
      include: [{
        attributes: ['name', 'slug'],
        model: Terms
      }, {
        attributes: ['taxonomy', 'parent'],
        model: TermTaxonomy
      }]
    }).then(relationships => {
      return relationships.map(r => {
        return {
          ...r.dataValues[`${wp_prefix}term`].dataValues,
          ...r.dataValues[`${wp_prefix}term_taxonomy`].dataValues
        }
      })
    })
  }
}