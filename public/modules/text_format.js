
var i=0,
    b=0;

function italicANDbold(e){
  if (e.keyCode == 96 && !i && b)
    {
      cursive(e,"both");
      i=1;
    }
  if (e.keyCode == 42 && i && !b)
    {
      cursive(e,"both");
      b=1;
    }  
//   Returning to normal from italics
  if( (e.keyCode == 96 || e.keyCode == 42) && (i | b)){
    cursive(e,"normal");
    i=0,b=0;
  }

//   Normal to italics
  else if(e.keyCode == 96 && !i && !b )
    {
      cursive(e,"italic");
      i=1;
    }
//   Normal to bold
  else if(e.keyCode == 42 && !b && !i)
     {
     cursive(e,"bold");
     stack.push("b");
     b=1;  
     } 
}


function cursive(e,type){
 
  var elem=document.activeElement,
      parent=elem.parentNode,
      pn;
     
    e.preventDefault();  
      if (elem.nodeName=="LI"){
         assign(elem,type)
         return;
       }
      else {
         pn = document.createElement(elem.nodeName);
         pn.classList.add("main");
      }
  
     assign(pn,type) 
     pn.contentEditable="true";
     pn.style.display="inline";
     elem.style.display="inline"; 
     elem.parentNode.insertBefore(pn, elem.nextSibling);
     pn.focus();
} 

/******** Function for assigning bold and italics contents *********/

function assign(pn,type){
  if(type=="both")
    {
     pn.style.fontWeight="bold";
     pn.style.fontStyle="italic";
   }
  else if(type=="normal")
  {

     pn.style.fontWeight="normal";
     pn.style.fontStyle="normal"; 
    // return;
  }
  else{
    let a= (type=="bold")?pn.style.fontWeight=type:pn.style.fontStyle=type;
  }

}


export {italicANDbold}