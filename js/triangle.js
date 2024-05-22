// function drawTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';
//     for (let j = 1; j <= i; j++) {
//                 line += j ;
//             }console.log(line)
//         } 
//     }
//     drawTriangle(10);


let rows=5
function printTriangularShape(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        let counter = 1;
        let spaces = rows - i - 1;

        
        for (let j = 0; j < spaces; j++) {
            row += '   ';
        }

        
        for (let j = 0; j <= i; j++) {
            row += counter + '  ';
            counter++;
        }

        console.log(row);
    }
}printTriangularShape(rows);






