document.addEventListener("DOMContentLoaded", function() {
    const nuestroPrimeritoObjeto = {
        claveComoString: 'valor',
        aquiHayUnNumero: 3000,
        esUnBooleano: true,
        unObjetoAnidado: {}
    };

    const nombre = 'Fran Quesada';
    const escuela = 'Fictizia';

    const profesor = {nombre, escuela};

    const string = 'mi string';
    //esto no se puede hacer porque la variable es una constante:
    //string = 'otra cosa diferente'

    const objeto = {
        propiedad1: 'Esta es mi propiedad original'
    }

    objeto.propiedad2= 'Esta es una propiedad nueva' //añade una nueva propiedad
    objeto.propiedad1= 'Esta propiedad la modifico'

    const heroes = {
        dc: ['batman', 'sumerman'],
        marvel: ['spiderman', 'ironman']
    }

    const {dc: heroesDc} = heroes

    const dc = { //objeto
        heroes: { //objeto anidado
            batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
}

const {heroes: {batman}} = dc; //extrae el objeto batman

// const objeto = {
//     nombre: 'Fran Quesada',
//     edad: 26,
// }

//devuelve el mismo objeto
const objetoCongelado = Object.freeze(objeto); //no se puede modificar
objetoCongelado.localidad = 'Madrid'; //no se añade

//pero si podemos crear nuevas copias a partir del objeto congelado
const nuevoObjeto = {
    ...objetoCongelado, //copia todas las propiedades del objeto congelado
    localidad: 'Madrid' //añade una nueva propiedad
}

});    