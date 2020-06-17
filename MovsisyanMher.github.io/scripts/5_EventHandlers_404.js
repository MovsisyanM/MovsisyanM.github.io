// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

//#region Event handlers

// Track the mouse movement of the player
document.addEventListener("mousemove", onMUpdate, false);
// Track the mousewheel of the player
document.addEventListener("wheel", onWUpdate, false);
// Track clicks
document.addEventListener("mousedown", onMouse, false);
// Track Slides
document.addEventListener("touchmove", onSlide, false);

//document.addEventListener("keydown", onKey, false);
//
//document.addEventListener("paste", onPaste, false);


//function onPaste(e)
//{
//    e.stopPropagation();
//    e.preventDefault();
//    data = e.clipboardData || window.clipboardData;
//    // Input is the variable of your choice that becomes the clipboard text
//    // Input = data.getData("Text").replace(/\s/g,"");
//}


// This gets hoisted
function onMUpdate(e) {
    Details.dy += (e.pageX - mouseLocation[0]) * 0.0002;
    Details.dx += (e.pageY - mouseLocation[1]) * 0.0002;

    // Account the last recorded mouse position
    mouseLocation = [e.pageX, e.pageY];
}


// This gets hoisted
function onWUpdate(e) {
    // e.deltaY = 3 for wheelup
    // e.deltaY = -3 for wheeldown
    Details.dz += e.deltaY * 0.0016
}


// This gets hoisted up
//function onKey(e)
//{
//    
//}


// This gets hoisted
function onMouse(e) {
    if (distance(e.pageX, e.pageY, canvas.width / 2, canvas.height * 100) < canvas.height * 99.1) {
        goto("https://github.com/MovsisyanM");
    }
    //else if (distance(e.pageX, e.pageY, canvas.width / 2 + 75 * 1.5, canvas.height * 0.45 + 75 / 2) < 50) {
    //    goto("https://www.linkedin.com/in/mher-movsisyan-b77592197");
    //}
    //else if (distance(e.pageX, e.pageY, canvas.width / 2 + 75 * 3, canvas.height * 0.45 + 75 / 2) < 50) {
    //    goto("https://www.instagram.com/_movsisyan_m_/");
    //}
}


function onSlide(e) {
    Details.dy += (e.touches[0].clientX - mouseLocation[0]) * 0.002;
    Details.dx += (e.touches[0].clientY - mouseLocation[1]) * 0.002;

    // Account the last recorded mouse position
    mouseLocation = [e.touches[0].clientX, e.touches[0].clientY];
}


//#endregion Event handlers