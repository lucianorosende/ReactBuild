export const createProductAdaptFromFS = (doc) => {

    const data = doc.data()

    const formatter =  {
        id: doc.id,
        title: data.title,
        price: data.price * 3,
        stock: data.stock,
        category: data.category,
        description: data.description,
        descriptionLarge: data.descriptionLarge,
        imgUrl: data.imgUrl
    }

    return formatter

}