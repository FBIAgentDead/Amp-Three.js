
//awake is called when page is loaded
function awake(){
    update();
}

//The update is called on each frame
function update(){
    requestAnimationFrame(update);
}

awake();