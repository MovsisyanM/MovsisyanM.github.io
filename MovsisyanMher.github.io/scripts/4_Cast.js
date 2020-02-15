// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanMher/
let git = new Image();
git.src = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-icon%2Fgithub-logo_318-53553.jpg";
let fb = new Image();
fb.src = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1509135109flat-facebook-logo-black-and-white-png.png";
let insta = new Image();
insta.src = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyoyoimage.com%2Fwp-content%2Fuploads%2F2018%2F02%2FInstagram-Logo-pic.png";
// Draws the page
const Cast = () => 
{
    //#region Background
    context.fillStyle = rgba(Theme[2]);
    context.fillRect(0, 0, canvas.width, canvas.height / 13);
    context.fillStyle = rgba(Theme[1]);
    context.font = canvas.height / 32 + "px Arial";
    context.fillText("Movsisyan", canvas.width / 50, canvas.height / 19, canvas.width / 3);
    //#endregion Background

    Details.Qx += Details.dx;
    Details.Qy += Details.dy;
    Details.Qz += Details.dz;
    Details.dx *= Details.airResist;
    Details.dy *= Details.airResist;
    Details.dz *= Details.airResist;


    M(canvas.width / 4, canvas.height / 2, Details.size, rgba(Theme[0]), Details.Qx, Details.Qy, Details.Qz, context).draw();

    
    context.font = canvas.height / 38 + "px Arial";
    context.fillStyle = rgba(Theme[2]);
    context.fillText("I am on a 2 year break. (2019 - 2021)", canvas.width * 0.5, canvas.height * 0.25, canvas.width / 3);
    context.fillText("For future endeavors, feel free to", canvas.width * 0.5, canvas.height * 0.35, canvas.width / 3);
    context.fillText("send an email to movsisyan@protonmail.com", canvas.width * 0.5, canvas.height * 0.39, canvas.width / 3);

    context.drawImage(git, canvas.width / 2, canvas.height * 0.45, 75, 75);
    context.drawImage(fb, canvas.width / 2 + 85, canvas.height * 0.43, 100, 100);
    context.drawImage(insta, canvas.width / 2 + 200, canvas.height * 0.45, 75, 75);
}