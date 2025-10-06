//

const inputUrl = document.getElementById('inp')

const image = document.getElementById('image');

function change()
{
    image.src= inputUrl.value;
}

//----------------------------------------------------------------------------------

function rotateImage()
{
   deg = deg+720;
   image.style.transform = "rotate(720deg)";
// image.style.transform = `rotate(${deg} deg)`;  
}
//---------------------------------------------------------------------------------

function showHideImage()
{
   image.classList.add('hide'); 
}
//---------------------------------------------------------------------------------

/* DOM Creation*/

