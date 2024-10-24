$(function () {
    // header - language select
    $('#langBtn').click(function () {
        url = $('#cityLang').val();
        window.open(url)
    })

    // slide visual
    $('.sc-visual .title').click(function (e) {
        e.preventDefault();
        $('.sc-visual .content').removeClass('active')
        $(this).parent().addClass('active');
        if ($(this).hasClass('citizen')) {
            //시민
            slide1.autoplay.stop();
            slide2.autoplay.start();
        } else {
            //주요뉴스
            slide2.autoplay.stop();
            slide1.autoplay.start();
        }
        if (!$(this).parent().find('.btn-autoplay').hasClass('on')) {
            $('.sc-visual .btn-autoplay').removeClass('on');
        }
    })

    const slide1 = new Swiper('.slide1', {
        autoplay: {
            delay: 1000,
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


    const slide2 = new Swiper('.slide2', {
        autoplay: {
            delay: 1000,
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
    slide2.autoplay.stop();

    //팝업존
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

    $('.btn-autoplay').click(function () {
        slideIdx = $(this).data('slide-idx');
        slideArr = [slide1, slide2, popSwiper];

        if ($(this).hasClass('on')) {
            slideArr[slideIdx].autoplay.start();
        } else {
            slideArr[slideIdx].autoplay.stop();
        }
        $(this).toggleClass('on'); //on들어감
    });


    //버튼 클릭시
    $('.site-group button').click(function () {
        if ($(this).hasClass('on')) {
            $('.section09 button').removeClass('on').siblings().stop().slideUp();
        } else {
            $('.section09 button').removeClass('on').siblings().stop().slideUp();
            $(this).toggleClass('on').siblings().stop().slideDown();
        }
    })

    $('.section09 .site_list li:first-child').keydown(function (e) {
        code = e.keyCode;
        if (code === 9 && e.shiftKey) {
            $('.section09 button').removeClass('on').siblings().stop().slideUp();
        }
    })
    $('.section09 .site_list li:last-child').keydown(function (e) {
        code = e.keyCode;
        if (code === 9 && !e.shiftKey) {
            $('.section09 button').removeClass('on').siblings().stop().slideUp();
        }
    })



    // 상단으로 버튼
    $('.btn-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
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


}) //end