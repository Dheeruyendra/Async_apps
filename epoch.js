

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
    console.log(datt);
    let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

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
 let c =  setTimeout(t_time,500);

 datt.innerText =day+" "+ date+" "+month+" "+year;


 }

 
