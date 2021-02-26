
let inputText = document.querySelector('#input_txt_area');
let outputText = document.querySelector('#output_txt_area');
let from  = document.querySelector('#select_from');
 let to = document.querySelector('#select_to');   
 let clr_btn = document.querySelector('#clear');


function translator(){

        const lang = {
            English: 'en',
            Hindi:'hi',
            Spanish:'es',
           Italian:'it',
           French:'fr',
            Arabic:'ar',
            Gujarati:'gu',
            Greek:'el',
            Indonesian:'id',
            Japanese:'ja-JP',
            Kannada:'kn',
            Korean:'ko',
            Latin:'la',
            Malayalam:'ml',
           Marathi:'mr',
            Mongolian:'mn',
            Nepali:'ne',
           Tamil:'ta',
           Telugu:'te',
            Urdu:'ur',
        };

        let url = new URL('https://api.mymemory.translated.net/get');

       const parameters ={
           q:inputText.value,
           langpair:`${lang[from.value]}|${lang[to.value]}`,
       };

       console.log(parameters);
       Object.keys(parameters).forEach((key)=>{
            url.searchParams.append(key, parameters[key]);
       });
       console.log(url.searchParams);
       console.log(url.search);
      url.search = new URLSearchParams(parameters).toString();
     
      
     fetch(url).then(response=> response.json()).then((json) =>{ 
             outputText.value = json.responseData.translatedText
        
        });
}


inputText.addEventListener('input', translator);
 to.addEventListener('input', translator);
 from.addEventListener('input', translator);

 clr_btn.addEventListener('click', ()=>{
    inputText.value = null;
    outputText.value = null; 
    from.value = "English";
    to.value = "Hindi";
 });

