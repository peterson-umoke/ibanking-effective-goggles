define(["jquery"],function(n){return function(e){(e instanceof jQuery||e instanceof n)&&(e=e[0]);var t=e.getBoundingClientRect();return t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.bottom>0}});