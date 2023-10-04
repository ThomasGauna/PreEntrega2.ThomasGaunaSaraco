do{  
    alert(`Bienvenido a PEARLSOL \n La tienda de productos de camping n°1 del pais`);        
    let continuar = prompt('¿Desea consultar nuestra lista de productos? si/no');
        if (continuar.toLowerCase() == 'si') {
            categoria = prompt('Indique numero de categoria: \n 1. Carpas \n 2. Linternas(NO DISPONIBLE) \n 3. Anafes(NO DISPONIBLE)');
        
        if (categoria == '1') {
        
            if (categoria === '1') {
                let categoriaCarpa = prompt('Seleccione un número de producto para obtener más información: \n 1. Carpa Kabú Pro \n 2. Carpa Atenas Pro \n 3. Carpa Águila');
          
                    if (categoriaCarpa === '1' || categoriaCarpa === '2' || categoriaCarpa === '3') {
                    
                        let productoSeleccionado = listaDeCarpa[parseInt(categoriaCarpa) - 1];
                            mostrarCarpa(productoSeleccionado);
            
                        let agregarCompra = prompt('¿Desea agregar esta carpa al carrito? si/no');
            
                        if (agregarCompra === 'si') {
                            agregarAlCarrito(productoSeleccionado);

                        }else{
                            if(agregarCompra === 'no') {
                                alert('Producto no agregado al carrito');
                            }
                        }
                    }
            }
        }
                continuarFinal = prompt("¿Desea volver al menu principal? si/no")     
        }       
               
    } while ( continuarFinal == 'si');   
        
        if(continuarFinal == 'no'){
        
            decisionCarrito = prompt('¿Antes de irse, le gustaria revisar como quedo su carrito? si/no')
            
            if (decisionCarrito === 'si') {
                
                if (miCarrito.length === 0) {
                  alert('El carrito está vacío.');

                }else{
                    alert('Productos en el carrito:');
                  
                    for (const carpa of miCarrito) {
                        mostrarCarpa(carpa);
                    }
                
                    let total = 0;
                    for (const producto of miCarrito) {
                        total += producto.precio;
                    }
            
                    alert('Total del carrito: ' + total.toFixed(2));
                    alert('Gracias por visitar nuestro sitio \n Esperamos que vuelva pronto \n PEARLSOL ARGENTINA');
                }

            }else{
                if(decisionCarrito == 'no'){
                    alert('Gracias por visitar nuestro sitio \n Esperemos que vuelva pronto \n PEARLSOL ARGENTINA')
                }
            }      
        }    