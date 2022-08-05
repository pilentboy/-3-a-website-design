// display mobile nav 
const hambergerBTN=document.querySelector(".hambergerBTN");
const closeMobileNavBBTN=document.getElementById("close");
const mobile_nav=document.querySelector(".mobile-nav");
const mainContent=document.querySelector(".mainContent");
const homeContentBTN=document.querySelector(".home-content-btn");

hambergerBTN.addEventListener("click",function() {
    mobile_nav.classList.toggle("mobile-nav-active");
});

closeMobileNavBBTN.addEventListener("click",function(){
    mobile_nav.classList.toggle("mobile-nav-active");
});


 
mainContent.addEventListener("click",function() {
    mainContent.classList.remove("mobile-nav-active");
});


homeContentBTN.addEventListener("click",function() {
    mobile_nav.classList.remove("mobile-nav-active");
});




