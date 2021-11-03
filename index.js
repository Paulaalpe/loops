/*Iteración #1: Usa includes      Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.*/
// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

// function encontrarCamiseta (param) {
//     for (let i=0; i<param.length; i++) {
//         if (param[i].includes('Camiseta')){
//             console.log(param[i]);
//         };
//     };
// };

/*Iteración #2: Condicionales avanzados    Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.*/

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function alumnosAprobados(param) {
    for (i=0; i<param.length;i++){
        if ((param[i].T1 === true && param[i].T2 === true) || (param[i].T2 === true && param[i].T3 === true)||(param[i].T1 === true && param[i].T3 === true) ){
            param[i].isApproved = true;
            console.log(param[i])
        } 
    };
};