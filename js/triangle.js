function drawTriangle(rows) {
    for (let i = 1; i <= 10; i++) {
        let line = '';
        if (i <= 9) {
            for (let j = 1; j <= i; j++) {
                line += j;
            }
        } else {
            for (let j = 1; j <= 9; j++) {
                line += j;
            }
            line += (i - 9);
        }
        console.log(line);
    }
}

drawTriangle(10);
{
    function triangle(row){
    for(let j= 1;j<=i;j++){
        document.write("br");
    }
}

}
