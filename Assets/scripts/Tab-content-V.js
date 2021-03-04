let tabHeaders = document.querySelectorAll(".tabs-V .tab-header > div");
let tabContents = document.querySelectorAll(".tabs-V .tab-content-wrapper .tab-content > div");

for(let i=0;i<tabHeaders.length;i++){
    tabHeaders[i].addEventListener("click",function(){
        document.querySelector('.tabs-V .tab-header > .active').classList.remove('active');
        tabHeaders[i].classList.add('active');
        document.querySelector('.tabs-V .tab-content-wrapper .tab-content >.active').classList.remove('active');
        tabContents[i].classList.add('active');
    })
}