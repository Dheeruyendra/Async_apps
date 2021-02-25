
let inputText = document.querySelector('#input_txt_area');
let outputText = document.querySelector('#output_txt_area');
let from  = document.querySelector('#select_from');
 let to = document.querySelector('#select_to');   
 let clr_btn = document.querySelector('#clear');


function translator(){

   let txt = inputText.value;
  
      
   const request = new Request('https://api.mymemory.translated.net/',{
       method:'GET',
       q : txt,

       langpair : 'en|hi',
   });
   console.log(txt);  
   fetch(request).then(response => response.json).then(json=> outputText.value=json.responseData.translatedText);


}


inputText.addEventListener('change', translator);
outputText.addEventListener('change', translator);

 clr_btn.addEventListener('click', ()=>{
    inputText.value = null;
    outputText.value = null; 
 });

