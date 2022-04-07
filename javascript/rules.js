

// let areaGame = createGame.SubmitForm;
// console.log(areaGame)
const largeurTableau = areaGame[0].length;
const hauteurTableau = areaGame.length;

function scanArray(){
    // 1 je scanne mon tableau
    for( let row = 0; row <= hauteurTableau; row++){
        for( let col = 0; col <= hauteurTableau; col++ ){
            console.log(`%c [${row}] [${col}] => ${compteVoisin(row, col)} voisins`, 'color:green;' )
        }
    }  
}

function compteVoisin(row, col){
    let count = 0;
    for( let i = -1; i<=1 ; i++){
        // SI on est sur la row en dehors du tableau
        if( row+i < 0 || row+i > hauteurTableau-1){
            continue
        }
        for( let j = -1; j<=1 ; j++){
            // SI on est sur la col en dehors du tableau
            if( col+j < 0 || col+j > largeurTableau-1){
                continue
            }
            // Je traite le cas ou je suis sur la cellule en cours
            if( i==0 && j== 0){
                continue;
            }
            count += areaGame[row+i][col+j];
        }
    }
    return count;
}

function displayTableau(){
    let string = "";
    for( let row = 0; row < hauteurTableau; row++){
        for( let col = 0; col < hauteurTableau; col++ ){
            if(areaGame[row][col] === 1 ){
                string+="◼️";
            }else{
                string+="◻️"
            }
        }
        string+="\n";
    }
    console.log(string);
}



function next(){
    let tableauMisAJour = [];
    // 1 je scanne mon tableau
    for( let row = 0; row < hauteurTableau; row++){
        tableauMisAJour.push([]);       
        for( let col = 0; col < hauteurTableau; col++ ){
            const voisins   = compteVoisin(row, col);
            const isDead    = areaGame[row][col] === 0;
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
    areaGame = tableauMisAJour;  
}

displayTableau();
// next();
// displayTableau();

// setInterval( () => {
//     console.clear();
//     next();
//     displayTableau();
// },1000);