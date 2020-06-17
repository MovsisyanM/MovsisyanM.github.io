// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

const notFoundModel = (posX, posY, size, color, Qx, Qy, Qz, context) => {
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
                //#region 4

                // Face 1
                [-4.5 * size, -3 * size, size * 0.5],
                [-3.5 * size, -3 * size, size * 0.5],
                [-3.5 * size, 0 * size, size * 0.5],
                [-2.5 * size, 0 * size, size * 0.5],
                [-2.5 * size, 1 * size, size * 0.5],
                [-3.5 * size, 1 * size, size * 0.5],
                [-3.5 * size, 2 * size, size * 0.5],
                [-4.5 * size, 2 * size, size * 0.5],
                [-4.5 * size, 1 * size, size * 0.5],
                [-6.5 * size, 1 * size, size * 0.5],
                [-6.5 * size, 0 * size, size * 0.5],
                [-5.5 * size, 0 * size, size * 0.5],
                [-4.5 * size, 0 * size, size * 0.5],
                [-4.5 * size, -2 * size, size * 0.5],

                // Face 1
                [-4.5 * size, -3 * size, size * -0.5],
                [-3.5 * size, -3 * size, size * -0.5],
                [-3.5 * size, 0 * size, size * -0.5],
                [-2.5 * size, 0 * size, size * -0.5],
                [-2.5 * size, 1 * size, size * -0.5],
                [-3.5 * size, 1 * size, size * -0.5],
                [-3.5 * size, 2 * size, size * -0.5],
                [-4.5 * size, 2 * size, size * -0.5],
                [-4.5 * size, 1 * size, size * -0.5],
                [-6.5 * size, 1 * size, size * -0.5],
                [-6.5 * size, 0 * size, size * -0.5],
                [-5.5 * size, 0 * size, size * -0.5],
                [-4.5 * size, 0 * size, size * -0.5],
                [-4.5 * size, -2 * size, size * -0.5],

                //#endregion 4

                //#region 0

                // Face 1
                [-0.5 * size, -2.5 * size, size * 0.5],
                [0.5 * size, -2.5 * size, size * 0.5],
                [1.5 * size, -1.5 * size, size * 0.5],

                [1.5 * size, 1.5 * size, size * 0.5],
                [0.5 * size, 2.5 * size, size * 0.5],
                [-0.5 * size, 2.5 * size, size * 0.5],
                [-1.5 * size, 1.5 * size, size * 0.5],

                [-1.5 * size, -1.5 * size, size * 0.5],
                [-0.5 * size, -1.5 * size, size * 0.5],
                [0.5 * size, -1.5 * size, size * 0.5],

                [0.5 * size, 1.5 * size, size * 0.5],
                [-0.5 * size, 1.5 * size, size * 0.5],

                // Face 2
                [-0.5 * size, -2.5 * size, size * -0.5],
                [0.5 * size, -2.5 * size, size * -0.5],
                [1.5 * size, -1.5 * size, size * -0.5],

                [1.5 * size, 1.5 * size, size * -0.5],
                [0.5 * size, 2.5 * size, size * -0.5],
                [-0.5 * size, 2.5 * size, size * -0.5],
                [-1.5 * size, 1.5 * size, size * -0.5],

                [-1.5 * size, -1.5 * size, size * -0.5],
                [-0.5 * size, -1.5 * size, size * -0.5],
                [0.5 * size, -1.5 * size, size * -0.5],

                [0.5 * size, 1.5 * size, size * -0.5],
                [-0.5 * size, 1.5 * size, size * -0.5],

                //#endregion 0

                //#region 4

                // Face 1
                [4.5 * size, -3 * size, size * 0.5],
                [5.5 * size, -3 * size, size * 0.5],
                [5.5 * size, 0 * size, size * 0.5],
                [6.5 * size, 0 * size, size * 0.5],
                [6.5 * size, 1 * size, size * 0.5],
                [5.5 * size, 1 * size, size * 0.5],
                [5.5 * size, 2 * size, size * 0.5],
                [4.5 * size, 2 * size, size * 0.5],
                [4.5 * size, 1 * size, size * 0.5],
                [2.5 * size, 1 * size, size * 0.5],
                [2.5 * size, 0 * size, size * 0.5],
                [3.5 * size, 0 * size, size * 0.5],
                [4.5 * size, 0 * size, size * 0.5],
                [4.5 * size, -2 * size, size * 0.5],

                // Face 2
                [4.5 * size, -3 * size, size * -0.5],
                [5.5 * size, -3 * size, size * -0.5],
                [5.5 * size, 0 * size, size * -0.5],
                [6.5 * size, 0 * size, size * -0.5],
                [6.5 * size, 1 * size, size * -0.5],
                [5.5 * size, 1 * size, size * -0.5],
                [5.5 * size, 2 * size, size * -0.5],
                [4.5 * size, 2 * size, size * -0.5],
                [4.5 * size, 1 * size, size * -0.5],
                [2.5 * size, 1 * size, size * -0.5],
                [2.5 * size, 0 * size, size * -0.5],
                [3.5 * size, 0 * size, size * -0.5],
                [4.5 * size, 0 * size, size * -0.5],
                [4.5 * size, -2 * size, size * -0.5]

                //#endregion 4
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
                console.log(i + " / " + m.verts.length)
                let xyLoc = m.project(m.verts[i][0], m.verts[i][1], m.verts[i][2]);
                let pixLoc = m.formXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);
                m.context.beginPath();
                m.context.arc(pixLoc[0], pixLoc[1], size / 10, 0, 2 * Math.PI, false);
                m.context.fill();
                m.context.stroke();
            }
            //#endregion Vertecies


            //#region Edges

            m.context.strokeStyle = color;

            //#region 4

            //#region Face 1

            for (let iFace1 = 0; iFace1 < 10; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
            m.context.lineTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
            m.context.lineTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
            m.context.lineTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
            m.context.lineTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
            m.context.closePath();
            m.context.stroke();
            //#endregion Face 1

            //#region Face 2

            for (let iFace2 = 14; iFace2 < 24; iFace2++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace2][0], verticesPixLoc[iFace2][1]);
                m.context.lineTo(verticesPixLoc[iFace2 + 1][0], verticesPixLoc[iFace2 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }


            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
            m.context.lineTo(verticesPixLoc[24][0], verticesPixLoc[24][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[25][0], verticesPixLoc[25][1]);
            m.context.lineTo(verticesPixLoc[26][0], verticesPixLoc[26][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[26][0], verticesPixLoc[26][1]);
            m.context.lineTo(verticesPixLoc[27][0], verticesPixLoc[27][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[27][0], verticesPixLoc[27][1]);
            m.context.lineTo(verticesPixLoc[25][0], verticesPixLoc[25][1]);
            m.context.closePath();
            m.context.stroke();

            //#endregion Face 2

            //#region inter-face

            for (let iFaceInter = 0; iFaceInter < 10; iFaceInter++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFaceInter][0], verticesPixLoc[iFaceInter][1]);
                m.context.lineTo(verticesPixLoc[iFaceInter + 14][0], verticesPixLoc[iFaceInter + 14][1]);
                m.context.closePath();
                m.context.stroke();
            }

            //#endregion inter-face

            //#endregion 4


            //#region 0

            //#region Face 1

            for (let iFace1 = 28; iFace1 < 35; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            for (let iFace1 = 36; iFace1 < 39; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[36][0], verticesPixLoc[36][1]);
            m.context.lineTo(verticesPixLoc[39][0], verticesPixLoc[39][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[35][0], verticesPixLoc[35][1]);
            m.context.lineTo(verticesPixLoc[28][0], verticesPixLoc[28][1]);
            m.context.closePath();
            m.context.stroke();

            //#endregion Face 1

            //#region Face 2

            for (let iFace1 = 40; iFace1 < 47; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            for (let iFace1 = 48; iFace1 < 51; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[40][0], verticesPixLoc[40][1]);
            m.context.lineTo(verticesPixLoc[47][0], verticesPixLoc[47][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[51][0], verticesPixLoc[51][1]);
            m.context.lineTo(verticesPixLoc[48][0], verticesPixLoc[48][1]);
            m.context.closePath();
            m.context.stroke();

            //#endregion Face 2

            //#region inter-face

            for (let iFaceInter = 28; iFaceInter < 39; iFaceInter++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFaceInter][0], verticesPixLoc[iFaceInter][1]);
                m.context.lineTo(verticesPixLoc[iFaceInter + 12][0], verticesPixLoc[iFaceInter + 12][1]);
                m.context.closePath();
                m.context.stroke();
            }

            //#endregion inter-face

            //#endregion 0


            //#region 4

            //#region Face 1

            for (let iFace1 = 52; iFace1 < 62; iFace1++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace1][0], verticesPixLoc[iFace1][1]);
                m.context.lineTo(verticesPixLoc[iFace1 + 1][0], verticesPixLoc[iFace1 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[62][0], verticesPixLoc[62][1]);
            m.context.lineTo(verticesPixLoc[52][0], verticesPixLoc[52][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[63][0], verticesPixLoc[63][1]);
            m.context.lineTo(verticesPixLoc[64][0], verticesPixLoc[64][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[64][0], verticesPixLoc[64][1]);
            m.context.lineTo(verticesPixLoc[65][0], verticesPixLoc[65][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[65][0], verticesPixLoc[65][1]);
            m.context.lineTo(verticesPixLoc[63][0], verticesPixLoc[63][1]);
            m.context.closePath();
            m.context.stroke();
            //#endregion Face 1

            //#region Face 2

            for (let iFace2 = 66; iFace2 < 76; iFace2++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFace2][0], verticesPixLoc[iFace2][1]);
                m.context.lineTo(verticesPixLoc[iFace2 + 1][0], verticesPixLoc[iFace2 + 1][1]);
                m.context.closePath();
                m.context.stroke();
            }


            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[66][0], verticesPixLoc[66][1]);
            m.context.lineTo(verticesPixLoc[76][0], verticesPixLoc[76][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[77][0], verticesPixLoc[77][1]);
            m.context.lineTo(verticesPixLoc[78][0], verticesPixLoc[78][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[78][0], verticesPixLoc[78][1]);
            m.context.lineTo(verticesPixLoc[79][0], verticesPixLoc[79][1]);
            m.context.closePath();
            m.context.stroke();

            m.context.beginPath();
            m.context.moveTo(verticesPixLoc[79][0], verticesPixLoc[79][1]);
            m.context.lineTo(verticesPixLoc[77][0], verticesPixLoc[77][1]);
            m.context.closePath();
            m.context.stroke();

            //#endregion Face 2

            //#region inter-face

            for (let iFaceInter = 52; iFaceInter < 65; iFaceInter++) {
                m.context.beginPath();
                m.context.moveTo(verticesPixLoc[iFaceInter][0], verticesPixLoc[iFaceInter][1]);
                m.context.lineTo(verticesPixLoc[iFaceInter + 14][0], verticesPixLoc[iFaceInter + 14][1]);
                m.context.closePath();
                m.context.stroke();
            }

            //#endregion inter-face

            //#endregion 4


            //#endregion Edges
        }
    }

    return m;
}