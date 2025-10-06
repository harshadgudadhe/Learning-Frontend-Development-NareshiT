//Day15 (DOM)
//DOM Creation
//Task-Add Paragraph
function addPara()
{
       const ap= document.createElement('p');
       ap.textContent="Hello Harsh";
       document.getElementsById("myParas").appendChild(ap);
}


//Task-Add Image
function addImage()
{
       const img= document.createElement('img');
       img.src="........";
       img.width="200";
       img.height="200";
       document.getElementsById("myImgs").appendChild(img);
}