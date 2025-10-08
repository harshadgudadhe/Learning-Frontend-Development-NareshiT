//LabDay10 
//Task: Building a Simple Image Carousel
const imgArray=["./images/img1.jpg","./images/img2.jpg","./images/img3.png","./images/img4.png","./images/img5.png"]; //Array of URL's

let img = document.getElementById('imgs');              //Dom Selection
let i = 0;                                              //indexCounter
img.setAttribute('src',imgArray[i]);                    //set-Default Image

function prev()                                         //Event1 who will manipulate to the DOM at runtime
{
    if(i>0)
    {
      i--;
      img.setAttribute('src',imgArray[i]);              
    }else{
      i = imgArray.length-1;
      img.setAttribute('src',imgArray[i]);
    }
}

function next()                                          //Event2 who will manipulate to the DOM at runtime
{
    if(i<imgArray.length-1)
    {
      i++;
      img.setAttribute('src',imgArray[i]);
    }else{
      i=0;
      img.setAttribute('src',imgArray[i]);
    }
}
//--------------------------------------------------------------------------------------------