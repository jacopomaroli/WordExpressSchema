import dateformat from 'dateformat'

export default function () {
  function maybeGetPermalink(self, permalink) {
    return permalink ? Promise.resolve(permalink) : self.getOption('permalink_structure')
  }

  function maybeFetchCategory(self, post, permalink) {
    if (permalink.indexOf('%category%') === -1)
      return Promise.resolve('')
    
    return self.getPostTerms(post.id)
      .then(cats => {
        if(cats.length) {
          const categories = cats.sort((catA, catB) => catA.term_id > catB.term_id)
          const category_object = categories[0]
          let category = category_object.slug
          return self.getTermParentsList(category_object.parent)
            .then((termParentsList) => {
              if (termParentsList.length) {
                category = termParentsList.reduce((acc, val) => acc + val.slug + '/', '') + category
              }
              return category || ''
            })
        } else {
          return self.getOption('default_category')
            .then((default_category_id) => {
              return self.getTerm(default_category_id)
            })
            .then(default_category => {
              return default_category.slug || ''
            })
        }
      })
  }

  function maybeFetchAuthor(self, post, permalink) {
    if (permalink.indexOf('%author%') === -1)
      return Promise.resolve('')
    
    return self.getUser(post.post_author)
      .then(author_data => author_data.user_nicename)
  }

  return function getPermalink(post, { leavename, permalink }){
    const self = this

    const rewritecode = [
      '%year%',
      '%monthnum%',
      '%day%',
      '%hour%',
      '%minute%',
      '%second%',
      leavename? '' : '%postname%',
      '%post_id%',
      '%category%',
      '%author%',
      leavename? '' : '%pagename%',
    ]

    if (!post.id) {
      return false
    }

    return maybeGetPermalink(self, permalink)
      .then(function(permalink) {
        const promises = [
          maybeFetchCategory(self, post, permalink),
          maybeFetchAuthor(self, post, permalink)
        ]

        return Promise.all(promises)
      })
      .then(function([category, author]) {
        let date = dateformat(post.post_date, 'yyyy mm dd HH MM ss').split(' ')

        let rewritereplace = [
          date[0],
          date[1],
          date[2],
          date[3],
          date[4],
          date[5],
          post.post_name,
          post.id,
          category,
          author,
          post.post_name
        ]

        permalink = rewritecode.reduce((acc, val, i) => acc = acc.replace(rewritecode[i], rewritereplace[i]), permalink)
        
        return self.getOption('home')
          .then(home => home + permalink)
      })
  }
}