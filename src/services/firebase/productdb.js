import { fireStoreDB } from "."
import { collection, setDoc, doc } from "firebase/firestore"
import { useEffect } from "react"

const testRef = collection(fireStoreDB, "productos")
    


const DB =  () => {
    
    useEffect(() => {   
        
        // setDoc(doc(testRef, "1a"), {
        //     title: "Pizza",
        //     description: "A la piedra para 2 personas",
        //     descriptionLarge: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña",
        //     price: 50,
        //     stock: 10,
        //     category: "salado",
        //     imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        // })
        // setDoc(doc(testRef, "1b"), {
        //     title: "Hamburguesa",
        //     descriptionLarge:"Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger",
        //     description: "C/ Papas fritas",
        //     price: 100,
        //     category: "salado",
        //     stock: 0,
        //     imgUrl: "https://wallpapercave.com/wp/wp1929358.jpg"
        // })
        // setDoc(doc(testRef, "1c"), {
        //     title: "Brochetas",
        //     descriptionLarge: "En gastronomía, brocheta (del francés brochette, que significa «pincho», «ensartado») se refiere a las comidas servidas ensartadas en un pincho (brochette). En otros países se conoce a este platillo como chuzo o pincho. En Francia es empleada como una hiperonimia. El término se refiere por igual al shish kebab, al satay o al souvlaki, indicando la generalidad de los alimentos cocinados que pueden ir ensartados o espetados en un pincho, que van desde las carnes de mamíferos, verduras, a los pescados y mariscos, etc. La comida servida en una brocheta generalmente es a la parrilla.",
        //     description: "Lleva morrones, pollo y cerdo",
        //     price: 150,
        //     category: "salado",
        //     stock: 5,
        //     imgUrl: "https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg"
        // })
        // setDoc(doc(testRef, "1d"), {
        //     title: "Brownie y helado",
        //     descriptionLarge: "El brownie de chocolate es un pastel de chocolate, obviamente, de tamaño pequeño y súper sabroso, muy parecido a una galleta. Es una receta típica de la cocina estadounidense, que a conquistado los paladares del mundo. Algunas veces –las mejores- se lo cubre con fudge, que es una sirope espesa de chocolate, hiper deliciosa. Pero incluso puede estar mejor, pues se lo puede rellenar con trocitos de nueces, chocolate, toffee crujiente, mantequilla de cacahuete, o lo que la imaginación dicte. ",
        //     description: "Con dulce de leche y helado",
        //     price: 200,
        //     category: "dulce",
        //     stock: 15,
        //     imgUrl: "https://ntbrand-wp.s3.amazonaws.com/livent/wp-content/uploads/2018/08/13155151/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg"
            
        // })
        // setDoc(doc(testRef, "1e"), {
        //     title: "Pata de Pollo",
        //     descriptionLarge:"La carne de pollo (o simplemente pollo) es como se denomina a los tejidos musculares y órganos procedentes del pollo. Es muy frecuente encontrarla en muchos platos y preparaciones de la culinaria de todo el mundo. Su carne se considera un alimento básico y es por esta razón por la que se incluye en el índice de precios al consumo. La carne de pollo es una de las más saludables del mercado. Es un alimento con una alta densidad de nutrientes.",
        //     description: "C/ Pure de papas",
        //     price: 259,
        //     category: "salado",
        //     stock: 10,
        //     imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-20_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        // })
        // setDoc(doc(testRef, "1f"), {
        //     title: "Almuerzo Economico",
        //     descriptionLarge: "El brunch es un tipo de comida que se come entre el final de la mañana y el comienzo de la tarde, y que combina platos y bebidas típicos de la primera y segunda comida de la día, generalmente comenzando con dulce. El término brunch es una palabra inglesa que combina las palabras desayuno ( comida de la mañana ) y almuerzo ( comida del mediodía ). Suele tomar la forma de un buffet donde todos vienen a servirse según sus gustos y apetito.",
        //     description: "Brunch para 3",
        //     price: 329,
        //     category: "descuento",
        //     stock: 5,
        //     imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-10_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        // })
        // setDoc(doc(testRef, "1g"), {
        //     title: "Tarta de Fresas",
        //     descriptionLarge: "La tarta de fresas es una de las tartas clásicas de fruta que se hace de muchas formas y cuya capa superior está hecha normalmente de fresas. Es un postre muy común en toda Europa. Dos de las variedades más comunes son: La base es una capa de pastaflora1​ untada de confite sobre la que se presenta una capa de galletas. Sobre esto se disponen las fresas. Las fresas se disponen sobre una base de pastaflora.",
        //     description: "Porcion para 2",
        //     price: 221,
        //     category: "dulce",
        //     stock: 7,
        //     imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-14_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        // })
        // setDoc(doc(testRef, "1h"), {
        //     title: "Tortita de kiwi",
        //     descriptionLarge: "Una tarta (en algunos países de Hispanoamérica, torta), también llamada pastel, es un tipo de pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes. En este caso tiene un relleno de kiwi con rodajas de kiwi por encima",
        //     description: "Porcion para 1",
        //     price: 124,
        //     stock: 5,
        //     category: "descuento",
        //     imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-22_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        // })
        // setDoc(doc(testRef, "1i"), {
        //     title: "Pancakes",
        //     descriptionLarge: "El panqueque es una especie de crepe utilizado en las cocinas argentina, chilena, guatemalteca, hondureña, costarricense, mexicana, peruana, uruguaya y venezolana, para hacer preparaciones tanto dulces como saladas.Su uso más habitual es para la elaboración de panqueques con dulce de leche, que es como un crepe untado con dulce de leche, enrollado para formar lo que comúnmente se denomina panqueque de dulce de leche. También se hace con manzana caramelizada, flameado, y se acompaña con helado de crema de vainilla. Se lo acompaña también con un coulis de fresa, melocotón o relleno de plátano. ",
        //     description: "Con caramelo y Helado",
        //     price: 220,
        //     stock: 15,
        //     category: "dulce",
        //     imgUrl: "https://c4.wallpaperflare.com/wallpaper/626/14/515/dessert-sweet-food-cake-wallpaper-preview.jpg"
        // })
        // setDoc(doc(testRef, "1j"), {
        //     title: "Tiramisu",
        //     descriptionLarge: "El tiramisú (del italiano tiramisù) es un pastel frío que se monta en capas. No existe una receta única de elaboración, sino variantes a partir de una serie de ingredientes base que pueden ser representados por distintos productos. Un tiramisú se compone siempre de un ingrediente sólido humedecido en café, sobre el que se superpone (de forma alterna o no) una crema cuya base son huevos batidos con azúcar; se presenta espolvoreado con cacao en polvo. En principio, no lleva ni queso Mascarpone ni nata u otras grasas similares, porque todos esos lípidos no hacen más que tener un peso en el estómago y ralentizar la digestión, con el resultado de obtener el efecto contrario, es decir, crear cansancio y somnolencia.",
        //     description: "Para compartir",
        //     price: 190,
        //     stock: 8,
        //     category: "dulce",
        //     imgUrl: "https://www.paulinacocina.net/wp-content/uploads/2020/01/tiramisu-raffaele-diomede-copy.jpg"
        // })
        // setDoc(doc(testRef, "1k"), {
        //     title: "Ñoquis de papa",
        //     descriptionLarge: "Los ñoquis o ñocos son un tipo de pasta italiana. Se elaboran con patata, harina (puede ser de maíz, castaña, pulpa de calabaza, de espinaca​) y queso de ricota (con o sin espinacas). Una variedad muy conocida en las regiones de Friul-Venecia Julia y Trentino-Alto Adigio y denominada gnocchi di pane se hace con pan rallado.(Pero los gnocchi originales siguen siendo las de patatas). Los ñoquis aparecen frecuentemente bajo los listados de platos referentes a pasta a pesar de tener unos ingredientes muy diferentes y de poseer diferente forma de preparación. Los acompañamientos del ñoqui suelen ser salsa de tomate, queso gorgonzola, mantequilla, coronados con hojitas de salvia. ",
        //     description: "Con salsa de tomate",
        //     price: 170,
        //     stock: 5,
        //     category: "descuento",
        //     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/%C3%91oquis1.jpg"
        // })
        // setDoc(doc(testRef, "1l"), {
        //     title: "Milanesa Napolitana",
        //     descriptionLarge: "La milanesa a la napolitana es una milanesa frita cubierta con salsa de tomate, jamón cocido, queso de pasta blanda (mozzarella u otro) y especias (orégano, pimienta y ají molido) que se gratina. A pesar de su nombre, no es originaria de Nápoles sino de Buenos Aires: fue creada alrededor de 1940 en el hoy desaparecido restaurante 'Nápoli' (propiedad de José Nápoli), ubicado en el bajo porteño, frente al Luna Park.La milanesa a caballo es una milanesa frita de carne vacuna con dos huevos fritos encimados. Generalmente se acompaña con papas fritas.En Chile, y Perú este plato se llama milanesa (o bistec) a lo pobre y lleva también cebolla.La milanesa a la provenzal se hace agregando ajo y perejil al rebozado.",
        //     description: "Tambien a caballo o provenzal",
        //     price: 250,
        //     stock: 8,
        //     category: "descuento",
        //     imgUrl: "https://cdn7.kiwilimon.com/brightcove/6364/6364.jpg"
        // })        
    }, [])

    return null
}

export default DB