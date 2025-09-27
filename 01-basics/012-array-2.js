const marvel = ["thor", "Ironman", "spiderman", "Hulk"]
const dc = ["superman", "batman", "flash"]

const heroes = [...marvel, ...dc].toSpliced(2, 0, "Wolverine", "Dr.Strange")
console.log(heroes);

const marvel1 = marvel.concat(dc)
console.log(marvel1);


const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8]

const res = nestedArray.flat(Infinity)
console.log(res);
// isArray , from , of



console.log(Array.isArray(marvel));
console.log(Array.from({ name: "Bruce" }, (item, index) => item = index + 1));