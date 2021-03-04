let tabHeaders = document.querySelectorAll(".tabs-H .tab-header > div");
let tabContents = document.querySelectorAll(".tabs-H .tab-content-wrapper .tab-content > div");

for(let i=0;i<tabHeaders.length;i++){
    tabHeaders[i].addEventListener("click",function(){
        document.querySelector('.tabs-H .tab-header > .active').classList.remove('active');
        tabHeaders[i].classList.add('active');
        document.querySelector('.tabs-H .tab-content-wrapper .tab-content >.active').classList.remove('active');
        tabContents[i].classList.add('active');
    })
}