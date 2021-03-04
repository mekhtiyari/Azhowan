const checkbox = document.getElementById("checkbox");
// let currentTheme = localStorage.getItem("currentTheme");
// let body=document.body;

// if(currentTheme){
//   body.classList.add("dark-theme");
// }
checkbox.addEventListener("change", () => {
  //   change the theme of the website
  document.body.classList.toggle("dark-theme");

  // if (body.classList.contains("dark-theme")){
  //   localStorage.setItem("currentTheme","ThemeActive");
  // }else {
  //   localStorage.removeItem("currentTheme");
  // }

});
