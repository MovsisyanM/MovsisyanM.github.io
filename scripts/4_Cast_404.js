// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

// Draws the page
const Cast = () => {

    //#region Physics

    Details.Qx += Details.dx;
    Details.Qy += Details.dy;
    Details.Qz += Details.dz;
    Details.dx *= Details.airResist;
    Details.dy *= Details.airResist;
    Details.dz *= Details.airResist;

    frameCount++;
    (getAspectRatio() <= 1) ? Device.phoneLayout = true : Device.phoneLayout = false

    //#endregion Physics




    //#region Background

    context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = rgba(Theme[1]); // White
    context.fillRect(canvas.width * (Device.phoneLayout ? 1 / 3 : 2 / 5), canvas.height / 40 - 1, canvas.width / (Device.phoneLayout ? 3 : 5), canvas.height / 4);
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 40 + canvas.height / 4 - 2, canvas.width / (Device.phoneLayout ? 6 : 10), 0, Math.PI, false);
    context.fill();
    context.closePath();

    context.fillStyle = rgba(Theme[1]); // White
    context.fillRect(0, 0, canvas.width, canvas.height / 40);

    //#endregion Background


    notFoundModel(canvas.width / 2, canvas.height / 3.5, canvas.width * (Details.size + (Device.phoneLayout ? 0.015 : 0)), rgba(Theme[2]), Details.Qx, -Details.Qy, Details.Qz, context).draw();
    Device.phoneLayout ? context.font = canvas.width / 14 + 9 * Math.sin(frameCount / 240) + "px Arial" : context.font = canvas.height / 12 + 9 * Math.sin(frameCount / 240) + "px Arial";
    context.fillStyle = rgba(Theme[1]); // White
    context.textAlign = "center";
    context.fillText("Page not found", canvas.width / 2, canvas.height * 2.8 / 4, canvas.width * 0.9);
    Device.phoneLayout ? context.font = canvas.width * Device.bottomTextFontSizer + "px Arial" : context.font = canvas.height * Device.bottomTextFontSizer + "px Arial";
    context.fillText("Mail: mher@movsisyan.info", canvas.width / 2, canvas.height * 3.6 / 4, canvas.width * 0.9);
    context.fillText("Click here to see my GitHub (MovsisyanM)", canvas.width / 2, canvas.height * 3.8 / 4, canvas.width * 0.9);
}