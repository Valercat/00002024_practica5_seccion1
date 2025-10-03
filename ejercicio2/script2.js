document.addEventListener("DOMContentLoaded", function() {
    const carrito = {
        productos: [{ //array de objetos
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5
        },
        {
            nombre: 'chocolate',
            unidades: 2,
            precio: 1.5
        }
    ],
        get precioTotal() { //getter
            let precio = 0;
            for(let i = 0; i <this.productos.length; i++){
                precio += this.productos[i].unidades * this.productos[i].precio;
            }
    }
    }
});