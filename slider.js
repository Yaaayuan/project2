function $id(id){
    return document.getElementById(id);
}
window.addEventListener("load", function(){

    let wrap = document.querySelector(".wrap") ;
    let curIndex = 0 ;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        curIndex--;
        wrap.style.left = curIndex*-58+"px";
        if(curIndex==0){
            $id("btnLeft").disabled =true;
        }
        $id("btnRight").disabled =false;
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function(){
        curIndex++;
        wrap.style.left = curIndex*-58+"px";
        if(curIndex==2){
            $id("btnRight").disabled =true;
        }
        $id("btnLeft").disabled =false;
    }


})