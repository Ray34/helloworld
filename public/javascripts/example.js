/**
 * Created by user on 2016/8/4.
 */
$(function () {
    var router = new Router({
        container: '#container',
        enterTimeout: 50,
        leaveTimeout: 50
    });

    var board1 = {
        url: '/board1',
        className: 'b1',
        render: function(){
            return $('#b1').html();
        }
    };

    var board2 = {
        url: '/board2',
        className: 'b2',
        render: function(){
            return $('#b2').html();
        }
    };

    router.push(board1)
        .push(board2)
        .setDefault('/')
        .init();
});