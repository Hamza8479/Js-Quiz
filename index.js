   // Q1) i
    //     const name = prompt('plz enter your name?');
    // document.getElementById('n').innerHTML = `Welcome to Our Site ${name}`;
    
        // Q1) ii
//     const t = prompt('Enter Title');
//     const h = prompt('Enter height');
//     const w = prompt('Enter width')
//     document.body.innerHTML = `<img src="./ronaldo.png" alt="" id="image">`;
//     document.getElementById('image').insertAdjacentHTML("afterend", `Image title is ${t} height is ${parseInt(h)}px and width is ${parseInt(w)}px`);
//    // document.getElementById('image').style.src = "./ronaldo.png";
//     document.getElementById('image').style.height =h;
//     document.getElementById('image').style.width =w;

//      Q1) iii

// G_u_c_g = document.getElementById("p_color_change").style.color;
// var user_op = 	confirm(" Click ok if you want to change paragrapgh color");
// if ( user_op == true ) {
	
	
// 	G_u_c_g_pp=prompt(G_u_c_g);

// 	document.getElementById("p_color_change").style.color=G_u_c_g_pp;
// 	document.getElementById("changes_color").innerHTML = " Paragraph color is : "+G_u_c_g_pp;

	
// }else{

// 	document.getElementById("changes_color").innerHTML = "text color is not changed";

// }

//      Q3) b

// $(document).ready(function(){
//     $("[href]").css("color", "blue");
//       $("[href]").css("background", "LIGHTGREEN");
//     $(":button").css("color", "pink");
//     $(":button").css("background", "LIGHTGREEN");
//   });

//      Q4) 

// var i = 1;
// var sum =0;
//     while (i <= 10) 
//     {
//         for(var j =i; j<=10;j++ ){
//             sum= sum + j;
//             document.body.insertAdjacentHTML("beforeend", `<p>${sum} </p>`);
//              i++;
//         }
//         document.body.insertAdjacentHTML("beforeend", `total is ${sum}`);
//     }


//      Q5)
var due = new Date("May 29, 2021 1:00:00").getTime();


document.querySelector('.btn').addEventListener('click',function(){

var now = new Date().getTime(); 

var dif = due - now;

var days = Math.floor(dif/ (1000*60*60*24));

var hours = Math.floor((dif % (1000* 60 * 60 *24) / (1000* 60* 60)));

var mins =  Math.floor((dif % (1000* 60 * 60) / (1000* 60)));

var secs =  Math.floor((dif % (1000* 60 ) / 1000));

document.querySelector('.showCounter').innerHTML =  secs+'s';
})


//      Q6)

// let arr =[2,3,4,6,30,23];
// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum = sum +arr[i];
// //    document.body.innerHTML = `<p>[2,3,4,6,30,23] = ${sum} </p>`;
// }
 
// let sum2 =0;
// let rem =arr.slice(0,5);
// // let rem =arr.splice(5,1);

// for(let i=0; i<rem.length; i++){
//     sum2 = sum2 +rem[i];
   
// }

// document.body.innerHTML = `<p> Before Removing </p> <p>[2,3,4,6,30,23] = ${sum}  <p> After Removing </p> </p>  <p>[2,3,4,6,30] = ${sum2} </p> `;
