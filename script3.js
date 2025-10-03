const estanteria = {
        libros: [{ //array de objetos
            nombre: 'El Quijote',
            autor: 'Miguel de Cervantes',
            leido: false
        },
        {
            nombre: 'Circe',
            autor: 'Madeline Miller',
            leido: true
        },
        {
            nombre: 'The survivor wants to die at the end',
            autor: 'Adam Silvera',
            leido: false
        },
        {
            nombre: 'El principito',
            autor: 'Antoine de Saint-Exupéry',
            leido: true
        },
        {
            nombre: 'Cien años de soledad',
            autor: 'Gabriel García Márquez',
            leido: false
        },
        {
            nombre: 'Angeles y demonios',
            autor: 'Dan Brown',
            leido: true
        },
        {
            nombre: 'Memorias de un amigo imaginario',
            autor: 'Matthew Dicks',
            leido: true
        }],
        log(){
            const { libros } = this;
            let resultado = '';
            for (const libro of libros) {
                const prefijo = libro.leido ? 'ya has' : 'aun no has';
                resultado += `${prefijo} leido el libro ${libro.nombre} de ${libro.autor}\n`;
            }
            console.log(resultado);
        },
        sugerencia(){
            const librosNoLeidos = this.libros.filter(libro => !libro.leido);
            if (librosNoLeidos.length === 0) {
                console.log('¡Ya has leído todos los libros!');
                return;
            }
            const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
            const elementoRandom = librosNoLeidos[indiceRandom];
            console.log(`Te sugerimos leer ${elementoRandom.nombre} de ${elementoRandom.autor}`);
        }
    

}

estanteria.log();
estanteria.sugerencia();
