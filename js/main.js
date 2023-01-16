var elUL = document.querySelector("[data-ul]");
var elinput = document.querySelector("[data-input]");
var elinput1 = document.querySelector("[data-input1]");
var elinput2 = document.querySelector("[data-input2]");
var elinput3 = document.querySelector("[data-input3]");
var elinput4 = document.querySelector("[data-input4]");
var elform = document.querySelector("[data-form]");

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elli = document.createElement("li");
  var eldivimg = document.createElement("div");
  var eldiv = document.createElement("div");
  var eldivright = document.createElement("div");
  var eldivleft = document.createElement("div");
  var eldivlefttop = document.createElement("div");
  var eldivleftbottom = document.createElement("div");
  var elpname = document.createElement("p")
  var elptype = document.createElement("p")
  var elpkg = document.createElement("p")
  var elpage = document.createElement("p")
  var elimg = document.createElement("img");
  var elimgHeart = document.createElement("img");

  elli.style.backgroundColor = "#fff";
  elli.style.padding = "0 1px";
  elli.style.margin = "10px";
  elli.style.width = "260px";
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
  elli.style.border = "2px black solid";
  elli.style.borderRadius = "20px";
  eldivimg.style.borderRadius = "14px 14px 0 0";
  eldivimg.style.border = "black solid 1px";
  eldiv.style.height = "38%";
  eldiv.style.width = "100%";
  elimgHeart.style.transform = "scale(.45)"
  eldivlefttop.style.display = "flex"
  eldivlefttop.style.flexDirection = "column"
  eldivlefttop.style.gap = "10px"
  elimgHeart.setAttribute("src", "./img/heart.png");
  eldivimg.classList.add("divImg")
  eldiv.classList.add("divParent")
  eldivleft.classList.add("divLeft")
  eldivleftbottom.classList.add("divLeftBottom")
  eldivright.classList.add("divRight")
  elpname.classList.add("name")
  elptype.classList.add("type")
  elpname.textContent = `${elinput1.value}`
  elptype.textContent = `${elinput2.value}`
  elpkg.textContent = `${elinput3.value} kg`
  elpage.textContent = `${elinput4.value} m`
  elUL.appendChild(elli);
  elli.appendChild(eldivimg);
  eldivimg.appendChild(elimg);
  elli.appendChild(eldiv);
  eldiv.appendChild(eldivleft)
  eldiv.appendChild(eldivright)
  eldivright.appendChild(elimgHeart)
  eldivleft.appendChild(eldivlefttop)
  eldivleft.appendChild(eldivleftbottom)
  eldivlefttop.appendChild(elpname)
  eldivlefttop.appendChild(elptype)
  eldivleftbottom.appendChild(elpkg)
  eldivleftbottom.appendChild(elpage)
  if (elinput.value == "") {
    elimg.setAttribute("src", `${333}`);
  }
  if (elinput.value !== "") {
    elimg.setAttribute("src", `${elinput.value}`);
  }
  elinput.value = "";
  elinput1.value = "";
  elinput3.value = "";
  elinput4.value = "";
  elinput2.value = "";
});

for (i = pokemons.length; i--; i >= 0) {
  const element = pokemons[i].img;
  const element2 = pokemons[i].name;
  const element3 = pokemons[i].type;
  const element4 = pokemons[i].weight;
  const element5 = pokemons[i].height;
  var elli = document.createElement("li");
  var eldivimg = document.createElement("div");
  var eldiv = document.createElement("div");
  var eldivright = document.createElement("div");
  var eldivleft = document.createElement("div");
  var eldivlefttop = document.createElement("div");
  var eldivleftbottom = document.createElement("div");
  var elpname = document.createElement("p")
  var elptype = document.createElement("p")
  var elpkg = document.createElement("p")
  var elpage = document.createElement("p")
  var elimg = document.createElement("img");
  var elimgHeart = document.createElement("img");

  elli.style.backgroundColor = "#fff";
  elli.style.padding = "0 1px";
  elli.style.margin = "10px";
  elli.style.width = "260px";
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
  elimgHeart.style.transform = "scale(.45)"
  eldivlefttop.style.display = "flex"
  eldivlefttop.style.flexDirection = "column"
  eldivlefttop.style.gap = "10px"
  elimg.setAttribute("src", element);
  elimgHeart.setAttribute("src", "./img/heart.png");
  eldivimg.classList.add("divImg")
  eldiv.classList.add("divParent")
  eldivleft.classList.add("divLeft")
  eldivright.classList.add("divRight")  
  eldivleftbottom.classList.add("divLeftBottom")
  elpname.classList.add("name")
  elptype.classList.add("type")

  elpname.textContent = `${element2}`
  elptype.textContent = `${element3}`
  elpkg.textContent = `${element4}`
  elpage.textContent = `${element5}`
  elUL.appendChild(elli);
  elli.appendChild(eldivimg);
  eldivimg.appendChild(elimg);
  elli.appendChild(eldiv);
  eldiv.appendChild(eldivleft)
  eldiv.appendChild(eldivright)
  eldivright.appendChild(elimgHeart)
  eldivleft.appendChild(eldivlefttop)
  eldivleft.appendChild(eldivleftbottom)
  eldivlefttop.appendChild(elpname)
  eldivlefttop.appendChild(elptype)
  eldivleftbottom.appendChild(elpkg)
  eldivleftbottom.appendChild(elpage)
}
