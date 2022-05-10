import { fireStoreDB } from "."
import { collection, setDoc, doc } from "firebase/firestore"
import { useEffect } from "react"

const testRef = collection(fireStoreDB, "productos")
    


const DB = () => {
    
    useEffect(() => {   
        
        setDoc(doc(testRef, "1"), {
            title: "Pizza",
            description: "A la piedra para 2 personas",
            descriptionLarge: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña",
            price: 50,
            stock: 10,
            category: "salado",
            imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        })
        setDoc(doc(testRef, "2"), {
            title: "Hamburguesa",
            descriptionLarge:"Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger",
            description: "C/ Papas fritas",
            price: 100,
            category: "salado",
            stock: 0,
            imgUrl: "https://wallpapercave.com/wp/wp1929358.jpg"
        })
        setDoc(doc(testRef, "3"), {
            title: "Brochetas",
            descriptionLarge: "En gastronomía, brocheta (del francés brochette, que significa «pincho», «ensartado») se refiere a las comidas servidas ensartadas en un pincho (brochette). En otros países se conoce a este platillo como chuzo o pincho. En Francia es empleada como una hiperonimia. El término se refiere por igual al shish kebab, al satay o al souvlaki, indicando la generalidad de los alimentos cocinados que pueden ir ensartados o espetados en un pincho, que van desde las carnes de mamíferos, verduras, a los pescados y mariscos, etc. La comida servida en una brocheta generalmente es a la parrilla.",
            description: "Lleva morrones, pollo y cerdo",
            price: 150,
            category: "salado",
            stock: 5,
            imgUrl: "https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg"
        })
        setDoc(doc(testRef, "4"), {
            title: "Brownie y helado",
            descriptionLarge: "El brownie de chocolate es un pastel de chocolate, obviamente, de tamaño pequeño y súper sabroso, muy parecido a una galleta. Es una receta típica de la cocina estadounidense, que a conquistado los paladares del mundo. Algunas veces –las mejores- se lo cubre con fudge, que es una sirope espesa de chocolate, hiper deliciosa. Pero incluso puede estar mejor, pues se lo puede rellenar con trocitos de nueces, chocolate, toffee crujiente, mantequilla de cacahuete, o lo que la imaginación dicte. ",
            description: "Con dulce de leche y helado",
            price: 200,
            category: "dulce",
            stock: 15,
            imgUrl: "https://ntbrand-wp.s3.amazonaws.com/livent/wp-content/uploads/2018/08/13155151/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg"
            
        })
        setDoc(doc(testRef, "5"), {
            title: "Pata de Pollo",
            descriptionLarge:"La carne de pollo (o simplemente pollo) es como se denomina a los tejidos musculares y órganos procedentes del pollo. Es muy frecuente encontrarla en muchos platos y preparaciones de la culinaria de todo el mundo. Su carne se considera un alimento básico y es por esta razón por la que se incluye en el índice de precios al consumo. La carne de pollo es una de las más saludables del mercado. Es un alimento con una alta densidad de nutrientes.",
            description: "C/ Pure de papas",
            price: 259,
            category: "salado",
            stock: 10,
            imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-20_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        })
        setDoc(doc(testRef, "6"), {
            title: "Almuerzo Economico",
            descriptionLarge: "El brunch es un tipo de comida que se come entre el final de la mañana y el comienzo de la tarde, y que combina platos y bebidas típicos de la primera y segunda comida de la día, generalmente comenzando con dulce. El término brunch es una palabra inglesa que combina las palabras desayuno ( comida de la mañana ) y almuerzo ( comida del mediodía ). Suele tomar la forma de un buffet donde todos vienen a servirse según sus gustos y apetito.",
            description: "Brunch para 3",
            price: 329,
            category: "agridulce",
            stock: 5,
            imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-10_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        })
        setDoc(doc(testRef, "7"), {
            title: "Tarta de Fresas",
            descriptionLarge: "La tarta de fresas es una de las tartas clásicas de fruta que se hace de muchas formas y cuya capa superior está hecha normalmente de fresas. Es un postre muy común en toda Europa. Dos de las variedades más comunes son: La base es una capa de pastaflora1​ untada de confite sobre la que se presenta una capa de galletas. Sobre esto se disponen las fresas. Las fresas se disponen sobre una base de pastaflora.",
            description: "Porcion para 2",
            price: 221,
            category: "dulce",
            stock: 7,
            imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-14_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        })
        setDoc(doc(testRef, "8"), {
            title: "Tortita de kiwi",
            descriptionLarge: "Una tarta (en algunos países de Hispanoamérica, torta), también llamada pastel, es un tipo de pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes. En este caso tiene un relleno de kiwi con rodajas de kiwi por encima",
            description: "Porcion para 1",
            price: 124,
            stock: 5,
            category: "agridulce",
            imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-22_4d470f76dc99e18ad75087b1b8410ea9.jpg"
        })
    }, [])

    return null
}

export default DB