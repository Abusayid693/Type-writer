/** SUMMARY : This function formats polynomical equations
into html tag to properly display.

Eg : 
   
  FUNCTION INPUT : e = mc^2

  FUNCTION OUTPUT : <p><var> e=mc <sup> 2 </sup></var></p>

**/

function formatEqn(elem) {
  var div = document.createElement("div"),
    parent = elem.parentNode,
    data = [],
    sign = [],
    sup = [],
    d = 0,
    s = 0,
    su = 0,
    f = 0,
    l,
    firstD = 1,
    firstS = 1,
    temp;

  div.contentEditable = "true";
  div.classList.add("eqan");
  div.classList.add("main");
  parent.replaceChild(div, elem);

  for (var i = 1; i < elem.textContent.length; i++) {
    l = elem.textContent[i];
    if (l == "^") {
      f = 1;
      continue;
    } else if (l == "+" || l == "-" || l == "=") {
      sign[s] = l;
      s++;
      su++;
      d++;
      f = 0;
      firstD = 1;
      firstS = 1;
    } else if (f) {
      var temp = firstS ? (sup[su] = l) : (sup[su] += l);
      firstS = 0;
    } else {
      var temp = firstD ? (data[d] = l) : (data[d] += l);
      firstD = 0;
    }
  }

  div.innerHTML = "<p><var>";

  for (var i = 0; i < data.length; i++) {
    if (sup[i] == undefined && sign[i] == undefined) div.innerHTML += data[i];
    else if (sup[i] == undefined) div.innerHTML += data[i] + sign[i];
    else if (sign[i] == undefined)
      div.innerHTML += data[i] + "<sup>" + sup[i] + "</sup>";
    else div.innerHTML += data[i] + "<sup>" + sup[i] + "</sup>" + sign[i];
  }
  div.innerHTML += "</var></p>";
}

export { formatEqn };
