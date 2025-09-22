//Brain-Stroming
// 4 3 2 1
// 3 2 1
// 2 1 
// 1



//--------------------------------------------------------------------------------------------

//callback function:

function mad(){
    console.log("I'm mad");
}

function mainFun(x)
{
    x();
}
mainFun(mad);