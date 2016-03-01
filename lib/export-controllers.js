/**
 * Created by Administrator on 2016/3/1.
 */
const shallow = require('./all-files').shallow;
const routerFactory = require('koa-router');

module.exports = function(controllerFolder){
    const router = routerFactory();
    shallow(controllerFolder).forEach( controllerName => {
        const controller = require(`${controllerFolder}/${controllerName}`).routes();
        router.use(`/${controllerName}`, controller);
    });
    return router;
}