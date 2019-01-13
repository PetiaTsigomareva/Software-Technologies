const Article =require('../models').Article;
const User =require('../models').User;

module.exports={
  createGet:(reg,res)=>{
      res.render('article/create')
  },

  createPost:(req,res)=>{
      let articleArgs = req.body;

      let errorMsg='';
      if (!req.isAuthenticated()){
         errorMsg='You should be logged in to make article!';
      }else if(!articleArgs.title){
          errorMsg='Ivalid Title!';
      }else if(!articleArgs.content){
          errorMsg='Ivalid Content!';
      }

      if (errorMsg){

          return res.render('article/create',{
              error:errorMsg,
              title:articleArgs.title,
              content:articleArgs.content


          });
      }
      articleArgs.authorId = req.user.id;

      Article.create(articleArgs).then(article=>{
          res.redirect('/');
      }).catch(err=>{
          console.log(err.message);
          res.render('article/create',{error:err.message})
      });
  },

  details:(req,res)=>{
    let id =req.params.id;
    Article.findById(id,{include:[
            {
                model:User,
            }
        ]
    }).then(article=>{
        res.render('article/details', article.dataValues)
    });


  },

    detailsMyAricles:(req,res)=>{
        let id =req.params.id;
        Article.findById(id,{include:[
                {
                    model:User,
                }
            ]
        }).then(article=>{
            res.render('article/detailsMyArticles', article.dataValues)
        });


    },

    editGet:(req,res)=>{
      let articeID=req.params.id;
      Article
          .findById(articeID)
          .then(article=>{
              res.render('article/edit',article.dataValues)
          })
    },

    editPost:(req,res)=>{
        let articleArgs = req.body;
        let articleID=req.params.id;
        Article
            .findById(articleID)
            .then(article=>{
                article.update(articleArgs)
                    .then(()=>{
                        res.redirect('../myarticles');
                    })
            })


    },

    deleteGet:(req,res)=>{
        let articeID=req.params.id;
        Article
            .findById(articeID)
            .then(article=>{
                res.render('article/delete',article.dataValues)
            })
    },
    deletePost:(req,res)=>{

        let articleArgs = req.body;
        let articleID=req.params.id;
        Article
            .findById(articleID)
            .then(article=>{
                article.destroy(articleArgs)
                    .then(()=>{
                        res.redirect('../myarticles');
                    })
            })


    }
};
