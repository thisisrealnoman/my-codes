const actor = {
    name: 'John wick',
    id: 121,
    address: "California",
    isSingle: true,
    friends: ['Iron Man', 'Batman', 'Superman'],
    movies: [{name: "John Wick", year: 2000}, {name: "John Wick2", year: 2010}],
    act: function(){
        console.log("This is a function.");
    },
    car: {
        brand: 'Mustang',
        price: 55500000,
        made: 1969,
        manufacturer: {
            name: "Mustang",
            ceo: "Unknown",
            country: "usa"

        }
    }
}

console.log(actor);
// console.log(actor.car);
actor.act();
