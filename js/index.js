$(document).ready(function() {
    // Function to increment the counters
    function incrementCounter(selector) {
        var $counter = $(selector);
        var target = $counter.attr("data-count");
        var current = 0;
        var interval = setInterval(function() {
            current++;
            $counter.text(current);
            if (current >= target) {
                clearInterval(interval);
            }
        },25);
    }

    incrementCounter(".startup-count");
    incrementCounter(".country-count");
    incrementCounter(".industry-count");
});

// web btn function// 

$(document).ready(function () {
    $(".webbtn").click(function () {
      $(".webpage").toggleClass("show");
    });
  
    $(".webbtn").on("click", function() {
        var tl1 = gsap.timeline({ duration: 0.2, delay:0.1,});

        tl1.from(".webpage-head", {
            y: 50,
            opacity: 0,
        });

        tl1.from(".web-services", {
            y: 50,
            opacity: 0,
        });

        tl1.from(".close-btn", {
            scale:0,
            opacity: 0,
        });
    });

    $(".ph-x-circle, .custombtn, .logobtn, .seobtn, .industrybtn").click(function () {
        $(".webpage").removeClass("show");
      });


});

// customtbn function //

  $(document).ready(function () {
    $(".custombtn").click(function () {
      $(".custompage").toggleClass("customshow");
    });
  
    $(".ph-x-circle, .webbtn, .logobtn, .seobtn").click(function () {
        $(".custompage").removeClass("customshow");
      });

});

// logo btn function //

$(document).ready(function () {
    $(".logobtn").click(function () {
      $(".logopage").toggleClass("show");
    });

    $(".logobtn").on("click", function() {
        var tl3 = gsap.timeline({ duration: 0.2, delay:0.1,});

        tl3.from(".logohead", {
            y: 50,
            opacity: 0,
        });

        tl3.from(".logos2", {
            y: 50,
            stagger:0.2,
            opacity: 0,
        });

        tl3.from(".close-btn", {
            scale:0,
            opacity: 0,
        });
    });
  
    $(".ph-x-circle, .webbtn, .custombtn, .seobtn").click(function () {
        $(".logopage").removeClass("show");
      });

});

//seo page function//

$(document).ready(function () {
    $(".seobtn").click(function () {
      $(".seopage").toggleClass("show");
    });

    $(".seobtn").on("click", function() {
        var tl2 = gsap.timeline({ duration: 0.2, delay:0.1,});

        tl2.from(".seohead", {
            y: 50,
            opacity: 0,
        });

        tl2.from(".seoservice", {
            y: 50,
            opacity: 0,
        });

        tl2.from(".close-btn", {
            scale:0,
            opacity: 0,
        });
    });
  
    $(".ph-x-circle, .webbtn, .custombtn, .logobtn").click(function () {
        $(".seopage").removeClass("show");
      });

});

// industry page function//

$(document).ready(function () {
    $(".industrybtn").click(function () {
      $(".industrypage").toggleClass("show");
    });

    $(".industrybtn").on("click", function() {
        var tl4 = gsap.timeline({ duration: 0.1, delay:0.1,});

        tl4.from(".indushead", {
            y: 50,
            opacity: 0,
        });

        tl4.from(".indus-images", {
            y: 50,
            opacity: 0,
        });

        tl4.from(".close-btn", {
            scale:0,
            opacity: 0,
        });
    });
  
    $(".ph-x-circle, .webbtn, .custombtn, .seobtn").click(function () {
        $(".industrypage").removeClass("show");
    });

});

//review page function//

$(document).ready(function(){
    $(".reviewbtn").click(function(){
        $(".reviewpage").toggleClass("reviewpage-show");
        $(".review-cont").toggleClass("reviewcont-show");
    });

    $(".ph-x-circle").click(function(){
        $(".reviewpage").removeClass("reviewpage-show");
        $(".review-cont").removeClass("reviewcont-show");
    });

})