const pllx = document.getElementById('parallax');
      window.addEventListener("scroll",function(){
       let offset = window.scrollY;
       pllx.style.backgroundPositionY = offset * 0.6 + "px";
      });