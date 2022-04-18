const playGame = document.getElementById("play");
const pauseGame = document.getElementById("pause");
const cycle = document.getElementById("time");
let cycleNbr = 0;

let tableau = createGame.areaGame;
let start = false;

function play(event) {
    event.preventDefault();
    tableau = createGame.areaGame;
    start = true;
    run(start);
    return tableau, console.log(tableau)
}

function run(start) {
    if (start = true) 
        {
            setInterval( () => {
            console.clear();
            scanArray();
            next();
            displayTableau();
            cycleNbr++;
            cycle.innerHTML=cycleNbr;
            },500);
        } 
        else {
            clearInterval();
        }
        
}



function scanArray(){
    // 1 je scanne mon tableau
    for( let row = 0; row <= tableau.length; row++){
        for( let col = 0; col <= tableau.length; col++ ){
             compteVoisin(row, col);
            //  console.log(`%c [${row}] [${col}] => ${compteVoisin(row, col)} voisins`, 'color:green;' )
        }
    }  
}

function compteVoisin(row, col,){
    let count = 0;
    for( let i = -1; i<=1 ; i++){
        // SI on est sur la row en dehors du tableau
        if( row+i < 0 || row+i > tableau.length-1){
            continue;
        }
        for( let j = -1; j<=1 ; j++){
            // SI on est sur la col en dehors du tableau
            if( col+j < 0 || col+j > tableau[0].length-1){
                continue;
            }
            // Je traite le cas ou je suis sur la cellule en cours
            if( i==0 && j== 0){
                continue;
            }
            count += tableau[row+i][col+j];
        }
    }
    return count;
}





function next(){
    let tableauMisAJour = [];
    // 1 je scanne mon tableau
    for( let row = 0; row < tableau.length; row++){
        tableauMisAJour.push([]);       
        for( let col = 0; col < tableau.length; col++ ){
            const voisins   = compteVoisin(row, col);
            const isDead    = tableau[row][col] === 0;
            


            //1 La cellule est morte && elle a exactement 3 voisins => elle vit!
            if( isDead && voisins === 3){
                tableauMisAJour[row].push(1);
                continue;
            }

            //2 La cellule est vivante et elle a 2 ou 3 voisins => elle vit!
            if( !isDead && (voisins === 3 || voisins === 2) ){
                tableauMisAJour[row].push(1);
                continue;
            }

            //3 La cellule a moins de 2 voisin ou plus de 3 voisins => elle meurt
            tableauMisAJour[row].push(0);

        }
    }
    tableau = tableauMisAJour;
    // console.log(tableau);
}

function displayTableau(){
    // console.table(tableau)
    let ligne = document.getElementsByClassName(`ligne`)
    for( let row = 0; row < tableau.length; row++){ 
        for( let col = 0; col < tableau.length; col++ ){
            let cellToChange = ligne[row].childNodes[col];
            // console.log(cellToChange)
            if(tableau[row][col] === 1 ){
                cellToChange.classList.remove('mort')
                cellToChange.classList.add('vivant')
                
            }else if(tableau[row][col] === 0){
                cellToChange.classList.remove('vivant')
                cellToChange.classList.add('mort')
            }
        }
    }
   
}



playGame.addEventListener('click', play);
pauseGame.addEventListener('click', function(event){
    event.preventDefault();
    clearInterval(setInterval);
})