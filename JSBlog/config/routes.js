const userController = require('../controllers').user;
const homeController = require('../controllers').home;
const articleController=require('../controllers').article;


module.exports = (app) =>{
    app.get('/',homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
    app.get('/user/login',userController.loginGet);
    app.post('/user/login',userController.loginPost);
    app.get('/user/logout',userController.logout);

    app.get('/article/create',articleController.createGet)
    app.post('/article/create',articleController.createPost)

    app.get('/article/details/:id',articleController.details)
    app.get('/article/detailsMyArticles/:id',articleController.detailsMyAricles)

    app.get('/article/myarticles', userController.myArticles)

    app.get('/article/edit/:id',articleController.editGet)
    app.post('/article/edit/:id',articleController.editPost)

    app.get('/article/delete/:id',articleController.deleteGet)
    app.post('/article/delete/:id',articleController.deletePost)



};
