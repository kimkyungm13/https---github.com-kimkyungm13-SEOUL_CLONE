$(function () {
    $('.slide-tit a').click(function (e) { //a 태그 클릭시
        e.preventDefault();
        $(this).addClass('on');
        $('.slide-tit a').not($(this)).removeClass('on');

        tabName = $(this).data('slide'); //#tab1,tab2...
        $(tabName).addClass('on').siblings().removeClass('on')
        const swiper = new Swiper('.mySwiper');
        swiper.update();
        const swiper2 = new Swiper('.mySwiper2');
        swiper2.update();
    })
})
$(function () {
    const swiper = new Swiper('.mySwiper', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".paging",
            type: "fraction",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    $('#slide1 .btn-pause').click(function () {
        $('#slide1 .btn-pause').css('display', 'none');
        $('#slide1 .btn-play').css('display', 'block');
        swiper.autoplay.stop();
    });
    $('#slide1 .btn-play').click(function () {
        $('#slide1 .btn-play').css('display', 'none');
        $('#slide1 .btn-pause').css('display', 'block');
        swiper.autoplay.start();
    });
});
$(function () {
    const swiper2 = new Swiper('.mySwiper2', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".paging",
            type: "fraction",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    $('#slide2 .btn-pause').click(function () {
        $('#slide2 .btn-pause').css('display', 'none');
        $('#slide2 .btn-play').css('display', 'block');
        swiper2.autoplay.stop();
    });
    $('#slide2 .btn-play').click(function () {
        $('#slide2 .btn-play').css('display', 'none');
        $('#slide2 .btn-pause').css('display', 'block');
        swiper2.autoplay.start();
    });
});
$(function () {
    var popSwiper = new Swiper(".popSwiper", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,
        pagination: {
            el: ".pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });
    $('.button-pause').click(function () {
        $('.button-pause').css('display', 'none');
        $('.button-play').css('display', 'block');
        popSwiper.autoplay.stop();
    });
    $('.button-play').click(function () {
        $('.button-play').css('display', 'none');
        $('.button-pause').css('display', 'block');
        popSwiper.autoplay.start();
    });
})
// 연관사이트
$(function () {
    //버튼 클릭시
    $('.site-group button').click(function () {
        //버튼에 .on 토글하고 형제태그(site_wrap) 에도 .on 토글
        $(this).toggleClass('on').siblings().toggleClass('on');
        // 다른 버튼에 있는 on 클래스를 제거합니다.
        $('.site-group button').not($(this)).removeClass("on");
        // 다른 .site_wrap 요소에 있는 on 클래스를 제거합니다.
        $(".site_wrap").not($(this).siblings(".site_wrap")).removeClass("on");
    })
})



// 상단으로 버튼
$(function () {
    $('.btn-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        // return false; ??
    })
    $(window).scroll(function () {
        current = $(this).scrollTop();
        target = $('.header-top').offset().top;
        if (current > target) {
            $('.btn-top').addClass('show');
        } else {
            $('.btn-top').removeClass('show');
        }
    })
})