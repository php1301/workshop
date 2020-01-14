function browser() {
    var a = navigator.userAgent.indexOf("Chrome") > -1,
        b = navigator.userAgent.indexOf("Safari") > -1;
    a || b ? $(".nao-webkit").hide() : $(".webkit").hide()
}

function rolagem() {
    $("#fullpage").fullpage({
        menu: "#page-content .texto",
        anchors: ["home", "phucpham", "about-me", "projects", "map", "lessons", "contact"],
        verticalCentered: !1,
        controlArrows: !1,
        keyboardScrolling: !1,
        css3: !0,
        normalScrollElements: "#page-content, #project, #project .details-content",
        onLeave: function (a, b, c) {
            function d() {
                var a = window.location.href;
                "-1" != a.indexOf("#") && (a = a.replace("/", ""), hashes = a.slice(a.indexOf("#") + 3).split("/"), anchor = hashes[1]), "" != anchor && void 0 != anchor && $("." + anchor).trigger("click")
            }
            $(this);
            if ($(".modal-content").removeClass("mover"), 1 == b && (TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "100%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: -3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
            }, 500), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), countDown(), $("#page-home").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#000"
                },
                ease: Power4.easeNone
            })), 2 == b) {
                TweenMax.to($(".cloud"), 1, {
                    css: {
                        opacity: 0
                    },
                    ease: Linear.easeNone
                }), TweenMax.to($(".shape"), 1, {
                    css: {
                        opacity: 0
                    },
                    ease: Linear.easeNone
                }), setTimeout(function () {
                    $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
                }, 500), TweenMax.to($("#page-config .webkit"), 1, {
                    css: {
                        backgroundPosition: "0 -=50px"
                    },
                    delay: 1,
                    ease: Linear.easeNone
                }), countDown(), $("#page-config").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                    css: {
                        backgroundColor: "#fff"
                    },
                    ease: Power4.easeNone
                }) : TweenMax.to($("#menu a span"), .2, {
                    css: {
                        backgroundColor: "#fff"
                    },
                    ease: Power4.easeNone
                });
                var e = new TimelineMax({
                    delay: 2
                });
                e.insert(TweenMax.to($(".crayon.forward"), 1, {
                    css: {
                        right: -410
                    },
                    delay: .2,
                    ease: Power4.easeIn
                })).insert(TweenMax.to($(".crayon.torward"), .2, {
                    css: {
                        left: -410
                    },
                    delay: 1,
                    ease: Power4.easeIn
                })).insert(TweenMax.to($(".crayon.forward"), .1, {
                    css: {
                        rotation: 10
                    },
                    delay: 1.2,
                    ease: Power4.easeNone
                })).insert(TweenMax.to($(".crayon.forward"), .1, {
                    css: {
                        rotation: -10
                    },
                    delay: 1.3,
                    ease: Power4.easeNone
                })).insert(TweenMax.to($(".crayon.forward"), .1, {
                    css: {
                        rotation: 10
                    },
                    delay: 1.4,
                    ease: Power4.easeNone
                })).insert(TweenMax.to($(".crayon.forward"), .1, {
                    css: {
                        rotation: 0
                    },
                    delay: 1.5,
                    ease: Power4.easeNone
                })), setTimeout(function () {
                    var a = "img/sorriso-phucpham.gif?a=" + Math.random(),
                        b = "img/sorriso-phucpham-black.gif?a=" + Math.random();
                    $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').insertAfter("#page-config .crayon.forward"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#page-config .sorriso.cinza")
                }, 500), TweenMax.set($("#page-config h3, #page-config h2, #page-config h4, #page-config .sublinkingdo-branco1, #page-config .places, #page-config #swiper1"), {
                    css: {
                        opacity: 0,
                        y: 30
                    }
                }), TweenMax.set($("#page-config .link-the-beginning"), {
                    css: {
                        opacity: 0
                    }
                }), TweenMax.staggerTo("#page-config h3, #page-config h2, #page-config h4, #page-config .sublinkingdo-branco1, #page-config .places, #page-config #swiper1", .8, {
                    css: {
                        y: 0,
                        opacity: 1
                    },
                    delay: 1.3
                }, .1), TweenMax.to($("#page-config .link-the-beginning"), .5, {
                    css: {
                        opacity: 1
                    },
                    delay: 2.6,
                    ease: Power2.easeNone
                })
            }
            3 == b && (TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "100%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: -3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
            }, 500), setTimeout(function () {
                var a = "img/sorriso-about.gif?a=" + Math.random(),
                    b = "img/sorriso-about-black.gif?a=" + Math.random();
                $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').prependTo("#area-about-me .central"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#area-about-me .sorriso.cinza")
            }, 500), TweenMax.to($("#area-about-me .webkit"), 1, {
                css: {
                    backgroundPosition: "0 -=50px"
                },
                delay: 1.3,
                ease: Linear.easeNone
            }), setTimeout(function () {
                countUp()
            }, 1300), $("#area-about-me").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }), TweenMax.set($("#area-about-me h3, #area-about-me h2"), {
                css: {
                    opacity: 0,
                    y: 30
                }
            }), TweenMax.set($("#area-about-me .torward, #area-about-me .forward, #area-about-me .link-reel"), {
                css: {
                    opacity: 0
                }
            }), TweenMax.staggerTo("#area-about-me h3, #area-about-me h2", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1
            }, .1), TweenMax.to($("#area-about-me .torward, #area-about-me .forward, #area-about-me .link-reel"), .5, {
                css: {
                    opacity: 1
                },
                delay: 1.7,
                ease: Power2.easeNone
            })), 4 == b && (setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click()
            }, 500), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), countDown(), setTimeout(function () {
                var a = "img/sorriso-work.gif?a=" + Math.random(),
                    b = "img/sorriso-work-black.gif?a=" + Math.random();
                $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').prependTo("#area-work-hard .details-content"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#area-work-hard .sorriso.cinza")
            }, 500), TweenMax.to($("#area-work-hard .webkit"), 1, {
                css: {
                    backgroundPosition: "0 -=50px"
                },
                delay: 1.6,
                ease: Linear.easeNone
            }), $("#area-work-hard").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }), TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "0%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 0
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: 0
                },
                delay: 1,
                ease: Bounce.easeOut
            }), $("#id01").hide(), TweenMax.set($("#area-work-hard .title1 h3, #area-work-hard .title1 h2, #area-work-hard .title2 h3, #area-work-hard .title2 h2, #area-work-hard h4"), {
                css: {
                    opacity: 0,
                    y: 30
                }
            }), TweenMax.staggerTo("#area-work-hard .title1 h3, #area-work-hard .title1 h2", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1.8
            }, .1), TweenMax.staggerTo("#area-work-hard .title2 h3, #area-work-hard .title2 h2", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1.8
            }, .1), TweenMax.staggerTo("#area-work-hard h4", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 2
            }, .1), d()), 5 == b && (TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "100%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: -3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), countDown(), setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
            }, 500), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), setTimeout(function () {
                var a = "img/sorriso-map.gif?a=" + Math.random(),
                    b = "img/sorriso-map-black.gif?a=" + Math.random();
                $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').prependTo("#area-map .details-content"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#area-map .sorriso.cinza")
            }, 500), TweenMax.to($("#area-map .webkit"), 1, {
                css: {
                    backgroundPosition: "0 -=50px"
                },
                delay: 1,
                ease: Linear.easeNone
            }), $(".tanks-group > li > a").removeClass("active"), $('a[rel="Estados Unidos"]').click(), TweenMax.set($(".tanks-group li"), {
                css: {
                    opacity: 0,
                    x: -50
                }
            }), TweenMax.to(".tank-1, .tank-4, .tank-7, .tank-10, .tank-13, .tank-16, .tank-17", .8, {
                css: {
                    opacity: 1,
                    x: 0
                },
                delay: .5,
                ease: Linear.easeNone
            }, .15, function () {
                TweenMax.set($(".tanks-group li"), {
                    clearProps: "transform"
                })
            }), TweenMax.to(".tank-2, .tank-5, .tank-8, .tank-11, .tank-14, .tank-18", .8, {
                css: {
                    opacity: 1,
                    x: 0
                },
                delay: .6,
                ease: Linear.easeNone
            }, .15, function () {
                TweenMax.set($(".tanks-group li"), {
                    clearProps: "transform"
                })
            }), TweenMax.to(".tank-3, .tank-6, .tank-9, .tank-12, .tank-15, .tank-19", .8, {
                css: {
                    opacity: 1,
                    x: 0
                },
                delay: .7,
                ease: Linear.easeNone
            }, .15, function () {
                TweenMax.set($(".tanks-group li"), {
                    clearProps: "transform"
                })
            }), $("#area-map").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }), TweenMax.set($("#area-map h3, #area-map h2, #area-map h4"), {
                css: {
                    opacity: 0,
                    y: 30
                }
            }), TweenMax.set($("#area-map .actions"), {
                css: {
                    opacity: 0
                }
            }), TweenMax.staggerTo("#area-map h3, #area-map h2, #area-map h4", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1.3
            }, .1), TweenMax.to($("#area-map .actions"), .5, {
                css: {
                    opacity: 1
                },
                delay: 2,
                ease: Power2.easeNone
            })), 6 == b && (TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "100%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: -3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
            }, 500), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), setTimeout(function () {
                var a = "img/sorriso-life.gif?a=" + Math.random(),
                    b = "img/sorriso-life-black.gif?a=" + Math.random();
                $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').prependTo("#area-lessons .details-content"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#area-lessons .sorriso.cinza")
            }, 500), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 1
                },
                ease: Linear.easeNone
            }), countDown(), TweenMax.to($("#area-lessons .webkit"), 1, {
                css: {
                    backgroundPosition: "0 -=50px"
                },
                delay: 1,
                ease: Linear.easeNone
            }), $("#area-lessons").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }), TweenMax.set($("#area-lessons h2:nth-of-type(1), #area-lessons h3, #area-lessons h3 + h2, #area-lessons #swiper3"), {
                css: {
                    opacity: 0,
                    y: 30
                }
            }), TweenMax.staggerTo("#area-lessons h2:nth-of-type(1), #area-lessons h3, #area-lessons h3 + h2, #area-lessons #swiper3", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1.3
            }, .1)), 7 == b && (TweenMax.to($("#swiper2"), .5, {
                css: {
                    x: "100%"
                },
                delay: .5,
                ease: Power4.easeNone
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: -3
                },
                delay: 1,
                ease: Bounce.easeOut
            }), setTimeout(function () {
                var a = new TimelineMax({
                    delay: .5
                });
                a.insert(TweenMax.set($(".crayon.forward"), {
                    clearProps: "all"
                })).insert(TweenMax.set($(".crayon.torward"), {
                    clearProps: "all"
                })), $("section:not(#page-home) .sorriso").remove(), $("section:not(#page-home) .assinatura").remove(), $("#area-about-me .item").removeClass("ativo"), $("#swiper1 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#swiper2 .swiper-pagination-bullet:nth-of-type(1)").click(), $("#id01").hide()
            }, 500), TweenMax.to($(".cloud"), 1, {
                css: {
                    opacity: 0
                },
                ease: Linear.easeNone
            }), setTimeout(function () {
                var a = "img/sorriso-contact.gif?a=" + Math.random(),
                    b = "img/sorriso-contact-black.gif?a=" + Math.random();
                $('<img src="' + a + '" alt="Sorriso" class="sorriso cinza">').prependTo("#area-contact .details-content"), $('<img src="' + b + '" alt="Sorriso" class="sorriso magenta">').insertAfter("#area-contact .sorriso.cinza");
                var c = "img/signature.gif?a=" + Math.random(),
                    d = "img/signature.gif?a=" + Math.random();
                $('<img src="' + c + '" alt="Assinatura Phuc Pham config" class="assinatura cinza">').insertAfter("#area-contact span"), $('<img src="' + d + '" alt="Assinatura Phuc Pham config" class="assinatura magenta">').insertAfter("#area-contact .assinatura.cinza"), TweenMax.set($("#area-contact .assinatura"), {
                    css: {
                        opacity: 0,
                        y: 30
                    }
                }), TweenMax.staggerTo("#area-contact .assinatura", .8, {
                    css: {
                        y: 0,
                        opacity: 1
                    },
                    delay: 1.3
                }, .1)
            }, 500), TweenMax.to($("#area-contact .webkit"), 1, {
                css: {
                    backgroundPosition: "0 -=50px"
                },
                delay: 1,
                ease: Linear.easeNone
            }), countDown(), $("#area-contact").hasClass("magenta") ? TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }) : TweenMax.to($("#menu a span"), .2, {
                css: {
                    backgroundColor: "#fff"
                },
                ease: Power4.easeNone
            }), TweenMax.to($(".shape"), 1, {
                css: {
                    opacity: 1
                },
                ease: Linear.easeNone
            }), TweenMax.set($("#area-contact .email h3, #area-contact .email h2, #area-contact .sublinkingdo, #area-contact .cv h2, #area-contact .cv h3, #area-contact h4, #area-contact span, #area-contact .assinatura"), {
                css: {
                    opacity: 0,
                    y: 30
                }
            }), TweenMax.staggerTo("#area-contact .email h3, #area-contact .email h2, #area-contact .sublinkingdo, #area-contact .cv h2, #area-contact .cv h3, #area-contact h4, #area-contact span, #area-contact .assinatura", .8, {
                css: {
                    y: 0,
                    opacity: 1
                },
                delay: 1.3
            }, .1))
        }
    }), $(window).keydown(function (a) {
        switch (a.keyCode, a.which) {
            case 38:
                $.fn.fullpage.moveSectionUp();
                break;
            case 40:
                $.fn.fullpage.moveSectionDown()
        }
    })
}

function countUp() {
    setTimeout(function () {
        $(".number-years").countTo({
            to: 19,
            speed: 1e3
        }), $(".number-clients").countTo({
            to: 69,
            speed: 1e3
        }), $(".number-awards").countTo({
            to: 21,
            speed: 1e3
        }), $(".number-markers").countTo({
            to: 96,
            speed: 1e3
        })
    }, 500)
}

function countDown() {
    setTimeout(function () {
        $(".number-years").countTo({
            to: 0
        }), $(".number-clients").countTo({
            to: 0
        }), $(".number-awards").countTo({
            to: 0
        }), $(".number-markers").countTo({
            to: 0
        })
    }, 500)
}

function mouse() {
    $(".desenho").on("mousedown", function () {
        $(this).addClass("mouse-ativo")
    }), $(".desenho").on("mouseup", function () {
        $(this).removeClass("mouse-ativo")
    }), $(".bracos").on("mouseover", function () {
        $(".desenho").removeClass("mouse-ativo")
    })
}

function desenho() {
    $(".desenho").sketch()
}

function config() {
    $("#page-home .desenho").plaxify({
        xRange: 20,
        yRange: 20
    }), $("#page-home .config").plaxify({
        xRange: 20,
        yRange: 20
    }), $("#page-home .sorriso").plaxify({
        xRange: 60,
        yRange: 60
    }), $("#page-home .bracos").plaxify({
        xRange: 60,
        yRange: 60
    }), $("#page-home .place").plaxify({
        xRange: 60,
        yRange: 60
    }), $.plax.enable({
        activityTarget: $("#page-home .desenho, #page-home .bracos, #page-home .sorriso, #page-home .place")
    });
    var a = $(".bt-page-content");
    a.click(function () {
        var a = $(this);
        a, printAndUpload(function () {
            a.removeClass("active"), a.html("SHARE ME")
        })
    });
    var b = $(".share-button");
    b.click(function () {
        $(".share-button .creating"), printAndUpload(function () {
            $(".share-button .creating").html("Share your art"), b.removeClass("active")
        })
    })
}

function printAndUpload(a) {
    html2canvas($("#photo"), {
        onrendered: function (b) {
            var c = {
                image: b.toDataURL("image/png")
            };
            var w = window.open('about:blank', 'image from canvas');
            w.document.write("<img src='" + c.image + "' alt='from canvas'/>");
        }
    })
}

function animation() {
    var a = new TimelineMax({
        repeat: -1,
        repeatDelay: 0
    });
    a.add(TweenMax.to($(".mouse-roll"), .5, {
        css: {
            opacity: 1,
            scaleY: 1
        },
        ease: Linear.easeNone
    })).add(TweenMax.to($(".mouse-roll"), .5, {
        css: {
            y: "23px",
            scaleY: 1
        },
        ease: Linear.easeNone
    })).add(TweenMax.to($(".mouse-roll"), .5, {
        css: {
            opacity: 0,
            scaleY: .5
        },
        ease: Linear.easeNone
    }));
    var b = new TimelineMax({
        repeat: -1,
        repeatDelay: 0
    });
    b.add(TweenMax.to($(".home-sorriso1"), .1, {
        css: {
            opacity: 1
        },
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso1"), .1, {
        css: {
            opacity: 0
        },
        delay: 2,
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso2"), .1, {
        css: {
            opacity: 1
        },
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso2"), .1, {
        css: {
            opacity: 0
        },
        delay: 2,
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso3"), .1, {
        css: {
            opacity: 1
        },
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso3"), .1, {
        css: {
            opacity: 0
        },
        delay: 2,
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso4"), .1, {
        css: {
            opacity: 1
        },
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso4"), .1, {
        css: {
            opacity: 0
        },
        delay: 2,
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso5"), .1, {
        css: {
            opacity: 1
        },
        ease: Power4.easeOut
    })), b.add(TweenMax.to($(".home-sorriso5"), .1, {
        css: {
            opacity: 0
        },
        delay: 2,
        ease: Power4.easeOut
    })), $(window).on("resize", function () {
        b.play(0)
    })
}

function links() {
    $("a").on("click", function (a) {
        "#" == $(this).attr("href") && a.preventDefault()
    }), $("#menu a").on("mouseover", function () {
        $(this).hasClass("abrir") ? (TweenMax.to($("#menu a span:nth-child(1)"), .2, {
            css: {
                rotation: -55
            },
            ease: Power4.easeNone
        }), TweenMax.to($("#menu a span:nth-child(3)"), .2, {
            css: {
                rotation: 55
            },
            ease: Power4.easeNone
        })) : (TweenMax.to($("#menu a span:nth-child(1)"), .2, {
            css: {
                y: -2
            },
            ease: Power4.easeNone
        }), TweenMax.to($("#menu a span:nth-child(3)"), .2, {
            css: {
                y: 2
            },
            ease: Power4.easeNone
        }))
    }), $("#menu a").on("mouseleave", function () {
        $(this).hasClass("abrir") ? (TweenMax.to($("#menu a span:nth-child(1)"), .2, {
            css: {
                rotation: -45
            },
            ease: Power4.easeNone
        }), TweenMax.to($("#menu a span:nth-child(3)"), .2, {
            css: {
                rotation: 45
            },
            ease: Power4.easeNone
        })) : (TweenMax.to($("#menu a span:nth-child(1)"), .2, {
            css: {
                y: 0
            },
            ease: Power4.easeNone
        }), TweenMax.to($("#menu a span:nth-child(3)"), .2, {
            css: {
                y: 0
            },
            ease: Power4.easeNone
        }))
    }), $("#menu a").on("click", function () {
        if ($(this).toggleClass("abrir"), $(this).hasClass("abrir")) {
            $("#page-content").show(), $("#menu a span").addClass("magenta");
            var a = new TimelineMax;
            a.insert(TweenMax.to($("#page-content"), 1, {
                css: {
                    opacity: 1,
                    y: 0
                },
                ease: Power4.easeOut
            })).insert(TweenMax.to($("#page-content"), .3, {
                css: {
                    borderRadius: 0
                },
                delay: .2,
                ease: Power4.easeOut
            })).insert(TweenMax.to($("#page-content .details-content"), .5, {
                css: {
                    opacity: 1
                },
                delay: 1,
                ease: Linear.easeNone
            })).insert(TweenMax.to($("#menu a"), .5, {
                css: {
                    rotation: 90
                },
                ease: Power4.easeNone
            }), -.5).insert(TweenMax.to($("#menu a span:nth-child(1)"), .2, {
                css: {
                    rotation: -45,
                    y: 10
                },
                ease: Power4.easeNone
            }, -.5)).insert(TweenMax.to($("#menu a span:nth-child(2)"), .2, {
                css: {
                    opacity: 0
                },
                ease: Power4.easeNone
            }, -.5)).insert(TweenMax.to($("#menu a span:nth-child(3)"), .2, {
                css: {
                    rotation: 45,
                    y: -10
                },
                ease: Power4.easeNone
            }, -.5))
        } else {
            $("#menu a span").removeClass("magenta");
            var b = new TimelineMax;
            b.insert(TweenMax.to($("#menu a"), .5, {
                css: {
                    rotation: 0
                },
                ease: Power4.easeNone
            })).insert(TweenMax.to($("#page-content, #page-content .details-content"), .5, {
                css: {
                    opacity: 0
                },
                ease: Power4.easeOut
            }, -.5)).insert(TweenMax.to($("#menu a span:nth-child(1)"), .2, {
                css: {
                    rotation: 0,
                    y: 0
                },
                ease: Power4.easeNone
            }, -.5)).insert(TweenMax.to($("#menu a span:nth-child(2)"), .2, {
                css: {
                    opacity: 1
                },
                ease: Power4.easeNone
            }, -.5)).insert(TweenMax.to($("#menu a span:nth-child(3)"), .2, {
                css: {
                    rotation: 0,
                    y: 0
                },
                ease: Power4.easeNone
            }, -.5)), setTimeout(function () {
                $("#page-content").hide(), TweenMax.set($("#page-content"), {
                    clearProps: "all"
                }), $.fn.fullpage.setMouseWheelScrolling(!0)
            }, 500)
        }
    }), $("#page-content .magenta").on("mouseover", function () {
        TweenMax.to($(this), .2, {
            css: {},
            ease: Power4.easeNone
        })
    }), $("#page-content .magenta, .nice").on("click", function () {
        $("#menu a").click()
    }), $("#interruptor").on("click", function () {
        $("#switch").get(0).play(), $(this).hasClass("magenta") ? ($("section").removeClass("cinza").addClass("magenta"), $("#photo").removeClass("cinza").addClass("magenta"), $(this).removeClass("magenta").addClass("cinza"), TweenMax.to($("#menu a span"), .2, {
            css: {
                backgroundColor: "#fff"
            },
            ease: Power4.easeNone
        })) : ($("section").removeClass("magenta").addClass("cinza"), $("#photo").removeClass("magenta").addClass("cinza"), $(this).removeClass("cinza").addClass("magenta"), "#home" != window.location.hash ? TweenMax.to($("#menu a span"), .2, {
            css: {
                backgroundColor: "#fff"
            },
            ease: Power4.easeNone
        }) : TweenMax.to($("#menu a span"), .2, {
            css: {
                backgroundColor: "#000"
            },
            ease: Power4.easeNone
        }))
    }), $(".item").on("click", function (a) {
        var b = a.target;
        $(this).hasClass("ativo") ? $(b).hasClass("check") && $(this).removeClass("ativo") : $(this).addClass("ativo")
    }), $("#area-contact .email, #area-contact .cv").on("mouseover", function () {
        TweenMax.to($(this).find("h2"), 1.5, {
            css: {
                backgroundPosition: "0 -=50px"
            },
            repeat: -1,
            repeatDelay: 0,
            ease: Linear.easeNone
        })
    }), $("#area-contact .email, #area-contact .cv").on("mouseleave", function () {
        TweenMax.killTweensOf($(this).find("h2"))
    })
}

function carousel() {
    var a = (new Swiper("#swiper1", {
        loop: !0,
        autoplay: 0,
        autoplayDisableOnInteraction: !1,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: "#swiper1 .swiper-pagination",
        paginationClickable: !0
    }), new Swiper("#swiper2", {
        loop: !1,
        autoplay: 0,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: "#swiper2 .swiper-pagination",
        paginationClickable: !0,
        onTransitionStart: function (a) {
            TweenMax.set($(".swiper-slide .gallery:nth-child(odd)"), {
                css: {
                    rotation: 3
                }
            }), TweenMax.set($(".swiper-slide .gallery:nth-child(even)"), {
                css: {
                    rotation: -3
                }
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(odd)"), .7, {
                css: {
                    rotation: 0
                },
                delay: .2,
                ease: Bounce.easeOut
            }), TweenMax.to($(".swiper-slide .gallery:nth-child(even)"), .7, {
                css: {
                    rotation: 0
                },
                delay: .2,
                ease: Bounce.easeOut
            })
        }
    }), new Swiper("#swiper3", {
        observer: !0,
        loop: !0,
        autoplay: 5e3,
        autoplayDisableOnInteraction: !1,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: "#swiper3 .swiper-pagination",
        paginationClickable: !0,
        paginationBulletRender: function (a, b) {
            return '<span class="' + b + '">' + (a + 1) + "</span>"
        }
    }));
    $(window).on("hashchange", function () {
        "#lessons" == window.location.hash && ($("#swiper3 .swiper-pagination-bullet:nth-of-type(1)").click(), a.startAutoplay())
    })
}

function video() {
    $(".link-public").mouseover(function () {
        TweenMax.to($(".link-public .icon-circle"), .5, {
            css: {
                opacity: 0
            },
            ease: Power2.easeOut
        }), TweenMax.to($(".link-public .icon-play"), .5, {
            css: {
                scale: 1.5
            },
            ease: Bounce.easeOut
        })
    }), $(".link-public").mouseleave(function () {
        TweenMax.to($(".link-public .icon-circle"), .5, {
            css: {
                opacity: 1
            },
            ease: Power2.easeOut
        }), TweenMax.to($(".link-public .icon-play"), .5, {
            css: {
                scale: 1
            },
            ease: Bounce.easeOut
        })
    }), $(".link-sexy").mouseover(function () {
        TweenMax.to($(".link-sexy .icon-circle"), .5, {
            css: {
                opacity: 0
            },
            ease: Power2.easeOut
        }), TweenMax.to($(".link-sexy .icon-lock"), .5, {
            css: {
                scale: 1.5
            },
            ease: Bounce.easeOut
        })
    }), $(".link-sexy").mouseleave(function () {
        TweenMax.to($(".link-sexy .icon-circle"), .5, {
            css: {
                opacity: 1
            },
            ease: Power2.easeOut
        }), TweenMax.to($(".link-sexy .icon-lock"), .5, {
            css: {
                scale: 1
            },
            ease: Bounce.easeOut
        })
    }), $(".link-reel").fancybox({
        width: "100%",
        height: "100%",
        autoSize: !1,
        autoCenter: !0,
        padding: 0,
        margin: 0,
        tpl: {
            closeBtn: '<a href="#" class="fechar"><span></span><span></span></a>'
        },
        afterShow: function () {
            $(".fancybox-overlay .fechar").on("mouseover", function () {
                TweenMax.to($(".fancybox-overlay .fechar span:nth-child(1)"), .2, {
                    css: {
                        rotation: 35
                    },
                    ease: Power4.easeNone
                }), TweenMax.to($(".fancybox-overlay .fechar span:nth-child(2)"), .2, {
                    css: {
                        rotation: -35
                    },
                    ease: Power4.easeNone
                })
            }), $(".fancybox-overlay .fechar").on("mouseleave", function () {
                TweenMax.to($(".fancybox-overlay .fechar span:nth-child(1)"), .2, {
                    css: {
                        rotation: 45
                    },
                    ease: Power4.easeNone
                }), TweenMax.to($(".fancybox-overlay .fechar span:nth-child(2)"), .2, {
                    css: {
                        rotation: -45
                    },
                    ease: Power4.easeNone
                })
            })
        }
    })
}

function beginning() {

}
function modal() {
    function a() {
        $("#project").load(project, function() {
            function a(a) {
                a.mcs.top <= -484 && $(".carro-layer").addClass("ligado")
            }
            $("#project .details-content").mCustomScrollbar({
                theme: "dark",
                callbacks: {
                    onScroll: function() {
                        a(this)
                    }
                }
            }), anchor = $("#project .details-content").attr("data-anchor"), window.location.hash = "projects/" + anchor, $("#project video[autoplay]").each(function(a) {
                $(this).trigger("play")
            }), $("#project").show(), TweenMax.to($("#project"), 1, {
                css: {
                    opacity: 1,
                    y: 0
                },
                ease: Power4.easeOut
            }), TweenMax.to($("#project"), .3, {
                css: {
                    borderRadius: 0
                },
                delay: .2,
                ease: Power4.easeOut
            }), TweenMax.to($("#project .loading"), .5, {
                opacity: 0,
                delay: 1,
                ease: Linear.easeNone
            }), TweenMax.to($("#project .details-content, #project .fechar"), .5, {
                opacity: 1,
                delay: 1.5,
                ease: Linear.easeNone
            }), $(".fechar").on("click", function(a) {
                a.preventDefault(), TweenMax.to($("#project"), .5, {
                    css: {
                        opacity: 0
                    },
                    ease: Power4.easeOut
                }), setTimeout(function() {
                    $("#project").empty(), $("#project").hide(), TweenMax.set($("#project"), {
                        clearProps: "all"
                    }), $.fn.fullpage.setMouseWheelScrolling(!0)
                }, 500), window.location.hash = "projects"
            }), $(".subir").on("click", function(a) {
                a.preventDefault(), $("#project .details-content").mCustomScrollbar("scrollTo", "top", {
                    timeout: 100
                }, {
                    scrollEasing: "linear"
                })
            }), $("#project .fechar").on("mouseover", function() {
                TweenMax.to($("#project .fechar span:nth-child(1)"), .2, {
                    css: {
                        rotation: 35
                    },
                    ease: Power4.easeNone
                }), TweenMax.to($("#project .fechar span:nth-child(2)"), .2, {
                    css: {
                        rotation: -35
                    },
                    ease: Power4.easeNone
                })
            }), $("#project .fechar").on("mouseleave", function() {
                TweenMax.to($("#project .fechar span:nth-child(1)"), .2, {
                    css: {
                        rotation: 45
                    },
                    ease: Power4.easeNone
                }), TweenMax.to($("#project .fechar span:nth-child(2)"), .2, {
                    css: {
                        rotation: -45
                    },
                    ease: Power4.easeNone
                })
            });
            new Swiper("#swipergallery", {
                loop: !0,
                autoplay: 0,
                autoplayDisableOnInteraction: !1,
                slidesPerView: 1,
                spaceBetween: 50,
                pagination: "#swipergallery .swiper-pagination",
                paginationClickable: !0
            })
        })
    }
    $("#area-work-hard .gallery").on("click", function(b) {
        console.log("ok")
        b.preventDefault(), $(".modal-content").removeClass("mover"), project = $(this).attr("href"), 
        a()
    })
    
}

function tank() {
    var a, b, c = 1500,
        d = 400,
        e = 400,
        f = 1200,
        g = $(window),
        h = "active",
        i = "one-column",
        j = !0,
        k = !0,
        l = !0,
        m = !0,
        n = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        o = navigator.msPointerEnabled && /MSIE 10.*Touch/.test(navigator.userAgent),
        p = n && o ? "MSPointerDown" : "click";
    $("#map").each(function () {
        function q(a) {
            t.stop().animate({
                opacity: 0
            }, {
                duration: e,
                complete: function () {
                    x.hide();
                    var b = 0;
                    x.each(function () {
                        var c = $(this);
                        a.attr("data-flag") == c.attr("rel") && (c.show(), b++)
                    }), b > 5 ? t.removeClass(i) : t.addClass(i), w.find("h3").remove();
                    var c = $('<h3 class="' + a.attr("data-flag") + '">' + a.attr("rel") + "</h3>");
                    c.appendTo(w), t.stop().animate({
                        opacity: 1
                    }, {
                        duration: e
                    })
                }
            })
        }

        function r(a) {
            t.stop().animate({
                opacity: 0
            }, {
                duration: e,
                complete: function () {
                    void 0 !== a.attr("rel") && (x.each(function () {
                        var b = $(this);
                        b.attr("rel").indexOf(a.data("flag")) != -1 && b.hide()
                    }), w.find("h3").remove())
                }
            })
        }
        var s = $(this),
            t = s.find(".content"),
            u = s.find(".tanks-group"),
            v = u.children(),
            w = s.find(".content .heading-block"),
            x = s.find(".map-list li").hide(),
            y = s.find(".btn-left span"),
            z = s.find(".btn-right span");
        btnFire = s.find(".btn-space span"), u.each(function () {
            function e(a, b) {
                var c = parseInt(a.attr("data-deg"), 10);
                b ? document.onkeydown = function (a) {
                    a.keyCode
                } : document.onkeydown = function (b) {
                    var d = b.keyCode;
                    return 37 == d ? (c <= 180 && c >= 0 && (c-- , c > 180 ? c = 180 : c < 0 && (c = 0)), A(c, a), !1) : 39 == d ? (c <= 180 && c >= 0 && (c++ , c > 180 ? c = 180 : c < 0 && (c = 0)), A(c, a), !1) : 32 == d ? (l && x(), !1) : void 0
                }
            }

            function i(a, b) {
                a <= 180 && a >= 0 && (n || o ? a -= 5 : a-- , a > 180 ? a = 180 : a < 0 && (a = 0)), A(a, b)
            }

            function w(a, b) {
                a <= 180 && a >= 0 && (n || o ? a += 5 : a++ , a > 180 ? a = 180 : a < 0 && (a = 0)), A(a, b)
            }

            function x() {
                if (C.filter("." + h).length) {
                    l = !1;
                    var a = v.eq(b).children(),
                        e = a.find(".bullet"),
                        i = Math.round(parseInt(a.attr("data-deg"), 10)),
                        k = 0,
                        m = 0;
                    i > 90 ? (i -= 180, k = Math.round(g.width() - e.width() / 2), m = k * Math.tan(i * (Math.PI / 180))) : 90 == i ? (k = 0, m = -e.offset().top) : (k = Math.round(g.width() - e.width() / 2) * -1, m = k * Math.tan(i * (Math.PI / 180)));
                    var n = $('<div class="bullet">');
                    n.appendTo(a),
                        E && (E.setSrc(s.find(".piu").attr("rel")), E.play()), n.show().animate({
                            top: m,
                            left: k
                        }, {
                            duration: c,
                            step: function () {
                                var a = C.filter(function () {
                                    return $(this).offset().left < n.offset().left && $(this).offset().left + $(this).width() > n.offset().left && $(this).offset().top < n.offset().top && $(this).offset().top + $(this).height() > n.offset().top
                                }).eq(0);
                                if (a.length) {
                                    var b = a.find(".tank-holder").css({
                                        opacity: 0
                                    }),
                                        c = a.find(".fire");
                                    j = !1, E && (E.stop(), E.setSrc(s.find(".boom").attr("rel")), E.play()), a.addClass("boom"), n.remove(), setTimeout(function () {
                                        c.stop().animate({
                                            opacity: 0
                                        }, {
                                            duration: d,
                                            complete: function () {
                                                b.stop().animate({
                                                    opacity: 1
                                                }, {
                                                    duration: d,
                                                    complete: function () {
                                                        a.removeClass("boom"), c.css({
                                                            opacity: 1
                                                        }), l = !0, j = !0, E && E.stop()
                                                    }
                                                })
                                            }
                                        })
                                    }, f)
                                } else l = !1
                            },
                            complete: function () {
                                n.remove(), j && (l = !0)
                            }
                        })
                }
            }

            function A(a, b) {
                b.attr("data-deg", a), b.find(".short").css({
                    "-moz-transform": "rotate(" + a + "deg)",
                    "-webkit-transform": "rotate(" + a + "deg)",
                    "-o-transform": "rotate(" + a + "deg)",
                    "-ms-transform": "rotate(" + a + "deg)",
                    transform: "rotate(" + a + "deg)"
                })
            }
            var B = $(this).css({
                left: 0
            }),
                C = B.find("a"),
                D = C.filter("." + h);
            C.each(function (a) {
                var c = $(this),
                    d = c.attr("data-deg");
                c.hasClass(h) && (b = a), c.bind("click", function (d) {
                    d.preventDefault(), c.hasClass(h) ? (C.removeClass(h), c.removeClass(h), r(c)) : (C.removeClass(h), c.addClass(h), q(c), b = a, e(c))
                }), A(d, c)
            }), g.on("load hashchange", function () {
                var b = C.filter("." + h);
                clearTimeout(a), a = setTimeout(function () {
                    "#map" == window.location.hash ? (k = !1, t.css({
                        opacity: 0
                    }), u.stop(!0, !0).animate({
                        left: 0
                    }, {
                        duration: 2e3,
                        complete: function () {
                            k = !0, q(C.filter("." + h))
                        }
                    }), m = !1, e(b, m)) : (m = !0, e(b, m), u.css({
                        left: 0
                    }), t.css({
                        opacity: 0
                    }))
                }, 100)
            }), y.on(p, function (a) {
                a.preventDefault(), D = C.filter("." + h), counter = parseInt(D.attr("data-deg"), 10), i(counter, D)
            }), z.on(p, function (a) {
                a.preventDefault(), D = C.filter("." + h), counter = parseInt(D.attr("data-deg"), 10), w(counter, D)
            }), btnFire.on(p, function (a) {
                return a.preventDefault(), l && x(), !1
            });
            var E = null;
            new MediaElement("audio-player1", {
                enablePluginDebug: !1,
                pluginPath: window.pathInfo ? pathInfo.base + pathInfo.js : "build/",
                flashName: "flashmediaelement.swf",
                enableKeyboard: !1,
                silverlightName: "silverlightmediaelement.xap",
                type: "",
                defaultVideoWidth: 480,
                defaultVideoHeight: 270,
                pluginWidth: -1,
                pluginHeight: -1,
                timerRate: 250,
                success: function (a, b) {
                    E = a, $(".piu, .boom").on("click", function (b) {
                        b.preventDefault(), $(this).attr("rel") && (a.setSrc($(this).attr("rel")), a.play())
                    })
                },
                error: function () { }
            })
        })
    })

}

function responsive() {
    $(".suggestion").on("click", function () { }), $(window).width() >= 1024 ? $("#responsive").hide() : $("#responsive").css("display", "table"), $(window).on("resize", function () {
        $("#qLtempOverlay").hide(), $(window).width() >= 1024 ? $("#responsive").hide() : $("#responsive").css("display", "table")
    })
}

function mobile() {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($("#mobile").css("display", "block"), $("#responsive, #fullpage, #menu").hide()) : $("#mobile, #qLtempOverlay, #overlay").hide()
}

function clouds() {
    TweenMax.to($(".cloud5"), 10, {
        css: {
            right: "100%"
        },
        delay: 2,
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".cloud4"), 15, {
        css: {
            right: "100%"
        },
        delay: 15,
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".cloud3"), 20, {
        css: {
            right: "100%"
        },
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".cloud2"), 30, {
        css: {
            right: "100%"
        },
        delay: 7,
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".cloud1"), 35, {
        css: {
            right: "100%"
        },
        delay: 10,
        ease: Linear.easeNone,
        repeat: -1
    })
}

function shape() {
    TweenMax.to($(".shape4"), 15, {
        css: {
            bottom: "100%"
        },
        delay: 15,
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".shape3"), 20, {
        css: {
            bottom: "100%"
        },
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".shape2"), 30, {
        css: {
            bottom: "100%"
        },
        delay: 7,
        ease: Linear.easeNone,
        repeat: -1
    }), TweenMax.to($(".shape1"), 35, {
        css: {
            bottom: "100%"
        },
        delay: 10,
        ease: Linear.easeNone,
        repeat: -1
    })
}
$(document).ready(function () {
    browser(), carousel(), rolagem(), mouse(), desenho(), animation(), links(), beginning(), video(), modal(), tank(), responsive(), mobile(), clouds(), shape()
}), $(window).load(function () {
    config()
});
var type = "",
    anchor = "",
    project = "";