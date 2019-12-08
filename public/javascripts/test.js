document.addEventListener("DOMContentLoaded", (qwe) => {
  const element = document.querySelector('form');
  element.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData(element);
    console.log(formDataToObject(formData));
    //place your code here
    
  });     
});

function formDataToObject(formData){
  const answer = {};
  for(let entry of formData.entries()){
    answer[entry[0]] = entry[1];
  }
  return answer;
}
