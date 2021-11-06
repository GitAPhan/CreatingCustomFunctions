
// This function will add the two arguments together and then multiple the result by five
function function1(num1, num2) {
    return (num1 + num2) * 5;
}

// This function will return true if the string length is > 10 characters and false otherwise
function function2(string) {
    if (string.length > 10) {
        return true;
    } else {
        return false;
    }
}

// This function will return the first element in the array that starts with "ph"
function function3(array_of_strings) {
    for(var i=0;i<array_of_strings.length;i++) {
        if(array_of_strings[i].startsWith('ph')) {
            return `${array_of_strings[i]}`
        }
    }
}

// test array
var list = ['popcorn', 'phantom', 'peanut'];
var list1 = ['function', 'party', 'pants', 'funeral', 'pahhh', 'pharaoh', 'pizza'];
var list2 = ['popcorn', 'pants', 'peanut', 'ph', 'phantom', 'pants'];

// testing the functions
console.log(function1(1, 4));
console.log(function1(2, 7));
console.log(function1(1, 2));
console.log(function2('12345678901'));
console.log(function2('alligator shoes'));
console.log(function2('jumanji'));
console.log(function3(list));
console.log(function3(list1));
console.log(function3(list2));