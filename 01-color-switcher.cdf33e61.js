(()=>{const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;t.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(d),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")}))})();
//# sourceMappingURL=01-color-switcher.cdf33e61.js.map