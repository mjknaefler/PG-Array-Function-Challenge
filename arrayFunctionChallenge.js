//Write a function that takes an array of objects representing books and returns an array containing the titles of those books.
let bookArr = [
    {title:"Book1",author:"John Doe",published:"2004"},
    {title:"Book2",author:"Jane Dear",published:"2013"},
    {title:"Book3",author:"Sarrah Smith",publish:"2023"}
];
let bookTitles = bookArr.map((titles) => {
    return titles.title;
})
console.log(bookTitles)

//Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.
let products = [
    {name:"Candy",inStock:true},
    {name:"Soda",inStock:true},
    {name:"Pasta",inStock:false},
    {name:"Bread",inStock:false},
    {name:"Soup",inStock:true}
];
let productsInStock = products.filter((product)=>{
    return product.inStock
})
console.log(productsInStock)

//Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.
let users = [
    {username:"Matt",email:"MattRocks@gmail.com",score:71},
    {username:"Sam",email:"Samscool@yahoo.com",score:89},
    {username:"Brock",email:"BrockStevens@hotmail.com",score:19},
    {username:"Sam2",email:"Samscool@yahoo.com",score:91}
];
let findSam = users.find((emailtofind)=>{
    return emailtofind.email === "Samscool@yahoo.com"
})
console.log(findSam)

//Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.
let tasks = [
    {task:"Empty Garbar",complete:true},
    {task:"Mail letters",complete:false},
    {task:"Feed Dog",complete:true}
]
let tasksComplete = tasks.every((taskStatus)=>{
    return taskStatus.complete === true
})
console.log(tasksComplete)

//Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.
let purchases = [
    {itemName:"Grapes",price:5},
    {itemName:"Apples",price:10},
    {itemName:"Pears",price:15}
];
//ask about 0 before closin parenthesis
let totalPurchase = purchases.reduce((total,num)=>{
    return total+ num.price
},0)
console.log(totalPurchase)

//Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
let numArr = [2,3,4,5,6,1,2,0]
let sumNum = numArr.reduce((total,current)=>{
    return total + current
})
console.log(sumNum)

//Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.
let stringArr = ['Hello','World','My','Name','Is','Max'];
let upperStringArr = stringArr.map((word)=>{
    return word.toUpperCase()
})
console.log(upperStringArr)

//Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.
let numArr2 = [1,2,3,4,5,6,7,8,9];
let evenNums = numArr2.filter((number)=> {
    return number % 2 ===0
})
console.log(evenNums)

//Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.
let stringArr2 = ['one','two','three','four','five','six','seven','eight','nine'];
let smallLengthStrings = stringArr2.filter((word)=> {
    return word.length <= 4
})
console.log(smallLengthStrings)