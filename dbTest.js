// const db = require('./models')

// db.comment.create({
//   name: 'Paul Allen',
//   content: 'This is really neat! Thanks for posting.',
//   articleId: 1
// })
// .then(function(comment) {
//   console.log(comment.get())
// })

// db.article.findOne({
//     where: { id: 1 },
//     include: [db.comment]
//   }).then(function(article) {
//     // by using eager loading, the article model should have a comments key
//     console.log(article.comments)
//   })

// Here are the comments I just wrote! comment {
//   dataValues: {
//     id: 4,
//     name: 'Zachary Schmidt',
//     content: 'Bikes are dumb.',
//     updatedAt: 2020-10-30T02:41:40.606Z,
//     createdAt: 2020-10-30T02:41:40.606Z,
//     articleId: null
//   },
//   _previousDataValues: {
//     name: 'Zachary Schmidt',
//     content: 'Bikes are dumb.',
//     id: 4,
//     articleId: null,
//     createdAt: 2020-10-30T02:41:40.606Z,
//     updatedAt: 2020-10-30T02:41:40.606Z
//   },
//   _changed: Set(0) {},
//   _options: {
//     isNewRecord: true,
//     _schema: null,
//     _schemaDelimiter: '',
//     attributes: undefined,
//     include: undefined,
//     raw: undefined,
//     silent: undefined
//   },
//   isNewRecord: false
// }