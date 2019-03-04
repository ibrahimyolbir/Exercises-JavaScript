
let radioButton = document.getElementsByName("answers");

for (let i = 0; i < radioButton.length; i++){
    radioButton[i].addEventListener("click",function(){
        let answers = document.getElementsByName("answers");
        console.log(answers);
        
    })
}


// radioButton.addEventListener("click", function(){
//      takeAnswers()
// });
// function takeAnswers(){
//     let answers = document.querySelectorAll("#answers").value;
// }