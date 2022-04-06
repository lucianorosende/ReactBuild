const productos = [

    {
        id: 1,
        title: "Comida 1",
        description: "Descripcion de Comida 1",
        price: 50,
        imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg"

    },
    {
        id: 2,
        title: "Comida 2",
        description: "Descripcion de Comida 2",
        price: 100,
        imgUrl: "https://wallpapercave.com/wp/wp1929358.jpg"
    },
    {
        id: 3,
        title: "Comida 3",
        description: "Descripcion de Comida 3",
        price: 150,
        imgUrl: "https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg"
    },
    {
        id: 4,
        title: "Comida 4",
        description: "Descripcion de Comida 4",
        price: 200,
        imgUrl: "https://ntbrand-wp.s3.amazonaws.com/livent/wp-content/uploads/2018/08/13155151/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg"
    },
    {
        id: 5,
        title: "Comida 5",
        description: "Descripcion de Comida 5",
        price: 200,
        imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-20_4d470f76dc99e18ad75087b1b8410ea9.jpg"
    },
    {
        id: 6,
        title: "Comida 6",
        description: "Descripcion de Comida 6",
        price: 200,
        imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-10_4d470f76dc99e18ad75087b1b8410ea9.jpg"
    },
    {
        id: 7,
        title: "Comida 7",
        description: "Descripcion de Comida 7",
        price: 200,
        imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-14_4d470f76dc99e18ad75087b1b8410ea9.jpg"
    },
    {
        id: 8,
        title: "Comida 8",
        description: "Descripcion de Comida 8",
        price: 200,
        imgUrl: "https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-22_4d470f76dc99e18ad75087b1b8410ea9.jpg"
    }

]

export const productFetch = () => {

    return new Promise (resolve => {

        setTimeout(() => {

            resolve(productos);

        }, 2000)

    })

}

