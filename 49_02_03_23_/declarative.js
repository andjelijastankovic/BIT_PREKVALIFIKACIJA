//mutable
const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate = (book, rating) => {
    book.rating = rating;
    return book;
};
console.log(rate(book, 2));

//immutable
const book2 = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate2 = (book, rating) => {
    return { ...book, rating }
};

let changedBook = rate2(book2, 2);
console.log(changedBook);


const users = ["John", "Jack", "Michael", "Tom", "Nicholas"];
const usersLowerCase = users.map(user => { return user.toLowerCase() }); //ako hocemo slozeniju funkciju i neki blok koda
//const usersLowerCase = users.map(user => return user.toLowerCase()); //ako samo mapiramo niz


function maptolower(input = []) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        const item = input[i].toLowerCase();
        result.push(item);
    }

    return result;
}

const usersToLowerCaseOld = maptolower(users);
const usersWhoseNameStartWithJ = users.filter((user) => {
    return user.startsWith("J")
})

const uniqueUsers = users.filter((user, index, array) => {
    return array.indexOf(user) === index
});

console.log(users);
console.log(usersToLowerCaseOld);
console.log(usersLowerCase);
console.log(usersWhoseNameStartWithJ);


//higher-order functions
const checkLogin = (isLoggedIn, fnTrue, fnFalse) => {
    return isLoggedIn ? fnTrue() : fnFalse();
}

const showWelcome = () => {
    console.log("Welcome!")
}

const showUnauthorized = () => {
    console.log("Unauthorized!")
}

checkLogin(true, showWelcome, showUnauthorized);

checkLogin(false, showWelcome, showUnauthorized);


//recursion
const countdown = (value) => {
    console.log(value);
    if (value > 0) {
        countdown(value - 1);
    }
}
countdown(10);

const countdownIterative = (value) => {
    for(let i = value; i >= 0; i--) {
        console.log(i);
    }
}
countdownIterative(10);

//multiple without mark *
const multiple = (a, b) => {
    let sum = 0;

    for(let i = 0; i < b; i++) {
        sum += a;
    }

    return sum;
}

console.log(multiple(3, 4));

const multipleRecursive = (a, b, sum = 0) => {
    if(b > 0) {
        return multipleRecursive(a, b-1, sum+a);
    }

    return sum;
}

console.log(multipleRecursive(3, 4));

