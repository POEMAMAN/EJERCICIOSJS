

function swap (datos,x,y) {
    let n = datos.lenght;
    if ((x < 0 && x > n) || (y < 0 && y  > n)) {
        alert('Los indices no son válidos')}
            else { [datos[x], datos[y]] = [datos[y], datos[y]]

        }
    }

let arrayy = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(arrayy);
swap(arrayy,1,3);
console.log(arrayy);