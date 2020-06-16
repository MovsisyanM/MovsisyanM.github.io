// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

const M = (posX, posY, size, color, Qx, Qy, Qz, context) => {
    const m =
    {
        x: posX,
        y: posY,
        size: size,
        color: color,
        Qx: Qx + Math.PI,
        Qy: Qy,
        Qz: Qz,
        context: context,
        verts:
            [
                [-3 * size, 3 * size, size * 0.5],    // Left Bottom Front
                [-3 * size, 3 * size, size * -0.5],    // Left Bottom Back

                [-4 * size, 2 * size, size * 0.5],    // Left Lower Front
                [-4 * size, 2 * size, size * -0.5],    // Left Lower Back

                [-4 * size, -2 * size, size * 0.5],    // Left Upper Front
                [-4 * size, -2 * size, size * -0.5],    // Left Upper Back

                [-3 * size, -3 * size, size * 0.5],    // Left Top Front
                [-3 * size, -3 * size, size * -0.5],    // Left Top Back

                [0, 0, size * 0.5],    // Middle Front
                [0, 0, size * -0.5],    // Middle Back

                [3 * size, -3 * size, size * 0.5],    // Right Top Front
                [3 * size, -3 * size, size * -0.5],    // Right Top Back

                [4 * size, -2 * size, size * 0.5],    // Right Upper Front
                [4 * size, -2 * size, size * -0.5],    // Right Upper Back

                [4 * size, 2 * size, size * 0.5],    // Right Lower Front
                [4 * size, 2 * size, size * -0.5],    // Right Lower Back

                [3 * size, 3 * size, size * 0.5],    // Right Bottom Front
                [3 * size, 3 * size, size * -0.5],    // Right Bottom Back

                [3 * size, -size, size * 0.5],    // Right Uppity Front
                [3 * size, -size, size * -0.5],    // Right Uppity Back

                [0, 2 * size, size * 0.5],    // Middle Front
                [0, 2 * size, size * -0.5],    // Middle Back

                [-3 * size, -size, size * 0.5],    // Left Uppity Front
                [-3 * size, -size, size * -0.5]     // Left Uppity Back
            ],
        project: (x, y, z) => {
            // x
            let xRotQz = x * Math.cos(m.Qz) + y * Math.sin(m.Qz);

            // y
            let yRotQz = y * Math.cos(m.Qz) - x * Math.sin(m.Qz);

            // z
            let zRotQz = z;

            // x 
            let xRotQzQx = xRotQz;

            // y
            let yRotQzQx = yRotQz * Math.cos(m.Qx) + zRotQz * Math.sin(m.Qx);

            // z
            let zRotQzQx = zRotQz * Math.cos(m.Qx) - yRotQz * Math.sin(m.Qx);

            // x
            let xRotQzQxQy = xRotQzQx * Math.cos(m.Qy) + zRotQzQx * Math.sin(m.Qy);

            // y
            let yRotQzQxQy = yRotQzQx;

            return [xRotQzQxQy, yRotQzQxQy];
        },
        formXYtoPixels: (x, y) => {
            return [x + posX, -y + posY];
        },
        draw: () => {
            //#region Vertecies
            context.fillStyle = color;
            context.strokeStyle = color;
            var verticesPixLoc = [];
            for (let i = 0; i < m.verts.length; i++) {
                // locations
                let xyLoc = m.project(m.verts[i][0], m.verts[i][1], m.verts[i][2]);
                let pixLoc = m.formXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);
                m.context.beginPath();
                m.context.arc(pixLoc[0], pixLoc[1], size / 10, 0, 2 * Math.PI, false);
                m.context.fillStyle = rgba(Theme[1]);
                m.context.fill();
                m.context.stroke();
            }
            //#endregion Vertecies


            //#region Edges

            m.context.strokeStyle = color;

            // Depth Edges
            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
            m.context.lineTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
            m.context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
            m.context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
            m.context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
            m.context.lineTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
            m.context.lineTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
            m.context.lineTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
            m.context.lineTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
            m.context.lineTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
            m.context.lineTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
            m.context.lineTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
            m.context.lineTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
            m.context.stroke();

            // Outline Edges Front
            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
            m.context.lineTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
            m.context.lineTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
            m.context.lineTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
            m.context.lineTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
            m.context.lineTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
            m.context.lineTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
            m.context.lineTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
            m.context.lineTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
            m.context.lineTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
            m.context.lineTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
            m.context.lineTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
            m.context.lineTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
            m.context.stroke();

            // Outline Edges Back
            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
            m.context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
            m.context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
            m.context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
            m.context.lineTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
            m.context.lineTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
            m.context.lineTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
            m.context.lineTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
            m.context.lineTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
            m.context.lineTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
            m.context.lineTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
            m.context.lineTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
            m.context.lineTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
            m.context.stroke();


            //#endregion Edges
        }
    }

    return m;
}