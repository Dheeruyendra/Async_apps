

function check(value){

   if(value<10){
       return value = "0"+value;
   }
     return value;
}

function month_name(value){

  let names = ['Jan',
              'Feb',
              'March',
              'April',
              'May',
              'June',
              'July',
              'Agust',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
  ]

     return names[value];

}


function week_day(val){
  let days = [ 'Sunday',
                'Monday',
                'Tuseday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
                
  ]

   return days[val];


}


 function t_time(){
    let time = document.querySelector('#live_time');
    let datt = document.querySelector('.today_date_month'); 
    let epoh = document.querySelector('.epoch_time');
    console.log(datt);
    let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

let ep_sec = today.getTime();
  console.log(ep_sec);
  ep_sec = Math.round(ep_sec/1000);

let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let day = today.getDay();

     day = week_day(day);  

 month = month_name(month);

  h = check(h);
  m = check(m);
  s = check(s);

 time.innerHTML = h +" : "+m+" : "+s;
 epoh.innerText ="  "+ ep_sec;
 let c =  setTimeout(t_time,500);

 datt.innerText =day+" "+ date+" "+month+" "+year;
 

 }


let input = document.querySelector('#user_input');
let b1   = document.querySelector('#btn1');
let b2 = document.querySelector('#btn2');

let out = document.querySelector('.output');

function to_human_date(){
  
  let time = new Date(input.value*1000);
 
   out.innerText = time;
    
}

b1.addEventListener('click', to_human_date);

b2.addEventListener('click', ()=>{
          input.value = null;
          out.innerText = null;
});
 



