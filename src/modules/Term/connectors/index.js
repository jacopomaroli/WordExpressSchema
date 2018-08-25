import getTerm from './getTerm'
import getTermParentsList from './getTermParentsList'

export default function ({Terms, TermTaxonomy}, settings) {
  return {
    getTerm: getTerm(Terms),
    getTermParentsList: getTermParentsList(Terms, TermTaxonomy, settings)
  }
}