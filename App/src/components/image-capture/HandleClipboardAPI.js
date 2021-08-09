import { renderImage } from "./ImageCapture";

var numImages = 0; /*-----Tracking no of images captured---------*/

/* ------------------------ HANDALING CLIPBOARD API-------------------------- */
function imageCapture() {
  window.addEventListener("paste", function (e) {
    var elem = document.activeElement,
      imgs = e.clipboardData.items,
      parent = elem.parentNode,
      c = document.createElement("div");

    c.classList.add("captured", "main");
    c.id = "img" + numImages;
    // NOTE => [ e.clipboardData.files.length ] : Checks if clipboard item is an IMAGE FILE, if not IMAGE then skip.
    // Not sure if this is an perfect approach but it seems to work fine handling all cases
    if (e.clipboardData.files.length > 0 && elem.classList.contains("main")) {
      parent.replaceChild(c, elem);
      if (imgs == undefined) return false;
      for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].type.indexOf("image") == -1) continue;
        var imgObj = imgs[i].getAsFile();
        var url = window.URL || window.webkitURL;
        var src = url.createObjectURL(imgObj);
        loadImage(src);
      }
      e.preventDefault();
    } else {
      return;
    }
  });
  function loadImage(src) {
    renderImage(src, "img" + numImages);
    numImages++;
  }
}

export { imageCapture };
