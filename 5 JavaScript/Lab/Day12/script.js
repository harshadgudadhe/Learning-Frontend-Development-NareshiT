//Progress Bar
let progressbar = document.getElementById('progressBar');
let progressContainer = document.getElementById('progressContainer');

let widthCount = 0;

let x = setInterval(()=> {
    if(widthCount<100)
    {
      widthCount++;
      progressbar.style.width=`${widthCount}%`;
      progressbar.textContent=`${widthCount}%`;
    }else{
      clearInterval(x);
      progressContainer.style='';
      progressbar.style='';
      progressbar.textContent='';
      document.getElementById('heading').textContent = 'Welcome';
      document.getElementById('heading').style.color='green';
    }
},100);