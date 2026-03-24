import pkg from 'lodash'
const { groupBy } = pkg

const listPets = [
    { name: "Max", type: "dog" },
    { name: "Mittens", type: "cat" },
    { name: "Charlie", type: "dog" },
    { name: "Whiskers", type: "cat" },
    { name: "Buddy", type: "dog" },
]

const byType = groupBy(listPets, "type");

console.log(byType);