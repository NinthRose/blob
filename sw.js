/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/24/tattle/2018-7-24/index.html","63cc6f7b72cbcd7ecc78c333c2fcb526"],["/2018/08/07/books/2018-8-29/index.html","a2f48e572d6de538d503b5725a5b3a85"],["/2018/09/01/books/so-slow-so-beautiful/index.html","d92051106861ebd587010a494d030f9b"],["/2018/09/02/books/→/index.html","d962df4decf4b73a1569ad74bb9f420f"],["/2018/09/05/books/to-the-monkey-and-the-frog-外婆的道歉信/index.html","b25bd2e67b2671902643aabd728b267f"],["/2018/09/06/books/NaLanRongRuo-纳兰词集/index.html","cf3f756b8ef189f32bc4f5da30017db6"],["/2018/09/21/books/So/index.html","209c0176f4941d70b00606176a3651c7"],["/2018/09/26/books/unsleep/index.html","d7b2fa4dcfeba877ebbb81b1a9ba5480"],["/2018/09/27/books/genius-left-idot-right/index.html","b06c95ce36415729a088921dc8e1801f"],["/2018/09/28/books/2018-9-28/index.html","4dae1f357f9f60854cb3000778610b49"],["/2018/10/15/books/hua-de-mimi/index.html","3cabd440d0b26562d42d3f84e5a6f791"],["/2018/10/28/books/2018-10-28/index.html","d33e6b504053da24f1d2d60c93e59990"],["/2018/11/25/books/matter/index.html","e442b6ba181653d894fd7803f2187f74"],["/2018/11/26/books/a-perfect-life/index.html","ec57ec4e248daabba5f85028c7dc5897"],["/2018/11/29/books/2018-11-29/index.html","a0157e414e0ad9d52b53d2499b9ddad4"],["/2018/12/06/books/gentle/index.html","7e0c50191bc3358166c6f24aa7ba6e97"],["/2018/12/30/books/2018-12-30/index.html","109d0ef6170b0879801f8968599a4b1c"],["/2019/02/03/books/2019-2-3/index.html","c57c656a27c2cdec0e6f8d15e408c15f"],["/2019/02/28/books/2019-2-28/index.html","a60b4fefe97b9a533cb74543b4b9d73f"],["/2019/03/31/books/2019-3-31/index.html","21c5073541ee4134bf8d76deb6fc63fe"],["/2019/05/13/books/ma-ge-li-te-town/index.html","c5067bdbfc43e8fc59170cdc6fc58add"],["/2019/05/29/books/2019-5-29/index.html","36daa5624413f2d2fa66a70767c6d116"],["/2019/06/06/books/alone/index.html","67a6f5a0f30f46edd747189cb5784426"],["/2019/07/01/books/2019-7-1/index.html","921630adb3997976d98a441e122b0766"],["/2019/07/30/books/2019-7-30/index.html","51583b861203222b61ce88935f62febf"],["/2019/08/28/books/2019-8-28/index.html","ab267fe4ad194f4ff336c8e08f62ce61"],["/2019/09/17/books/byebye/index.html","2696c813529895881c02f8ccd86c0d57"],["/2019/09/29/books/2019-9-29/index.html","a82a43618becbe137927c2125ac75004"],["/2019/10/29/books/2019-10-29/index.html","7326b32804877376b39c0bd873a32956"],["/2019/12/02/books/2019-12-2/index.html","3daa507c6a3e0f502cd1c3e5152e8cc7"],["/2020/01/01/books/2020-1-1/index.html","9a685182f5ced2ec80cab6021b3fb2b9"],["/2020/01/31/books/2020-1-31/index.html","464629040cdb6d6492c37873345178ce"],["/2020/02/29/books/2020-2-29/index.html","0727ce4102917a85463b38b9c7bd35fd"],["/2020/03/30/books/2020-3-30/index.html","da5cc466a10b2924af8e18789419a6b0"],["/2020/05/29/books/2020-5-29/index.html","00def7cb12838a0c6d44a61cac438c83"],["/2020/06/25/books/2020-6-25/index.html","c2f3d32fb3aaedbc7a2808e1cdb79ff9"],["/2020/07/26/books/2020-7-26/index.html","b8b028546fc11deede3c1df32d847065"],["/2020/09/01/books/2020-9-1/index.html","e493dc086598781c16f1e59ad6d4a638"],["/2020/09/29/books/2020-9-29/index.html","77b626f14ccbb5582c3ccfbc92b0254f"],["/2020/12/24/books/2020-12-24/index.html","71e900bafe7d2e3111e1d7ecb2aa8012"],["/2021/01/24/books/2021-1-24/index.html","9e70bbaa4ed93ca2a8eefafc1ab2de39"],["/2021/08/01/books/2021-8-1/index.html","1fde0a094d2b4ec69731a214dcdcb73d"],["/2021/10/23/tattle/2021-10-23/index.html","19b38b1ec8de0ee11fdba132c8182a05"],["/2021/11/24/tattle/2021-11-24/index.html","36316265175aeb98e6307bf25d99348d"],["/2021/12/04/tattle/2021-12-4/index.html","12dd8c21877ced1ce04f648b3944792c"],["/2022/05/23/tattle/2022-5-23/index.html","5a3a56c1d3fb8ce3f0e1fc5218fc70c0"],["/2022/07/18/tattle/2022-7-18/index.html","9be2e406ddc5ef687d0568f9b553c98c"],["/2022/08/09/tattle/mao-sha-pen/index.html","c72c0a517d1aeb8ad976b68a18097514"],["/2022/08/09/tattle/xi-wan-ji/index.html","ebb17d737bc26986fbd8c6ed935ea496"],["/2022/08/15/restaurant/MRHot‘sGrill-md/index.html","d1399631c9cbedb47ea493d75df84e3e"],["/2022/08/16/tattle/zheng-dou-fu/index.html","5bde4b272481f848469e28a9f671558d"],["/404.html","8abb61c97163cb66b026c14e165da411"],["/about/index.html","98ec2e4bc533d20f44f18a2787f1e753"],["/archives/2018/07/index.html","550e2c0f458407c3e006df96373bd1d0"],["/archives/2018/08/index.html","fdbd398584d4c374f013680a9c43e639"],["/archives/2018/09/index.html","512ab998a5722d44eb698dfbb4ec4404"],["/archives/2018/10/index.html","4a1172792cfe723197b332db6254c523"],["/archives/2018/11/index.html","26455b8e5d1473c649293657a0ef1c97"],["/archives/2018/12/index.html","b8ea5eee1bed2442ce22c4ee6ad772cb"],["/archives/2018/index.html","14c21c98d42530979d020ca1d0cfae88"],["/archives/2019/02/index.html","9a7464ce30f2d48128e84b908ab96710"],["/archives/2019/03/index.html","c9a5ae5b96d92598e765f9e46433e3c7"],["/archives/2019/05/index.html","1860892c4781c172e77b60dfd8bce722"],["/archives/2019/06/index.html","6d60b4e3e9a732c5547ad8cab4563f78"],["/archives/2019/07/index.html","33ad4a84a8c969c774909a15d688b9ed"],["/archives/2019/08/index.html","cd6097e404470fc4f5d0fb7387fb426b"],["/archives/2019/09/index.html","2d3efd88acc450a77d91fc1dbaf53a1f"],["/archives/2019/10/index.html","d8dfbae57f474653b374e3d5f4d20444"],["/archives/2019/12/index.html","463aa4f6a1f01404e90e9473555cb925"],["/archives/2019/index.html","13db8862c1c961f7db6e2ea37cb38d0a"],["/archives/2020/01/index.html","bc9bed11fc715965bfc10343e1fbc941"],["/archives/2020/02/index.html","5dbcae275181bcd36f7262df56cddacf"],["/archives/2020/03/index.html","fe9ef957fad1ac43128de55b3b00447d"],["/archives/2020/05/index.html","21cc423f9e7ce0de020241d9ab80505d"],["/archives/2020/06/index.html","4c967f108095b0a6dbc2b4359e3bda62"],["/archives/2020/07/index.html","92e1b6b1fe6d4d7d023ea71dfece36f3"],["/archives/2020/09/index.html","8f4b9abc1e4e9a3586f418b01100f8a7"],["/archives/2020/12/index.html","d986ac50f8832fbe683aef004bc525f5"],["/archives/2020/index.html","88d5b4f1e5104326af48c3da92ace5aa"],["/archives/2021/01/index.html","66fcbbedc6a00a76c0c150327bef3f89"],["/archives/2021/08/index.html","eccdf1bb0c78517acf53894ca6c33ef6"],["/archives/2021/10/index.html","dffc9037065ab77399edda24ab9ac9da"],["/archives/2021/11/index.html","337c46d9c018c9c2fa88f45c72235f6b"],["/archives/2021/12/index.html","c97bf8a78ddb9edd005095fc05385d35"],["/archives/2021/index.html","5600e908c9adb7d7689770c972aa38d9"],["/archives/2022/05/index.html","849c14ad15664174596b1dda4f787f54"],["/archives/2022/07/index.html","b9bbcc781f16d5f5d6cec34e5758be82"],["/archives/2022/08/index.html","7330ba76e397b96e40f008dcb0d691e9"],["/archives/2022/index.html","74cc441671f77dfd5107125d5694d616"],["/archives/index.html","fc046e105d80b1dfbac23e4fde1748f4"],["/archives/page/2/index.html","1ff8c38b4e0adbb8ecfb8cd93252eb60"],["/archives/page/3/index.html","8cf70d3647831e6f2453046936395d2b"],["/categories/index.html","ee0a7df98bdc126588f623f35e9f9104"],["/categories/好物推荐/index.html","1d3ce9f9929a578898bc0054c9ad7885"],["/categories/摘抄/index.html","8ed3cd9572e97bacad78f8ac702312f5"],["/categories/日常碎语/index.html","97d1d73162d8d056a9bb7c8837e8e5a5"],["/categories/美食推荐/index.html","5446d32856cb02e6b5e974406ba8eec3"],["/categories/闲言碎语/index.html","d241c302a2821dcedfaf8cc14c221ce1"],["/comment/index.html","5685df46463de3063c14baba01d0416c"],["/css/index.css","6f3a268d253335b528ed3b040c311e58"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","01c2381670c3f0805e4f0c312f0ccded"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpeg","66ad707597a9a2bbaf96de240f089847"],["/img/avatar.jpeg","70ad101546270f465d3a1b060fcddf00"],["/img/bgs/bg-1.jpeg","058f4ae7bc2557f1050760ed89bfd410"],["/img/bgs/bg-10.jpeg","b7d78923ca5410376cc54f3ae56bfabf"],["/img/bgs/bg-11.jpeg","f8d0bb8dd5492e003ec03c0895079fa5"],["/img/bgs/bg-12.jpeg","300b954cb50ac769047bdb70688845a9"],["/img/bgs/bg-13.jpeg","0fd5d1a0aaff9df32d0c5eb7a6388208"],["/img/bgs/bg-14.jpeg","bf67530e74c0537493ba042f28f2d7b5"],["/img/bgs/bg-15.jpeg","4b96d9ace955f472c1c71c1e263ac4fe"],["/img/bgs/bg-16.jpeg","ef2bfc9801ef5c2fdccf69f5668dbef6"],["/img/bgs/bg-17.jpeg","b58de11881a8abdc7cf8b547cf6ec6a6"],["/img/bgs/bg-18.jpeg","0d3fdc4498678d34a0de67f9963c096c"],["/img/bgs/bg-19.jpeg","e9783413be44c7b94c5a6bcd2583d6d1"],["/img/bgs/bg-2.jpeg","f1a557285d433798463ce87631580bc3"],["/img/bgs/bg-20.jpeg","5b8149f31fa49f0cc363f7d7b64544e3"],["/img/bgs/bg-3.jpeg","0fa09dcad84bb5923cbec7a6f0484e62"],["/img/bgs/bg-4.jpeg","b0296ed41d362b03130683710d041ca2"],["/img/bgs/bg-5.jpeg","9212554c0511159558934e76d3c247ff"],["/img/bgs/bg-6.jpeg","5a2cd4a9a42d1c8e32de058298a685aa"],["/img/bgs/bg-7.jpeg","b45c7174527518fc072e960e2e353da4"],["/img/bgs/bg-8.jpeg","a4172858d3408d00b9e6da4b19ce07b4"],["/img/bgs/bg-9.jpeg","5e948721f892bfb675901d3ad1f4e2aa"],["/img/books/app-1.jpeg","2fa25545b56cd12488265106c47b451d"],["/img/books/app-2.jpeg","aab55eab15a4369de98a0dd3877013f9"],["/img/books/app-3.jpeg","2a3146520b5aee7377fab7d73716b657"],["/img/books/app-4.jpeg","090b4cac411e6abd1d0134b9e7a7cf7c"],["/img/books/app-5.jpeg","6fc48bfef4be0efdb472115ff490354a"],["/img/books/app-6.jpeg","3bad889f915c9a938741327db377a1f4"],["/img/books/app-7.jpeg","b5a44449bbaa411f065599f52e665bb0"],["/img/books/app-8.jpeg","463fc26c519920e0f47e82b012d5d71c"],["/img/books/best-weather.jpeg","fc8b5d2a2f80600dec331404b39b7ee5"],["/img/books/cartoon.jpeg","0eedd1bc35ac62876b60d6b44bcf746d"],["/img/books/first-book.jpeg","541f7d92f2e084eeb77c496c92ea86d7"],["/img/books/first-books.jpeg","8dd081248870f07b3c755404fc5f2572"],["/img/books/first-punch-2.jpeg","3c3ec7420d4674580036e55532578a19"],["/img/books/first-punch.jpeg","f063092afd09b734930f040e2bda9e88"],["/img/books/first-year.jpeg","424b3b74baa95f251fdff77e398c9fbb"],["/img/books/god-is-a-girl.jpeg","2deba7a4d7f141de6257de091d0a66bd"],["/img/books/grandmother.jpeg","13f126d7d741bcccdf41364a68933d0a"],["/img/books/green-hard.jpeg","a72f70456e29ec2af64fcf08431b0eee"],["/img/books/love-u-love-me.jpeg","d02b42d7f331dd1389af2d569f14f286"],["/img/books/new-book.jpeg","0becba82ec3b926f3df19f67f5d5ca10"],["/img/books/one-year.jpeg","e1b4db76c9ba51ed292f8e56850e5a88"],["/img/books/picture-secret.jpeg","a8898ad7c9a437d4831f95ca2ddc94c0"],["/img/books/punch-1.jpeg","7fa1a9685a48ce7ef5bb48f6aba6fb3a"],["/img/books/sister-1.jpeg","404ef853ed0afe1427b575c75d2cb41f"],["/img/books/sister-2.jpeg","98e79a118b203d25f9c4f84dc9be632f"],["/img/books/sister-3.jpeg","e87a851ed5da4abc7769f3a07025e83c"],["/img/books/snapshot.jpeg","940ce8727ed37392153764da7aa0a46d"],["/img/books/so-childhood-wrong.jpeg","45c996dbe56cb822b79d42f15beb0e7f"],["/img/books/tai-zai-zhi.jpeg","973c187140f3b776e1e415c84f26ed7c"],["/img/books/unsleep-1.jpeg","f1c802c0826e9a889ce10265310e04e5"],["/img/books/unsleep-2.jpeg","b76da2c3123057b2ac15dcc294bf4c94"],["/img/books/unsleep-3.jpeg","8a7d307dced043b9864f73f9ad91096e"],["/img/books/unsleep-4.jpeg","5710e84cc48ec1e081e106225950ec78"],["/img/books/unsleep-5.jpeg","89be55531b60140efe525b161a2da95c"],["/img/books/unsleep-6.jpeg","3e0dd9e696d7ef4a60f8eb9639807f81"],["/img/books/unsleep-7.jpeg","c54f302822f6e2d6b2f4ba2987f71345"],["/img/books/unsleep-8.jpeg","c2705d9075f3c60a777d2ec4c9b675c7"],["/img/books/unsleep-9.jpeg","fa069868a8a67ae2ffc2c37c02e3ebe6"],["/img/books/window.jpeg","3ef852de39fdd0b45c3e7b84d179e76a"],["/img/books/zheng-dou-fu.jpeg","025c24a83375a1fa5501757ec7d30931"],["/img/cat/lick.mp4","9d38fedfd9db116eb4342521089ae1cf"],["/img/cat/shelf-0.jpeg","4025838f8f2dc2ef1ddc36a47d85f3a2"],["/img/cat/shelf.jpeg","f5950b673ea02531212adc3daee29c70"],["/img/cat/shelf.mp4","06ca17765843cbb511ba6d9eb5a1244b"],["/img/cat/sleep.mp4","5d57b3bdc4d9e25b27cf7573a4e66486"],["/img/cookie/zheng-dou-fu.jpeg","025c24a83375a1fa5501757ec7d30931"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/ps.jpeg","4e716c71826933bb3f15a23f865026f2"],["/img/pwa/README.html","8645537059d6dfdf410492ce6000615e"],["/img/pwa/android-chrome-144x144.png","ec2326283a9f06e5506a05ac0ccf6df2"],["/img/pwa/android-chrome-192x192.png","e908a1e11f9774c7d7f0bdadbe6e3062"],["/img/pwa/android-chrome-256x256.png","811b40f26c733d5a9af45b141fa44744"],["/img/pwa/android-chrome-36x36.png","726ef71fa73c833e49c04f4408224cb2"],["/img/pwa/android-chrome-384x384.png","d855ef67131f8b102e2086fcc960709a"],["/img/pwa/android-chrome-48x48.png","b379052fbaef55b8c1c6f0e0e7b7283c"],["/img/pwa/android-chrome-512x512.png","91e7b941a546a4eecee25acf2ce9bf50"],["/img/pwa/android-chrome-72x72.png","3782d7fac56df81f0e8577aac28236b0"],["/img/pwa/android-chrome-96x96.png","52ca25b3f9316b9d289b5f6ac8f154f3"],["/img/pwa/apple-touch-icon.png","ea37f5a2d17a7621b7d74e6ae02c7954"],["/img/pwa/browserconfig.xml","0c436f3d1d4ee9b27b122597a3fbc906"],["/img/pwa/favicon-16x16.png","9cad6a58e9b09be53771efe68296ef55"],["/img/pwa/favicon-32x32.png","3e07ca7a1868166115eea0607e651a93"],["/img/pwa/mstile-150x150.png","cf93ce3dd0dcd0b6bad69a0a75fe0104"],["/img/pwa/safari-pinned-tab.svg","da2a4cd0d33e6479f616636d2659dfc5"],["/img/restaurant/luxiaoge-1.jpeg","b6d52b95e295bfdad98d29e8692b0419"],["/img/restaurant/luxiaoge-2.jpeg","ec5be089c9ee1cd25a063ddea8898a4d"],["/img/restaurant/luxiaoge-3.jpeg","b9cd660b6ecbe0047dae81a8182b665d"],["/img/restaurant/luxiaoge-4.jpeg","b33db1b9ea1cfab23504aed0dc148e77"],["/img/restaurant/luxiaoge-5.jpeg","18a072099896636c496656472167c4b3"],["/img/restaurant/luxiaoge-6.jpeg","9f7873e05c95d965aaabc58835a8604c"],["/img/restaurant/luxiaoge-7.jpeg","81a449130148855fc048a6cea63de9c2"],["/img/restaurant/luxiaoge1.jpeg","ebb41b4376537d04798924ee53f168d0"],["/img/restaurant/luxiaoge2.jpeg","b0948ce9ae30c801bdb3a7cac5990fc4"],["/img/restaurant/luxiaoge3.jpeg","dae652625d911cbb61be688c3cf10c91"],["/img/restaurant/luxiaoge4.jpeg","3062a665025b13e975bce1ac67af389a"],["/img/restaurant/luxiaoge5.jpeg","a4c7ad5a37cd56aa4e34c1bd7c9ee6f0"],["/img/restaurant/luxiaoge6.jpeg","c0eeaeb622945eb6527019f406b59bba"],["/img/wechat.jpeg","8a2a88e189277aeee82eb9a9a197d731"],["/index.html","46822d6e3f90adca71532e02522cc9db"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","67d57070a81b2db49b6fbfe357e1a030"],["/page/2/index.html","ee8f78bd5b8faa30aa2faaab1595045b"],["/page/3/index.html","c826df592e32064517a8da9a3860cf3c"],["/page/4/index.html","ea505daf70c5352a3895585e198f706f"],["/page/5/index.html","6069d6d2efb91074119e6d84c8f08924"],["/page/6/index.html","f56886e9b3de7c0a975ba225b62e07b2"],["/search.xml","fd57567c98099a8081b08105d301ced1"],["/sw-register.js","4a6d6cb3cb9e8174d54fbc916f6702dd"],["/tags/books/index.html","b69ec4782325bb6284f178d67047cacb"],["/tags/books/page/2/index.html","336972c8db1c9d49a188a8321cf5058f"],["/tags/books/page/3/index.html","af63154492d34b95ed86cc4592210919"],["/tags/cat/index.html","0cd8d75aa70c9f7e4654ec7447eef390"],["/tags/cookie/index.html","0cd4e2f4799bf89eb8db8fe59fca053a"],["/tags/daily/index.html","69073ad33fc30cbc17107dfebb72fc6c"],["/tags/index.html","c97f79414980640262a69730f62cc9f5"],["/tags/ps/index.html","790153daeabc849dbe50ce89da403296"],["/tags/restaurant/index.html","f1f9c9a8462afbfd7f7134063e0244f2"],["/tags/tattle/index.html","893e8de5cfe55ff5456f28e08b1e03df"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"luckyu.com.cn"});





/* eslint-enable */
