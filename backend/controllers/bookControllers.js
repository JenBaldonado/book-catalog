

const getBooks = (req, res) => {
    res.status(200).json({ message: 'Get Books' })

}

const postBooks = (req, res) => {
    res.status(200).json({ message: 'Post Books' })

}
const updateBooks = (req, res) => {
    res.status(200).json({ message: `Update Book ${req.params.id}` })
}
const deleteBooks = (req, res) => {
    res.status(200).json({ message: `Delete Book ${req.params.id}` })

}


module.exports = {
    getBooks,
    postBooks,
    updateBooks,
    deleteBooks
}