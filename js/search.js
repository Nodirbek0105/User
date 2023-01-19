var elform2 = document.querySelector("[data-form2]");
var elform3 = document.querySelector("[data-form3]");
var elinput5 = document.querySelector("[data-input5]");
var elSelect = document.querySelector("[data-select]");
var elSearch = document.querySelector('[data-search]');

elSearch.addEventListener("click" , function(evt){
  evt.preventDefault()
  elform2.style.display = "block"
  elSearch.classList.add("d-n")
})

elform2.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    if (elinput5.value == element.name) {
      elUL.innerHTML = "";
      var elli = document.createElement("li");
      var eldivimg = document.createElement("div");
      var eldiv = document.createElement("div");
      var eldivright = document.createElement("div");
      var eldivleft = document.createElement("div");
      var eldivlefttop = document.createElement("div");
      var eldivleftbottom = document.createElement("div");
      var elpname = document.createElement("p");
      var elptype = document.createElement("p");
      var elpkg = document.createElement("p");
      var elpage = document.createElement("p");
      var elimg = document.createElement("img");
      var elimgHeart = document.createElement("img");

      elli.style.backgroundColor = "#fff";
      elli.style.padding = "0 1px";
      elli.style.margin = "10px";
      elli.style.height = "360px";
      elli.style.display = "flex";
      elli.style.alignItems = "center";
      elli.style.flexDirection = "column";
      elli.style.justifyContent = "space-between";
      elUL.style.display = "flex";
      elli.style.margin = "5px";
      eldivimg.style.height = "62%";
      eldivimg.style.width = "101%";
      eldivimg.style.display = "flex";
      eldivimg.style.alignItems = "center";
      eldivimg.style.justifyContent = "center";
      elli.style.border = " 2px black solid";
      elli.style.borderRadius = "20px";
      eldivimg.style.borderRadius = "14px 14px 0 0";
      eldivimg.style.border = "black solid 1px";
      eldiv.style.height = "38%";
      eldiv.style.width = "100%";
      elimgHeart.style.transform = "scale(.45)";
      eldivlefttop.style.display = "flex";
      eldivlefttop.style.flexDirection = "column";
      eldivlefttop.style.gap = "10px";
      elimg.setAttribute("src", element.img);
      elimgHeart.setAttribute("src", "./img/heart.svg");
      eldivimg.classList.add("divImg");
      eldiv.classList.add("divParent");
      eldivleft.classList.add("divLeft");
      eldivright.classList.add("divRight");
      eldivleftbottom.classList.add("divLeftBottom");
      elpname.classList.add("name");
      elptype.classList.add("type");

      elpname.textContent = `${element.name}`;
      elptype.textContent = `${element.type}`;
      elpkg.textContent = `${element.weight}`;
      elpage.textContent = `${element.height}`;
      elUL.appendChild(elli);
      elli.appendChild(eldivimg);
      eldivimg.appendChild(elimg);
      elli.appendChild(eldiv);
      eldiv.appendChild(eldivleft);
      eldiv.appendChild(eldivright);
      eldivright.appendChild(elimgHeart);
      eldivleft.appendChild(eldivlefttop);
      eldivleft.appendChild(eldivleftbottom);
      eldivlefttop.appendChild(elpname);
      eldivlefttop.appendChild(elptype);
      eldivleftbottom.appendChild(elpkg);
      eldivleftbottom.appendChild(elpage);
      elinput5.value = "";
    }
  }
});
// elform3.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   for (i = 0; i < pokemons.length; i++) {
//     const element = pokemons[i];
//     if (elSelect.value == element.type) {
//       elUL.innerHTML = "";
//       var elli = document.createElement("li");
//       var eldivimg = document.createElement("div");
//       var eldiv = document.createElement("div");
//       var eldivright = document.createElement("div");
//       var eldivleft = document.createElement("div");
//       var eldivlefttop = document.createElement("div");
//       var eldivleftbottom = document.createElement("div");
//       var elpname = document.createElement("p");
//       var elptype = document.createElement("p");
//       var elpkg = document.createElement("p");
//       var elpage = document.createElement("p");
//       var elimg = document.createElement("img");
//       var elimgHeart = document.createElement("img");

//       elli.style.backgroundColor = "#fff";
//       elli.style.padding = "0 1px";
//       elli.style.margin = "10px";
//       elli.style.height = "360px";
//       elli.style.display = "flex";
//       elli.style.alignItems = "center";
//       elli.style.flexDirection = "column";
//       elli.style.justifyContent = "space-between";
//       elUL.style.display = "flex";
//       elli.style.margin = "5px";
//       eldivimg.style.height = "62%";
//       eldivimg.style.width = "101%";
//       eldivimg.style.display = "flex";
//       eldivimg.style.alignItems = "center";
//       eldivimg.style.justifyContent = "center";
//       elli.style.border = " 2px black solid";
//       elli.style.borderRadius = "20px";
//       eldivimg.style.borderRadius = "14px 14px 0 0";
//       eldivimg.style.border = "black solid 1px";
//       eldiv.style.height = "38%";
//       eldiv.style.width = "100%";
//       elimgHeart.style.transform = "scale(.45)";
//       eldivlefttop.style.display = "flex";
//       eldivlefttop.style.flexDirection = "column";
//       eldivlefttop.style.gap = "10px";
//       elimg.setAttribute("src", element.img);
//       elimgHeart.setAttribute("src", "./img/heart.svg");
//       eldivimg.classList.add("divImg");
//       eldiv.classList.add("divParent");
//       eldivleft.classList.add("divLeft");
//       eldivright.classList.add("divRight");
//       eldivleftbottom.classList.add("divLeftBottom");
//       elpname.classList.add("name");
//       elptype.classList.add("type");

//       elpname.textContent = `${element.name}`;
//       elptype.textContent = `${element.type}`;
//       elpkg.textContent = `${element.weight}`;
//       elpage.textContent = `${element.height}`;
//       elUL.appendChild(elli);
//       elli.appendChild(eldivimg);
//       eldivimg.appendChild(elimg);
//       elli.appendChild(eldiv);
//       eldiv.appendChild(eldivleft);
//       eldiv.appendChild(eldivright);
//       eldivright.appendChild(elimgHeart);
//       eldivleft.appendChild(eldivlefttop);
//       eldivleft.appendChild(eldivleftbottom);
//       eldivlefttop.appendChild(elpname);
//       eldivlefttop.appendChild(elptype);
//       eldivleftbottom.appendChild(elpkg);
//       eldivleftbottom.appendChild(elpage);
//       elinput5.value = "";
//     }
//   }
// });
