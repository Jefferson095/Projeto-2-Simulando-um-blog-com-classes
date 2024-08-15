const Comment = require('./Comment')

const Author = require('./Author')

const Post = require('./Post')


const author1 = new Author(

    'Jefferson',

)


const post1 = new Post(

    'Título do post de Jefferson ', 'Conteúdo do post e Jefferson',

    author1

)


const comment1 = new Comment(

    'Paulo', 'Que legal!'

)


const comment2 = new Comment(

    'Jonas', 'Você de novo por aqui.'

)

author1.addPost(post1)

post1.addComment(comment1)

post1.addComment(comment2)

console.log(author1)

console.log(post1)
