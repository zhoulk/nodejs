/**
 * Created by leeesven on 16/11/8.
 */
//
// module.exports = {
//     'GET /' : async (ctx, next) => {
//         ctx.render('index.html', {
//             title : 'Welcome'
//         });
//     }
// };

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};