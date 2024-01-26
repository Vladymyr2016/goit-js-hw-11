import{S as l,i as u}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".feedback-form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=new l(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});function m(n){const r="42040031-47a3b216d4f97a43df3da958a",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}f.addEventListener("submit",h);function h(n){n.preventDefault(),c.classList.remove("is-hidden"),a.innerHTML="";const r=n.currentTarget.elements.search.value.trim();m(r).then(o=>{o.hits.length===0&&u.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=p(o.hits),d.refresh()}).catch(o=>console.log(o)).finally(()=>{c.classList.add("is-hidden")})}function p(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,comments:e,likes:t,downloads:s})=>`<li class="image"> 
     <a href='${o}'><img src="${r}" alt="" /></a>
      <h2>comments</h2>
      <p>${e}</p>
      <h2>tags</h2>
      <p>${i}</p>
            <h2>comments</h2>
      <p>${t}</p>
      <h2>downloads</h2>
      <p>${s}</p>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
