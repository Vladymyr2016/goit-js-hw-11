import{S as l,i as d}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".feedback-form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new l(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});function f(i){const r="42040031-47a3b216d4f97a43df3da958a",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}u.addEventListener("submit",h);function h(i){i.preventDefault(),c.classList.remove("is-hidden"),a.innerHTML="";const r=i.currentTarget.elements.search.value.trim();f(r).then(o=>{o.hits.length===0&&d.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=p(o.hits),m.refresh()}).catch(o=>console.log(o)).finally(()=>{c.classList.add("is-hidden")})}function p(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,comments:e,likes:t,downloads:n})=>`<li class="item"> 
     <a href='${o}'><img class="image" src="${r}" alt="" /></a>
     <div class="box-text"> 
     <div>
     <h2 class="main-text">comments</h2>
      <p class="text">${e}</p>
      </div>
      <div>
      <h2 class="main-text">tags</h2>
      <p class="text">${s}</p>
     </div>
     <div>
      <h2class="main-text">likes</h2class=>
      <p class="text">${t}</p>
      </div>
      <div>
      <h2 class="main-text">downloads</h2>
      <p class="text">${n}</p>
      </div>
      </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
