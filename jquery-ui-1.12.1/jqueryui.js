// Tool Tip
// $('#heart').tooltip({
//     // track:true,
//     content:"I Love You",
//     show:{effect:'bounce' , duration:3000},
//     hide:{effect:'explode' , duration:1000}
//     // bounce , blind , highlight , pulsate , explode
// });



// Accordion

// $('#channels').accordion({
//     collapsible : true,
//     event:'click',
//     animate:500,
//     heightStyle:true
// });

// Message Box widget

// $('#msg').click(function(){
//     // alert("Button Clicked")

//     $('#msgbox').dialog({
//         title:"Custom message Box",
//         draggable:true,
//         resizable:true,
//         modal:true,
//         b
//     });
// })

// Autocomplete widgets

// var mycities = ['Bangalore' ,'chennai' ,'mumbai' , 'kochi' , 'kozhikide','thrissur' , 'pune' ,'jaipur',
// 'New Delhi' , 'New york' , 'Bangladesh' ,
//  'Chemmad' ,'Chengalpattu','Chennimalai',
//  'Bharuch','Bhatpara','Kollam ','Kolkata ','Kota ','Kolhapur ','Tiruchengode','Tiruchirappalli','Tirunelveli','Tirupati'] 

// $('#city').autocomplete({
//     source:mycities
// },{
//     autoFocus:true,
//     // delay:10,
//     minLength:0
// });



// 
// Interactions in jquery

$('.cube').draggable({
    // axis:'x',
    containment:'parent', // document
    cursor: "grabbing",
    // grid: [200, 200],
    snap:true,
    snapTolerance: 30

});
