var typed = new Typed('#element', {
    strings: ['Graphic Era Hill University.'],
    typeSpeed: 60,
});

var tablinks=document.getElementsByClassName("links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right="10px";
}
function closemenu()
{
    sidemenu.style.right="-200px";
}