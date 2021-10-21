


//NOMBRES
// Jose Gutierrez
//Federico Altava
// Santi

// Nacho 🥸
//Raquel
//Tatiana 

// Federico Gómez
//Aarón🤪🤪
// Nando 🥷🏻🥷🏻

//Rocio



let myself = {
  name: 'Jaime',
  lastName: 'Jacobo',
  age: 27,
  alive: true,
  dogs: ['Maya', 'Jordi', 'Jordi', 'Jordi'],
  direction: {
    country: 'Spain',
    city: 'Madrid',
    street: 'Calle Heras',
    number: 10,
    doors: ['3B', '4A']
  }
}

myself.direction.favoriteColor = 'coral'
myself.name = 'Diego'
myself.age = 27

myself.dogs.splice(1, 1, 'Thomas') //Elimina el item en el index 1
// myself.dogs.splice(3, 1) //Elimina el item en el index 3

// console.log('name' in myself) //te devuelve verdadero o falso si el key existe (o no) dentro de un objeto literal especifico


// console.log(Object.keys(myself)) //Devuelve todos los keys de un objeto literal
// console.log(Object.values(myself)) //Devuelve todos los values de un objeto literal

//
let counter = 0;
for(let key in myself){
  counter++
  // console.log(key) //Para conseguir todos los keys
  // console.log(myself[key]) //Para conseguir todos los values
}

console.log(Object.keys(myself).length)

// console.log(counter)


const someVariable = 'name'

const myObject = {
  name: 'Jimena',
  lastName: 'Perez',
  age: 22,
}

// console.log(myObject[someVariable])
// console.log(myObject.name)
// console.log(myObject['name'])



// const students = [
//   { name: "Bob", age: 17 },
//   { name: "Susy", age: 18 },
//   { name: "Ted", age: 18 },
//   { name: "Sarah", age: 20 },
//   { name: "Bill", age: 19 },
// ];


// console.log(students[3].age)

// const twoD = [
//   ["Bob", "Susy", "Ted"],
//   ["Lilly", "Sarah", "Bill"],
//   ["Thomas", "Barry", "Alex"]
// ]

// console.log(twoD[2][1])

// const other = [
//   ["Bob", "Susy", "Ted"],
//   ["Lilly", ["Jamie", "Sarah"], "Bill"],
//   ["Thomas", "Barry", "Alex"]
// ]

// console.log(other[1][1][0])

const classes = [
  [
    { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
    { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
    { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
    { firstName: 'Lulu', lastName: 'Considine', age: 20 },
    { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
  ],
  [
    { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
    { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
    { firstName: 'Emie', lastName: 'Franecki', age: 29 },
    { firstName: 'Okey', lastName: 'Runte', age: 18 },
    { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
  ],
  [
    { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
    { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
    { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
    { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
    { firstName: 'Stanley', lastName: 'Hand', age: 22 }
  ],
  [
    { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
    { firstName: 'Mervin', lastName: 'Blick', age: 28 },
    { firstName: 'Damien', lastName: 'Rohan', age: 28 },
    { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
    { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
  ],
  [
    { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
    { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
    { firstName: 'Braeden', lastName: 'Walker', age: 26 },
    { firstName: 'Derick', lastName: 'Weber', age: 22 },
    { firstName: 'Robert', lastName: 'Beatty', age: 30 }
  ]
];


// console.log(classes[3][0].age) // Edad de Vincent Langworth
// console.log(classes[4][4].firstName) // quiero ver impreso el Nombre de Robert Beatty

const classRoom = {
  teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
  students: [
    { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
    { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
    { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
    { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
    { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
  ]
};

// console.log(classRoom.students[2].age) //Ver impreso en consola la edad de Jan Quitzon
// console.log(classRoom.teacher.lastName) //Ver impreso en consola el apellido del profesor


const school = {
  name: "Fake School 1",
  classRooms: [
    {
      teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
      students: [
        { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
        { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
        { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
        { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
        { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
      ]
    },
    {
      teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
      students: [
        { firstName: 'Manley', lastName: 'Doyle', age: 18 },
        { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
        { firstName: 'Sid', lastName: 'Rohan', age: 30 },
        { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
        { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
      ]
    }
  ]
}

// console.log(school.classRooms[1].students[2].age) //Quiero ver la edad de Sid Rohan
// console.log(school.classRooms[1].teacher.lastName)//Quiero ver en la consola el apellido de Edwardo Schowalter



const schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
              { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
              { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
              { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
              { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
              { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
     },
     {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
           ]
         }
       ]
	 },
	 {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};

// console.log(schoolSystem.schools[2].name)P//ver en consola Fake School 3
// console.log(schoolSystem.schools[1].classRooms[0].students[4].age)// ver la edad de Rose Collins
// console.log(schoolSystem.schools[0].classRooms[0].teacher.age) // la edad de Marcelino Padberg
// console.log(schoolSystem.schools[2].classRooms[0].students[4].age)//edad de Maudie Haley
// console.log(schoolSystem.schools[2].classRooms[0].teacher.firstName)// el nombre del profesor de Fake School 3 que tiene 42 años
// console.log(schoolSystem.schools[1].classRooms[1].students.length)// cuantos alumnos hay en la segunda clase de Fake School 2
// console.log(schoolSystem.schools[0].classRooms.length)// el numero de clases que tengo en Fake School 1


// const name = schoolSystem.schools[2].classRooms[0].teacher.firstName;
// const lastName = schoolSystem.schools[2].classRooms[0].teacher.lastName;

// console.log(`${name} ${lastName}`)

