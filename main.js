(()=>{const e=document.getElementById("links"),n=document.querySelector("h1"),o=document.querySelector("h2"),t=document.querySelector(".footer"),r={name:"Brandon James Huaman",nickname:"@Brandon328",description:"...",avatar:"...",social:[{name:"twitter",url:"https://twitter.com/",username:"BrandonJJ328"},{name:"instagram",url:"https://instagram.com/",username:"BrandonJJ328"}],links:[{name:"blog",url:"#",color:"red",emoji:"📖"},{name:"podcast",url:"#",color:"yellow",emoji:"💬"},{name:"cursos",url:"#",color:"lime",emoji:"🎒"},{name:"sponsors",url:"#",color:"blue",emoji:"🚀"}],footer:"Made with Love ❤ on Peru"};(()=>{let a=document.createTextNode(r?.name),l=r?.links?.map((e=>`\n      <div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n        <a class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer" \n          href="${e.url}">\n          ${e.name}\n        </a>\n        <span>${e.emoji}</span>\n      </div>\n    `)).join(""),m=document.createElement("section");m.innerHTML=l,e.appendChild(m),n.appendChild(a),t.textContent=r?.footer,o.textContent=r?.nickname})()})();