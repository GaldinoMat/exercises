// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

const { default: axios } = require("axios");

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

async function getRicAndMortyCharacters() {
  const {data: smithData} = await axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/?name=smith&status=alive&species=Human',
  })

  const {data: rickData} = await axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/?name=rick&status=alive&species=Human',
  })

  const smithFamily = smithData.results.slice(0, 4).map(member => getCharacterData(member))

  const rick = rickData.results.shift()

  smithFamily.unshift(getCharacterData(rick))

  return smithFamily
}

const getCharacterData = (character) => {
  return {
    nome: character.name,
    genero: character.gender === "Male" ? "Homem" : "Mulher",
    avatar: character.image,
    especie: character.species === "Human" ? "Humano" : ""
  }
}

getRicAndMortyCharacters()

module.exports = getRicAndMortyCharacters;
