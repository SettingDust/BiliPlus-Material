export default (() => {
    if (typeof loginInfo !== 'undefined')
        GM_setValue('user', loginInfo);
    const user = GM_getValue('user');
    return {
        user: user || {
            isLogin: false,
            uname: '\u6e38\u5ba2',
            mid: 0,
            level: 0,
            face: 'https:\/\/static.hdslb.com\/images\/member\/noface.gif',
            expires: 0
        },
        config: {
            title: 'BiliPlus',
            isLogin: user.isLogin
        },
        api: {
            dynamic: {
                post: '/me/dynamic/page/1/%page%',
                bangumi: '/me/dynamic/page/102/%page%',
                comment: '/me/dynamic/page/101/%page%',
                blog: '/me/dynamic_new/data?offset=%offset%'
            },
            live: '/me/dynamic/page/100/',
            search: {}
        }
    };
})();