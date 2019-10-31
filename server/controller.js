const bestJokes = []
let id = 0

module.exports = {
  keep: (req, res) => {
    const newJokes = {...req.body, id, name: 'default'}
    bestJokes.push(newJokes)
    id++
    res.status(200).send(bestJokes)
  },
  getBestJokes: (req, res) => {
    res.status(200).send(bestJokes)
  },
  name: (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const index = bestJokes.findIndex(el => el.id === +id)
    bestJokes[index].name = name
    console.log(bestJokes)
    res.status(200).send(bestJokes)
  },
  trash: (req, res) => {
    const {id} = req.params
    const index = bestJokes.findIndex(el => el.id === +id)
    bestJokes.splice(index, 1)
    res.status(200).send(bestJokes)
  }
}