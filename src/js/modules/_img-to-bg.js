
// для webp
function imgToBbWebp(){
  let imgToBG=document.querySelectorAll(".img-to-bg");
  for (var i = 0; i < imgToBG.length; i++) {

    if(imgToBG[i].querySelector('source')){
      imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('source').getAttribute('srcset')+')';
    }
  }
}

// для остальных типов изображений
function imgToBb(){
  let imgToBG=document.querySelectorAll(".img-to-bg");
  for (var i = 0; i < imgToBG.length; i++) {

    if(imgToBG[i].querySelector('img')){
      imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('img').getAttribute('src')+')';
    }

  }
}


Modernizr.on('webp', function (result) {
  if (result) {
    // если браузер поддерживает webp
    imgToBbWebp();
  }
  else {
    // если браузер не поддерживает webp
    imgToBb()
  }
});
