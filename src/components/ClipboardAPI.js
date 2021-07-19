


/*********** Handling Image capture ******************/

export default function imageCapture(){

window.addEventListener('paste', function(e){
  
 var elem = document.activeElement,
     imgs = e.clipboardData.items,
     c = document.createElement("canvas"),
     p = document.createElement("p"),
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
       c.classList.add("main");
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
}
