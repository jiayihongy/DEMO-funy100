define(["jquery", "template"], function($, template) {

    /***************顶部bar切换*********************/
    $('.citys').on('click', 'a', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    /***************搜索栏文字切换*********************/
    $('.tabs').on('click', 'li', function() {
        $(this).addClass('acive').siblings().removeClass('acive');
        var $lis = $(this).parent().children();
        var arr = ['王保安画圈换钓鱼台七号院豪宅', '中国禁止进口洋垃圾', '西安体育学院原副院长被双开', '女大学生地铁晕倒 手机被顺走', '武汉一小学禁止女教师素颜上课']
        var index = $(this).index();
        $('.search-value').attr('placeholder', arr[index]);
    });


    /***************公共栏切换*********************/
    var checkEle = [{
            mother: '.hot-tab',
            sons: 'li',
            newCls: 'active',
            mainWrap: '.hotshop-list'
        }, {
            mother: '.traffic-tab',
            sons: 'li',
            newCls: 'active',
            mainWrap: '.tracffic-tupian'
        },
        {
            mother: '.know-tab',
            sons: 'li',
            newCls: 'active',
            mainWrap: '.know-list'
        },
        {
            mother: '.juaner-tab',
            sons: 'li',
            newCls: 'active',
            mainWrap: '.juaner-list'
        }
    ];
    checkTab(checkEle);

    function checkTab(arr) {
        $.each(arr, function(i, ele) {
            $(ele.mother).on('click', ele.sons, function() {
                $(this).addClass(ele.newCls).siblings().removeClass(ele.newCls);
                var index = $(this).index();
                $(ele.mainWrap).eq(index).css('display', 'block').siblings(ele.mainWrap).css('display', 'none');
            });
        })
    }

    /******************点击箭头滚动*********************/
    var scrollText = [{
            name: '萱萱',
            time: '5分钟前',
            text: '史上最贵iPhone发布！探秘苹果新＂飞船＂总部'
        },
        {
            name: '大壮',
            time: '10分钟前',
            text: '韩美军方高官将视察＂萨德＂基地了解系统运行情况'
        },
        {
            name: '酒桶',
            time: '30分钟前',
            text: '泰国美女运毒被查 施美人计迷惑警察险逃脱'
        },
        {
            name: '波澜哥',
            time: '4分钟前',
            text: '希拉里回忆录:自比《权游》中被游街示众的瑟曦'
        }
    ];
    $.each(scrollText, function(i, ele) {
        var lis = `
        <li>
        <a href="#">
            <strong>${ele.name}</strong>
            <span>${ele.time}</span>
            <span>${ele.text}</span>
        </a>
    </li>
        `;
        $('.scorll-ul').append(lis);
    });
});