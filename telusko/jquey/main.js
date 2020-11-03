// // function fn1() {
// //  $('p:first').fadeToggle(2000);  
// // }

// $('button').click(function(){

// })

// // the use of events in jquery is  instead of mentioning the events in html we here gng to mention in the js tag 


// // ready method is used

// $(document).ready(function(){

//     //syntax for jquery
// })

// $(document).ready(function(){

//     // $('#btn1').click(fn1);
//     // $('#btn1').mouseleave(fn1);
//     // $('#btn1').mouseenter(fn1);
//     $('#btn1').hover(fn1);
//     function fn1() {
//         $('p:first').fadeToggle(1000)
//     }
// });

// Effects in jquery

// $(document).ready(function(){

//     $("#btn1").click(function(){
//         // $("#bhuji").hide();
//         $("#bhuji").slideUp();
//         $("#bhuji").fadeOut("slow"); // also use timing in the fadeout opytion
//     });

//     $("#btn2").click(function(){
//         $("#bhuji").slideDown("slow");
//         // $("#bhuji").fadeIn("slow");
//         // $("#bhuji").show();
//     })
//     $("#btn3").click(function(){
//         $("#bhuji").slideToggle();
//         // $("#bhuji").fadeToggle();
//         // $("#bhuji").toggle();
//     })
// });

// Animate in jquery

$(document).ready(function(){

    $("#btn3").click(function(){

        $('#cube').animate({
            left: '150px'
        },1000)
       
    })
});
