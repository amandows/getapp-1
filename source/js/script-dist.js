function slider(){let e=0;const t=document.querySelector(".slider-line");document.querySelector(".btn-down").addEventListener("click",(function(){e+=200,e>400&&(e=0),t.style.top=-e+"px"})),document.querySelector(".btn-up").addEventListener("click",(function(){e-=200,e<0&&(e=400),t.style.top=-e+"px"}))}function slidertwo(){let e=0;const t=document.querySelector(".slider-line-2");document.querySelector(".prev-btn").addEventListener("click",(function(){e+=160,e>480&&(e=0),t.style.left=-e+"px"})),document.querySelector(".next-btn").addEventListener("click",(function(){e-=160,e<0&&(e=480),t.style.left=-e+"px"}))}function slidertree(){let e=0;const t=document.querySelector(".slider-line-2-info");document.querySelector(".prev-btn").addEventListener("click",(function(){e+=310,e>930&&(e=0),t.style.left=-e+"px"})),document.querySelector(".next-btn").addEventListener("click",(function(){e-=310,e<0&&(e=930),t.style.left=-e+"px"}))}slider(),slidertwo(),slidertree();