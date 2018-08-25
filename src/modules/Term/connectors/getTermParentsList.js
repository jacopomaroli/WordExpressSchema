export default function (Terms, TermTaxonomy, settings) {
  const {wp_prefix} = settings.privateSettings

  return function getTermParentsList(parentTermId, termIds) {
    termIds = termIds || []
    
    return TermTaxonomy.findOne({
      attributes: ['parent'],
      where: {
        term_taxonomy_id: parentTermId
      },
      include: [{
        attributes: ['slug', 'name'],
        model: Terms
      }]
    })
    .then(function (term_taxonomy) {
      if(term_taxonomy) {
        let res = {
          parent: term_taxonomy.parent,
          slug: term_taxonomy[`${wp_prefix}term`].slug,
          name: term_taxonomy[`${wp_prefix}term`].name
        }
        termIds = [res, ...termIds]
        return getTermParentsList(term_taxonomy.parent, termIds)
      } 
      return termIds
    })
  }
}
