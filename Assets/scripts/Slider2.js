document.addEventListener("DOMContentLoaded", () =>{
new Glide(".glide",{
    type:"carousel",
    startAt:0,
    AnimationTimingFunc:"ease-in",
    gap:100,
    perView:3
}).mount();
});