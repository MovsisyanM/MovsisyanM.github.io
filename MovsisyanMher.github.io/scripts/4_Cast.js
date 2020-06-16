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

    //#endregion Physics


    if (getAspectRatio() > 1) {
        //#region Background

        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.fillRect(canvas.width * 2 / 5, canvas.height / 40 - 1, canvas.width * 1 / 5, canvas.height / 4);

        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 40 + canvas.height / 4 - 2, canvas.width / 10, 0, Math.PI, false);
        context.fill();
        context.closePath();

        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.fillRect(0, 0, canvas.width, canvas.height / 40);

        //#endregion Background



        M(canvas.width / 2, canvas.height / 3.5, canvas.width * Details.size, rgba(Theme[1]), Details.Qx, -Details.Qy, Details.Qz, context).draw();


        context.font = canvas.height / 30 + 5 * Math.sin(frameCount / 280) + "px Arial";
        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.textAlign = "center";
        context.fillText("Hello there", canvas.width / 2, canvas.height * 2.8 / 4, canvas.width * 0.9);
        context.font = canvas.height / 30 + "px Arial";
        context.fillText("Want to talk? Mail me at mher@movsisyan.info", canvas.width / 2, canvas.height * 3.6 / 4, canvas.width * 0.9);
        context.fillText("Want to see my code? Find me on GitHub as MovsisyanM", canvas.width / 2, canvas.height * 3.8 / 4, canvas.width * 0.9);
    }
    else {

        //#region Background

        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.fillRect(canvas.width / 3, canvas.height / 40 - 1, canvas.width / 3, canvas.height / 4);

        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 40 + canvas.height / 4 - 2, canvas.width / 6, 0, Math.PI, false);
        context.fill();
        context.closePath();

        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.fillRect(0, 0, canvas.width, canvas.height / 40);

        //#endregion Background



        M(canvas.width / 2, canvas.height / 3.5, canvas.width * (Details.size + 0.015), rgba(Theme[1]), Details.Qx, -Details.Qy, Details.Qz, context).draw();


        context.font = canvas.width / 17 + 5 * Math.sin(frameCount / 280) + "px Arial";
        context.fillStyle = rgba(Theme[2]); // Movsisyan's Gray
        context.textAlign = "center";
        context.fillText("Hello there", canvas.width / 2, canvas.height * 2.8 / 4, canvas.width * 0.9);
        context.font = canvas.width / 38 + "px Arial";
        context.fillText("Want to talk? Mail me at mher@movsisyan.info", canvas.width / 2, canvas.height * 3.6 / 4, canvas.width * 0.9);
        context.fillText("Want to see my code? Find me on GitHub as MovsisyanM", canvas.width / 2, canvas.height * 3.8 / 4, canvas.width * 0.9);
    }


}