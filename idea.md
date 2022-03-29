### Partir sur des modules

### Faire au plus simple et penser évolutif

### Le HTML ne doit servir qu'à afficher ce que tu veux afficher

```js


const array = [
    [0,0,0],
    [0,1,0],
    [0,1,0],
]


function scanArray(){
    // 1 je scanne mon tableau
    for( const row of array ){
        for( const col of row ){
            console.log(`%c [${row}] [${col}] => ${compteVoisin(row, col)} voisins`, 'color:green;' )
        }
    }  
}

function compteVoisin(row, col){
    console.log(array[row][col]);
    

    const largeurTableau = array[0].length;
    const hauteurTableau = array.length;

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
            

            count += array[row+i][col+j];
        }
    }
    return count;
}



```
