# ReactApp para CoderHouse
---------
Hola, mi nombre es Luciano Martin Rosende, y voy a dar comienzo a mi primera documentacion de mi proyecto desde este readme. Esta será una entrega de proyecto final para Coder House, en el modulo de React.
# Inicializar el Proyecto

Inicializa el proyecto desde bash o desde tu CLI preferida
```sh
npm start
```

# Componentes
-------

# NavBar
- Muestra todo el diseño de navegacion para la pagina
- Mapea un array **categories** mostrando las categorias disponibles para ItemListContainer
- Componente CartWidget condicional mostrando si hay o si no hay productos

![N|Solid](https://i.imgur.com/SEPMNjw.png)

# Header
- Un simple header de pagina con el nombre de la empresa

![N|Solid](https://i.imgur.com/vIOMtxc.png)

# ItemListContainer
- Componente que muestra un array de cartas con todas las imagenes, titulos, precios, ver detalles y añadir al carrito
- Contiene 2 subComponentes <ItemList> e <Item> en el que primero se pasa la informacion a itemlist y luego se mapea a item para generar las cartas.
- Se filtra las categorias Con un custom hook

![N|Solid](https://i.imgur.com/QLe9a2A.png)
 
# ItemDetailContainer
- Componente que se encarga de la funcionalidad para mostrar los detalles de los productos cuando se clickea en "Ver Detalles"
- Subcomponentes ItemDetail y CartSuccess, en el que se hace un spread y lleva la informacion del item para mostar info mas detallada, junto con un Counter para agregar mas cantidad, y luego Llevarlo al carrito.

![N|Solid](https://i.imgur.com/B0EqtxR.png)

# Cart
- Componente que se encarga del carrito en su totalidad, y CartContext.js que se encarga de su funcionalidad
- SubComponentes:
- CartLabels(solo diseño)
- CartItem en el que mapea la info del cart y lo muestra en el html 
- CartTotal que muestra el total del precio + envio e impuestos

![N|Solid](https://i.imgur.com/8BE4nsB.png)

# Checkout
- Componente utilizado para mostar el Checkout , junto con un formulario de datos para poner tus datos y la tarjeta. Luego se cargan los datos y se genera una orden.
- Una vez hecha la orden salta una alerta mostrando el id de la orden
- Si no hay stock, se muestra una alerta mostrando que falta stock

![N|Solid](https://i.imgur.com/B0im05O.png)

-------------
# Animaciones
**CartAnimation**
- Se encarga de mostar una animacion cuando no hay nada en el carrito

![N|Solid](https://i.imgur.com/BviQtRd.png)
**LoadingAnimatn**
- Se encarga de mostar una animacion de carga cuando hay una request de alguna DB o cuando algo esta cargando

![N|Solid](https://i.imgur.com/jLEVJyM.png)
**ErrorAnimation**
- Se encarga de mostar una animacion cuando un elemento no fue encontrado

![N|Solid](https://i.imgur.com/dqLEYst.png)

------
## Misceláneos
**Firebase**
- Index: Es donde hacemos el llamado a la DB de firebase
- FireStore: Donde hacemos llamada a los productos y filtramos por categoria
- productdb: Donde creamos los documentos que se mostraran en el ItemListContainer

**CustomHooks**
- AsyncHook: Donde resolvemos la request del filtrado de categorias y mostramos en base a donde este parado el user

**Adapters**
- ProductAdaptation: Creamos un adaptador para cambiar la data de manera escalable

**AsyncMock**
- Nuestra primera DB previo a Firebase

----
**Librerias**
| Libreria| Link| Uso |
| ------ | ------ | ------ |
| ReactFormHook | https://www.react-hook-form.com | Para el form del Checkout
| FontAwesome | https://fontawesome.com | Para iconos adicionales
| Bootstrap | https://getbootstrap.com | Para precomponentes de diseño
| LottieFiles | https://lottiefiles.com | Para animaciones con json
| Toastify | https://fkhadra.github.io/react-toastify/introduction | Para agregar toast con interacciones
| SweetAlerts2 | https://sweetalert2.github.io | Para agregar alertas con interacciones