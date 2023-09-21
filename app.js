do{  
    alert(`Bienvenido a PEARLSOL \n La tienda de productos de camping n°1 del pais`);        
    let continuar = prompt('¿Desea consultar nuestra lista de productos? si/no');
        if (continuar.toLowerCase() == 'si') {
        categoria = prompt('Indique numero de categoria: \n 1. Carpas \n 2. Linternas(NO DISPONIBLE) \n 3. Anafes(NO DISPONIBLE)');
        
        if (categoria == '1') {
        
                    categoriaCarpa = prompt('Seleccione un numero de producto para obtener más informacion: \n 1. Carpa Kabú Pro \n 2. Carpa Atenas Pro \n 3. Carpa Aguila')
                    if(categoriaCarpa == '1'){
                        mostrarCarpa(listaDeCarpa[0]);
                            agregarAlCarrito = prompt('¿Desea agregar esta carpa al carrito? si/no');
                        if (agregarAlCarrito == 'si') {
                            miCarrito.push(listaDeCarpa[0]);
                            alert('Producto agregado al carrito.');
                        }
                    }
                    if (categoriaCarpa == '2') {
                        mostrarCarpa(listaDeCarpa[1]);
                            agregarAlCarrito = prompt('¿Desea agregar esta carpa al carrito? si/no');
                        if (agregarAlCarrito == 'si') {
                            miCarrito.push(listaDeCarpa[1]);
                            alert('Producto agregado al carrito.');
                        }
                    }
                    if(categoriaCarpa == '3'){
                        mostrarCarpa(listaDeCarpa[2]);
                            agregarAlCarrito = prompt('¿Desea agregar esta carpa al carrito? si/no');
                        if (agregarAlCarrito == 'si') {
                            miCarrito.push(listaDeCarpa[2]);
                            alert('Producto agregado al carrito.');
                        }
                    }
                    continuarFinal = prompt("¿Desea volver al menu principal?")     
            }       
        }        
    } while ( continuarFinal == 'si');   
        
        if(continuarFinal == 'no'){
        
            decisionCarrito = prompt('¿Antes de irse, le gustaria revisar como quedo su carrito? si/no')
        
        if (decisionCarrito == 'si') {
            if (miCarrito.length === 0) 
                    {
                        alert('El carrito está vacío.');
                    } 
                    else 
                    {
                        
                        for (const carpa of miCarrito) {
                            mostrarCarpa(carpa);
                        }
                        alert(`Productos en el carrito: ${mostrarCarpa(carpa)}`);
                    }
                } 
                if(decisionCarrito == 'no'){
                    alert('Gracias por visitar nuestro sitio \n Esperemos que vuelva pronto \n PEARLSOL ARGENTINA')
                }      
         }    