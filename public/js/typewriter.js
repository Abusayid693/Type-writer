/********* Variables and functions used through out the blocks ***********/
function H1(){  return document.createElement("h1")  }
function H2(){  return document.createElement("h2")  }
function H3(){  return document.createElement("h3")  }
function H4(){  return document.createElement("h4")  }
let i=0, //variable used for italics
    b=0, //variable used for bold texts
    initial_release=0;
var  initial_v=0;




// Auto Focus on the parent element
 function auto_Focus() {
 document.querySelector("#pad_parent").focus();
}



/** Event Append = When user presses `Enter` it creates a new `p`
 element and append it to main child body, only to replace the child element according to users entry **/
document.addEventListener('keypress', append);

function append(e) {  
   if (e.which === 13 && document.activeElement.classList.contains("main")) {
     
      var elem,
          parent,
          newH = document.createElement("hr"),
          btn = document.createElement("p"); 
   btn.classList.add("main");
     
//  only first time case     
   if(!initial_release)
     elem=document.querySelector(".pad");
   else
     elem=document.activeElement;
     
     
     parent=elem.parentNode
     btn.contentEditable="true";  
     initial_release=1;
     
      
//   Handling exception for LI elements
    if(elem.nodeName=="LI"){
        elem=elem.parentNode;
        parent=elem.parentNode;
        elem.parentNode.insertBefore(btn, elem.nextSibling);
     }
     
   else {
        newH.style.opacity=0;    
        elem.parentNode.insertBefore(newH, elem.nextSibling);                 
        newH.parentNode.insertBefore(btn, newH.nextSibling);
 
       }
        btn.focus();                                 
        e.preventDefault();  
        i=0,b=0;                                      
    }
} 

 







/** Event Replace = The primary function for replacing elements as per user entry **/

document.addEventListener('keypress', replace );
function replace(e){
    if(e.keyCode == 32){
      
    var elem=document.activeElement,
        text=elem.textContent;
    
  // alert(text);  
       
//     Handling ordered list items      
    if (!isNaN(text) && text!=='')
        ordered(elem,text);
      
//      Handling format equations      
    else if (text[0]=="$") formatEqn(elem);
      
//   else if i required    
//     Handling different user entries 
     switch(text){
       case "#":  
        heading(elem,H1());
        break;    
       case "##":
         heading(elem,H2());
         break;
       case "###":
         heading(elem,H3());
         break;
       case "####":
         heading(elem,H4());
         break;
       case "-":
         unordered(elem);
         break;
       case "---":
         hR(elem);
         break;
       case "abcd":
         formatEqn(elem);
         break;
     }        
  }
}


/** Function for inserting unordered lists **/

function unordered(elem){
    var parent=elem.parentNode,
        active=document.activeElement,
        ul = document.createElement('ul'),
        li = document.createElement('li');
   if(active.nodeName=="LI") return;

   ul.appendChild(li);
   ul.classList.add("main");
   li.classList.add("main");

   li.contentEditable="true";
   parent.replaceChild(ul,elem);
   li.focus();
}


function ordered(elem,start){
    var parent=elem.parentNode,
        active=document.activeElement,
        ol = document.createElement('ol'),
        li = document.createElement('li');
  
   if(active.nodeName=="LI") return;
   ol.appendChild(li);
   ol.start=start;
   ol.classList.add("main");
   li.classList.add("main");
  
   li.contentEditable="true";
   parent.replaceChild(ol,elem);
   li.focus();
}





/********************** Primary functions for italics and bold texts ******************************/
let stack = [];

document.addEventListener('keypress', italicANDbold);
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
      stack.push("i");
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
     // parent.appendChild(pn);  
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
    return;
  }
  else{
    let a= (type=="bold")?pn.style.fontWeight=type:pn.style.fontStyle=type;
  }
}


/*****************************************************************************************************************/





/* Function for replacing heading tags */
function heading(elem,e){
    let parent=elem.parentNode,
        newElement=e;
  
    elem.classList.add("main");
    newElement.classList.add("main");

    newElement.contentEditable="true";
    newElement.id=elem.id;
    parent.replaceChild(newElement,elem);
    newElement.focus();
}


function pTag(elem){
    let parent=elem.parentNode,
        newElement=document.createElement("p");
    elem.classList.add("main");
    newElement.contentEditable="true";
    newElement.id=elem.id;
    parent.replaceChild(newElement,elem);
    newElement.focus();
}
/************ Event for horizontal ruller ****************/

function hR(elem){
  let parent = elem.parentNode,
      newElement = document.createElement("hr"),
      parent_new = newElement.parentNode,
      temp = document.createElement("p");
  
  temp.classList.add("main");
  temp.contentEditable="true";
  parent.replaceChild(newElement,elem);
  newElement.parentNode.insertBefore(temp,newElement.nextSibling);
  temp.focus();
}


/************ Deleacting node and moving courser functions ********/

document.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
  
    if (key === "Backspace" || key === "Delete") {
      
        let elem=document.activeElement,
            previousElem,
            p_previousElem,
            parent,
            p_parent;
      
        if (elem.id=="pad_parent")
           return;
      
      
    else if(elem.textContent=="") {

            if(elem.nodeName=="LI"){
              parent= elem.parentElement;
              pTag(parent)   
            }
            
            else {              
               previousElem = elem.previousSibling;               
        //     Removing HR from the thread      
               if(previousElem.nodeName=="HR")
                  {  p_previousElem= previousElem.previousSibling;
                     previousElem.remove();
                     p_previousElem.focus();                
                 }
              
               if(previousElem!=="undefined") 
                 previousElem.focus();
              elem.remove();              
             } 
         }
    }

});
 
 






/*********** Mathematical formulations ******************/



/*********** Handling Image capture ******************/

window.addEventListener('paste', function(e){
  
 var elem = document.activeElement,
     imgs = e.clipboardData.items,
     c = document.createElement("canvas"),
     p = document.createElement("p")
     $ = c.getContext("2d");
       
  
//   detecting clipboard item image or not
 if (e.clipboardData.files.length > 0 && elem.classList.contains("main")) {   
//   Handaling clipboard event to pasta image to a new canvas next to
//   current active element   
     if(imgs == undefined) return false;
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].type.indexOf("image") == -1) continue;
          var imgObj = imgs[i].getAsFile();
          var url = window.URL || window.webkitURL;
          var src = url.createObjectURL(imgObj);
          $.clearRect(0,0,this.width,this.height);
          loadImage(src,$,c);
        }
       p.classList.add("main");
       c.classList.add("img")
       p.contentEditable="true";
       c.contentEditable="true";
       elem.parentNode.insertBefore(c, elem.nextSibling);
       c.parentNode.insertBefore(p, c.nextSibling);   
       p.focus();
       e.preventDefault();
     
  }
  else {
    return;
  };
  
});
  


// Drawing image and setting canvas width and height
function loadImage(src,$,c){
  var img = new Image();
  img.onload = function(e) {       
     c.width = this.width;
     c.height = this.height;  
    $.drawImage(img,0,0);
  };
  img.src = src;
}



// ********* Formatting quadratic Mathematical Equations ***********


function formatEqn(elem){
  var div = document.createElement("div"),
      parent = elem.parentNode,
      data=[],
      sign=[],
      sup=[],
      d=0,
      s=0,
      su=0,
      f=0,l,
      firstD=1,
      firstS=1,
      temp ;
  div.contentEditable="true" ;
  div.classList.add("eqan");
  div.classList.add("main");
  parent.replaceChild(div,elem);
    
  for(var i=1;i<elem.textContent.length;i++){
    l = elem.textContent[i]
    if(l=="^"){   
      f=1;
      continue;
    }
    else if(l=="+" || l=="-" || l=="=")
    {
      sign[s]=l;
      s++;
      su++;
      d++;
      f=0;
      firstD=1;
      firstS=1;
    }    
    else if(f){
     var temp = (firstS)?sup[su]=l:sup[su]+=l;
     firstS=0;
    }   
    else {
      var temp = (firstD)?data[d]=l:data[d]+=l;
      firstD=0;
    }   
  }
  
  div.innerHTML="<p><var>";
  
  for (var i=0;i<data.length;i++){
    
    if(sup[i]==undefined && sign[i]==undefined)
      div.innerHTML+=data[i]
    
    else if (sup[i]==undefined)
      div.innerHTML+=data[i]+sign[i];
    
    else if (sign[i]==undefined)
      div.innerHTML+=data[i]+"<sup>"+sup[i]+"</sup>";
    else  
      div.innerHTML+=data[i]+"<sup>"+sup[i]+"</sup>"+ sign[i];
    
  }
   div.innerHTML+="</var></p>";
 
}