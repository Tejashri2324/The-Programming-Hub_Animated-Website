//JavaScript
var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
        el.addEventListener("mouseover", function(event){
             this.className = "has-submenu open";
             clearTimeout(timer);
       });
       el.addEventListener("mouseout", function(event){
             timer = setTimeout(function(event){
                   document.querySelector(".has-submenu.open").className = "has-submenu";
             }, 1000);
       });
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.background1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.background1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.background1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });