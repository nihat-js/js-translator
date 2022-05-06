const translateBtn = document.getElementById("translate");
const textFrom = document.getElementsByTagName("textarea")[0];
const textTo =  document.getElementsByTagName("textarea")[1];
const translateFrom = document.getElementsByTagName("select")[0];
const translateTo = document.getElementsByTagName("select")[1];
const exchange = () =>{
    let temp = textFrom.value ;
    textFrom.value = textTo.value;
    textTo.value = temp;
    let temp2 = translateFrom.value;
    translateFrom.value = translateTo.value;
    translateTo.value = temp2;
}
translateBtn.addEventListener("click",()=>{
    let apiURL = `https://api.mymemory.translated.net/get?q=${textFrom.value}&langpair=${translateFrom.value}|${translateTo.value}`;
    fetch(apiURL).then(res=> res.json()).then( (data)=>{
        textTo.value = data.responseData.translatedText;
    })
    console.log(apiURL);
})
const copy = (k) =>{
    k=='left' ? textFrom.select : textTo.select();
    // textFrom.setSelectionRange(0,9876);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    if (k=='left'){
        document.getElementsByClassName("fa-volume-up")[0].innerHTML = "<small> copied </small>";
        setTimeout(()=>{
            document.getElementsByClassName("fa-volume-up")[0].innerHTML = "";
          
        },800)
    }else{
        document.getElementsByClassName("fa-volume-up")[1].innerHTML = "<small> copied </small>";
        setTimeout(()=>{
            document.getElementsByClassName("fa-volume-up")[1].innerHTML = "";
        },800)
    }
    
}
const speech = (k) =>{
    let text =  k=='left' ? textFrom.value : textTo.value;
    let speaker = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speaker);
}