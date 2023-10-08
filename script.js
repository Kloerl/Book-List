// afficher une liste de livres à partir du tableau
let bookList = [
    {
        title: "Éclair d'Amour à Paris",
        picture: "https://placehold.co/300x400",
        author: "Théophile Bouchard",
        description: "Lorsque Sophie, une pâtissière timide de New York, voyage à Paris pour un concours de pâtisserie, elle ne s'attend pas à rencontrer un charismatique chef français, Pierre. Leurs différences culturelles et culinaires sèment le chaos, mais est-ce que l'amour et la cuisine les uniront ?",
    },
    {
        title: "L'Énigme du Manoir Hanté",
        picture: "https://placehold.co/300x400",
        author: "Adèle Dufresne",
        description: "Le détective amateur, Emily, reçoit une invitation énigmatique pour passer la nuit dans un manoir réputé hanté. Elle et son groupe d'amis se retrouvent pris au piège dans un labyrinthe de mystères et de phénomènes paranormaux. Emily doit résoudre l'énigme du manoir pour sauver ses amis avant qu'il ne soit trop tard.",
    },
    {
        title: "L'Orchidée Sanglante",
        picture: "https://placehold.co/300x400",
        author: "Félix Chevalier",
        description: "Dans le monde exotique de l'orchidée noire, l'experte en botanique, Amelia, se retrouve mêlée à une série de meurtres mystérieux. Elle devra démêler les fils de cette intrigue mortelle tout en veillant à ce que l'orchidée rare et précieuse ne tombe pas entre de mauvaises mains."
    },
    {
        title: "L'Épée du Destin",
        picture: "https://placehold.co/300x400",
        author: "Océane Lambertin",
        description: "Dans un royaume fantastique, le jeune orphelin Tristan découvre une ancienne épée magique qui renferme un pouvoir inimaginable. Il se lance dans une quête pour déjouer un complot royal et sauver son royaume bien-aimé tout en apprenant à maîtriser le pouvoir de l'épée du destin."
    },
]

let bookListContainer = document.querySelector(".book__list")

for (let eachBook of bookList) {
    let bookCard = document.createElement("article")
    bookCard.classList.add("card")

    let bookTitle = document.createElement("h3")
    bookTitle.textContent = eachBook.title

    let bookPicture = document.createElement("img")
    bookPicture.src = eachBook.picture

    let bookAuthor = document.createElement("h4")
    bookAuthor.textContent = eachBook.author

    let bookDescription = document.createElement("p")
    bookDescription.textContent = eachBook.description

    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookPicture)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookDescription)

    bookListContainer.appendChild(bookCard)
}


//filtrer les livres en fonction de leur statut : lu, à lire, en cours de lecture

// pouvoir changer le statut d'un livre

// pouvoir noter un livre