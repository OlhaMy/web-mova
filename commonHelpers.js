/* empty css                      */import{S as E}from"./assets/vendor-7d212bb0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const s={btnBurger:document.querySelector(".header-burger"),btnClose:document.querySelector(".header-icon-button"),backdrop:document.querySelector(".backdrop"),headerNav:document.querySelector(".header-nav")};function S(){document.documentElement.classList.add("body-prevent-scroll"),s.backdrop.classList.add("backdrop-open"),s.headerNav.classList.add("header-nav-open")}function u(){document.documentElement.classList.remove("body-prevent-scroll"),s.backdrop.classList.remove("backdrop-open"),s.headerNav.classList.remove("header-nav-open")}s.btnBurger.addEventListener("click",S);s.btnClose.addEventListener("click",u);window.addEventListener("click",e=>{e.target===s.backdrop&&u()});window.addEventListener("keydown",e=>{e.key==="Escape"&&u()});document.querySelectorAll(".header-nav-link").forEach(e=>{e.addEventListener("click",()=>{u()})});const y=document.querySelector(".underline"),k=document.querySelectorAll(".header-nav-link");function f(e){const t=e.getBoundingClientRect(),n=t.width*.8,i=e.offsetLeft+(t.width-n)/2;y.style.width=`${n}px`,y.style.left=`${i}px`}function A(e){document.querySelectorAll(".header-nav-link").forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===`#${e}`&&(n.classList.add("active"),requestAnimationFrame(()=>f(n)))})}k.forEach(e=>{e.addEventListener("click",function(){f(e)})});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));if(n){let v=function(c){m===null&&(m=c);const a=c-m,d=L(a,r,l,p);window.scrollTo(0,d),a<p?requestAnimationFrame(v):g(!1)},L=function(c,a,d,q){return c/=q/2,c<1?d/2*c*c+a:(c--,-d/2*(c*(c-2)-1)+a)};const i=document.querySelector(".header").offsetHeight,o=n.getBoundingClientRect().top+window.pageYOffset-i,r=window.pageYOffset,l=o-r,p=500;let m=null;g(!0),requestAnimationFrame(v)}})});window.addEventListener("hashchange",()=>{const e=document.querySelector(`a[href="${window.location.hash}"]`);e&&f(e)});document.querySelector(".header");let h=!1;const O=document.querySelectorAll("section"),x={root:null,threshold:.6};function P(e,t){h||e.forEach(n=>{if(n.isIntersecting){const i=n.target.getAttribute("id");A(i)}})}const C=new IntersectionObserver(P,x);O.forEach(e=>C.observe(e));function g(e){h=e}function H(){return window.scrollY||document.documentElement.scrollTop}window.addEventListener("scroll",()=>{h||H()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header").offsetHeight;document.querySelector(".header-nav").style.top=`${e}px`;const t=document.querySelector(".header-nav-link.active")||document.querySelector(".header-nav-link");t&&f(t)});document.querySelectorAll(".faq-question").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".faq-item"),n=t.querySelector(".faq-description-box");document.querySelectorAll(".faq-item").forEach(i=>{const o=i.querySelector(".faq-description-box");i!==t&&(i.classList.remove("active"),o.style.maxHeight="0")}),t.classList.toggle("active"),t.classList.contains("active")?n.style.maxHeight="300px":n.style.maxHeight="0"})});const w=new E(".swiper-container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,initialSlide:2,preventClicks:!0,slidesPerView:1.4,spaceBetween:8,lazy:!0,coverflowEffect:{rotate:0,stretch:0,depth:250,modifier:1,slideShadows:!1},on:{click(e){w.slideTo(w.clickedIndex)}},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1200:{slidesPerView:2.1,spaceBetween:10,coverflowEffect:{depth:400},navigation:{prevEl:".gallery-button-prev",nextEl:".gallery-button-next"}}}});let B=document.querySelectorAll(".section-animation");function b(){let e=window.innerHeight;B.forEach(t=>{t.getBoundingClientRect().top<e-100&&(t.style.opacity="1",t.style.transform="translateY(0)")})}b();window.addEventListener("scroll",b);
//# sourceMappingURL=commonHelpers.js.map