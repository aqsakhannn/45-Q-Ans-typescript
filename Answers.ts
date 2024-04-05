//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
//would you like to learn some Python today?”
console.log("Answer2")
let personName : string = 'hurRam'
console.log('Good Morning, ' + personName + '!');
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Answer3")
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(personName.charAt(0).toUpperCase () + personName.slice(1).toLowerCase())
//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:
console.log("Answer4")
console.log('Imran khan once said,"Absolutely right"');
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("Answer5")
let famous_person_Name : string = 'Albert Einstein'
let famous_person_message: string = '“A person who never made a mistake never tried anything new.”' 
console.log(famous_person_Name + ' is said ' + famous_person_message);
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, *"\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Answer6")
const fpersonName: string = "  \n\tImranKhan\t\n"
console.log(personName)
const withoutWhitespace : string = personName.trim()
console.log(withoutWhitespace)
//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/ 
/*8. You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log("Answer7 & 8")
console.log(5 + 3)
console.log(12 - 4)
console.log(2 * 4)
console.log(16 / 2)
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("Answer9")
let favNumber : number = 5
console.log('My favourite number is ' + favNumber)
/*10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.*/
console.log("Answer10")
let fullName : string = 'Aqsa Khan';//My fullname is aqsa khan
let age : number = 29;//My age is 29.
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("Answer11")
let friendsName: string[] = ['Maryum','Honey','Hurram']
console.log(friendsName[0])
console.log(friendsName[1])
console.log(friendsName[2])
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.


console.log("Answer12")
console.log('Hy, What r u doing ' + friendsName[0])
console.log('Hy, What r u doing ' + friendsName[1])
console.log('Hy, What r u doing ' + friendsName[2])
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
console.log("Answer13")
let transportation : string[] = ['Pijaro','Civic','Aulto']
console.log("I want to own my new " + transportation[0])
console.log("I want to own my new " + transportation[1])
console.log("I want to own my new " + transportation[2])
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("Answer14")
let guestList : string[] =["Imran Khan", "Shehzad Waseem", "Sher Afzal khan"]
console.log(guestList[0] + "\nIt's my pleasure to invite you on a Dinner.")
console.log(guestList[1] + "\nIt's my pleasure to invite you on a Dinner.")
console.log(guestList[2] + "\nIt's my pleasure to invite you on a Dinner.")

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
console.log("Answer15")
let absentGuest : string ="Shehzad Waseem"
console.log(absentGuest + " can't come to dinner.")
let newguest : string = "Kamran Khan Tessori"
guestList[1] = newguest

guestList.forEach(guest =>{
    console.log("Dear, " + guest + " I am very glad that you are joining me on a dinner.") 
 })
// /*16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("Answer16")
guestList.unshift( "Sr Zia Khan");
guestList.splice(guestList.length/2,0,"Daniyal Nagori"); 
guestList.push("Zartaj Gul") ;
console.log(guestList);
/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
console.log("Answer17")
console.log("I just found that I have invite only two guest due to small dinner table. ")

while (guestList.length > 2){
    let removeGuest = guestList.pop();
 console.log(removeGuest + "\n We are sorry, I can't invite you due to some reasons.\n")
}
console.log(guestList + "\nYou are still invited on a dinner.\n")
guestList.splice(0,guestList.length)
console.log(guestList)
//18. Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("Answer18")
let favPlaces : string [] = ["Makkah Madina","Maldive","New zee Land","Canada","Fairy Meadow"]
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.

console.log("Original order: " + favPlaces)
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetic Order : " + favPlaces.sort())
//• Show that your array is still in its original order by printing it.
console.log("Still in Original order: " + favPlaces)
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetic Order : " + favPlaces.sort().reverse())
//• Show that your array is still in its original order by printing it again.
console.log("Still in Original order: " + favPlaces)
//• Reverse the order of your list. Print the array to show that its
//order has changed.
console.log("Order Has Changed : " + favPlaces.reverse())
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Orignal Order : " + favPlaces.reverse())
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("changed Order to Alphabetic : " + favPlaces.sort())

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Change Alphabetic to Reverse Order : " + favPlaces.reverse())
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
//from line 68
console.log("Answer19")
console.log( "I am inviting " + guestList.length + " people on a dinner.")
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.
console.log("Answer20")
let Countries : string[] = ["Pakistan","Canada","China","Japan","India"]
console.log("List Of Countries")
console.log(Countries)
//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("Answer21")
let student :{name:string; rollno : number; subject : string; isPass : boolean}={name:"Ahmed", rollno : 20, subject : "Maths", isPass : true};
console.log(student.name + " is whose roll no is " + student.rollno + " in subject "+ student.subject + " is passed. " + student.isPass)
//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program. 
console.log("Answer22")
let friends : string[] = ["Maryum","Honey","Zoya"]
console.log(friends[3]) // international arrays are start with 0 index so index 3 is undefined.
console.log(friends[2])
/*23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/
console.log("Answer23")
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

console.log (car === "aultoo")

let model = 20;

console.log("Is model == 20? I predict True.")

console.log(model == 20)

console.log(model == 19)


let clr = "Black";

console.log("Is clr == 'Black'? I predict True.")

console.log(clr == "Gray")

console.log (clr == "Black")

let speed = "120 per hour";

console.log("Is speed == '120 per hour'? I predict True.")

console.log(speed == "20 per hour")

console.log ( speed == "120 per hour")

let price = 1500000;

console.log("Is price == 1500000 ? I predict True.")

console.log(price == 1500000 )

console.log ( price == 150000)

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings*
console.log("Answer24")
let fruit = "apple";
console.log("Testing equality and inequality: ")
console.log(fruit === "apple");
console.log(fruit === "Apple");
// Tests using the lower case function 

console.log("Testing lower case function: ")
console.log(fruit.toLowerCase() === "apple");
console.log(fruit.toLowerCase() === "Apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Tests: ")
console.log(2+3 === 5);
console.log(2+3 === 7);
console.log(7 < 5);
console.log(5 < 7);
console.log(10 <= 5);
console.log(5 <= 7);
// Tests using "and" and "or" operators
console.log("Test 'and' and 'or': ")
console.log(true && false );
console.log(true || true);
//Test whether an item is in a array

let fruits=["Apple","Mango","Grapes"];
console.log("Test is in array or not in array: ")
console.log(fruits[(0)] ==="Apple");

// Test whether an item is not in a array

console.log(fruits[(0)] ==="Banana");

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
console.log("Answer25")
let alienClr = "Green"

if(alienClr === "Green"){
    console.log("The player just earned 5 points.")
}
//version2
if(alienClr === "red"){
    console.log("The player just earned 0 points.")
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
console.log("Answer26")
let alienColr = "Green"
if(alienColr == "Green"){
    console.log("the player just earned 5 points for shooting the alien.")
}else {
    console.log('the player just earned 10 points.')
}
//version2
if(alienColr == "red"){
    console.log("the player just earned 5 points for shooting the alien.")
}else {
    console.log('the player just earned 10 points.')
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Green alien version
console.log("Answer27")
let alienClor = "Green"
if(alienClor == "Green"){
    console.log("the player earned 5 points.")
}else if(alienClor == "Yellow"){
    console.log("the player earned 10 points.")
}else if(alienClor == "Red"){
    console.log("the player earned 15 points.")
}
//yellow alien version
let alienCalr = "Yellow"
if(alienCalr == "Green"){
    console.log("the player earned 5 points.")
}else if(alienCalr == "Yellow"){
    console.log("the player earned 10 points.")
}else if(alienCalr == "Red"){
    console.log("the player earned 15 points.")
}
//red alien version
let alienCclr = "Red"
if(alienCclr == "Green"){
    console.log("the player earned 5 points.")
}else if(alienCclr == "Yellow"){
    console.log("the player earned 10 points.")
}else if(alienCclr == "Red"){
    console.log("the player earned 15 points.")
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
console.log("Answer28")
let personAge = 70
if(personAge < 2){
    console.log("the person is a baby.")
}else if(personAge < 4){
    console.log("the person is a toddler.")
}else if(personAge < 13){
    console.log("the person is a kid.")

}else if(personAge < 20){
    console.log("the person is a teenager.")
}else if(personAge < 65){
    console.log("the person is an adult.")
}else{
    console.log("the person is an elder.")
}

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
console.log("Answer29")
let favFruits: string[] = ["Mangoe","Grapes","Dates","Pomegranate","Orange"]
if(favFruits.includes("Mangoe")){
 console.log("I really like mangoes.")
}
if(favFruits.includes("Grapes") ){
    console.log("I really like grapes.")
   }
   if(favFruits.includes("Grapes")){
    console.log("I really like grapes.")
   }
   if(favFruits.includes("Dates") ){
    console.log("I really like Dates.")
   }
   if(favFruits.includes("Pomegranate")){
    console.log("I really like pomegranete.")
   }
//    30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("Answer30")
let userName : string[] = ["Aqsa","Hurram","Maryum","Admin"]
for(let i=0; i<userName.length; i++ ) 
if(userName[i] == "Admin" ){
    console.log("Hello admin, would you like to see a status report?")
}else {
    console.log("Hello " + userName[i] + " thank you for logging in again.")
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("Answer31")
let usserName : string[] =[]
if(usserName.length == 0){
    console.log('We need to find some users!')
}
 else{
    console.log()
 }
//  32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("Answer32")
let currentUsers : string[] = ["Asra","Aqsa","Hurram","Khizra","Nosheen"]
let newUsers : string[] = ["Ahmed","Aqsa","Hurram","Khizar","Owais"]
for(let i=0; i<newUsers.length; i++){
if(newUsers[i] === currentUsers[i]){
    console.log("The username has already been used." )
}else{
    console.log("The username is available.")
}
}

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
console.log("Answer33")
let ordinalNumbers : number[] =[1,2,3,4,5,6,7,8,9]
for(let i=0; i<ordinalNumbers.length; i++){
    if(ordinalNumbers[i] ===  1){
   console.log(ordinalNumbers[i] + "st")
}  else if(ordinalNumbers[i] ===  2){
    console.log(ordinalNumbers[i] + "nd")
 } else if(ordinalNumbers[i] ===  3){
    console.log(ordinalNumbers[i] + "rd")
 }else{
    console.log(ordinalNumbers[i] + "th")

 }
}

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log("Answer34")
let favPizzas : string[] =["Barbeque","Fajita","White sause"]
console.log(favPizzas + "Pizza.")
for(let i=0; i<favPizzas.length; i++){
console.log( favPizzas[i] + " pizza, it tastes Yummy.")

}
console.log("I really love pizza!")

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
console.log("Answer35")
let animals : string[] =["Cat","Horse","Dog"]
animals.forEach(animal =>{
    console.log(animal + " would make a great pet.")
})
console.log("Any of these animals would make a great pet!")

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
console.log("Answer36")
function makeShirt(size :string, message:string){
  console.log(size + message)
}
makeShirt("medium","\n\Necessity is the mother of invention.\n ")

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
 
console.log("Answer37")
function makeShhirt(size :string ="large", message:string = ' I love Typescript.'){
    console.log(size + message)
  }
  makeShhirt()
  makeShhirt("medium")
  makeShirt("small"," I love Programming.")

// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
console.log("Answer38")
function describeCity(city:string, country:string = 'Pakistan.'){
    console.log(city + " is in " + country)
}
describeCity("Karachi")
describeCity("lahore")
describeCity("Mumbai","India.")

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
console.log("Answer39")
function cityCountry(city:string, country:string):string{
    return  city+country;
}
console.log(cityCountry("Quetta ,","Pakistan"));
console.log(cityCountry("Mumbai ,","India"));
console.log(cityCountry("Tokyo ,","Japan"));


// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.*/
console.log("Answer40")
function makeAlbum(artist:string, title:string, tracks?:number){
    const album:{artist:string, title:string, tracks?:number}={
        artist:artist, 
        title:title
        
    }
    if(tracks !== undefined){
        album.tracks=tracks;

    }
    return album;
}
console.log(makeAlbum("artist 1","title1"));
console.log(makeAlbum("artist 2","title2"));
console.log(makeAlbum("artist 3","title3",3));

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
console.log("Answer41")
let magicians :string[] = ["Farhan","Hurram","Humza","Nabiha"]

function show_magicians(magicians:string[]){
    magicians.forEach(magician =>{
        console.log(magician + " Magician.")
    });
}
show_magicians(magicians);

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
console.log("Answer42")
function makeGreat(magician:string[]){
    for(let i=0; i<magician.length; i++){
        console.log( "The great " + magician[i] + "magician.");
    }

}
makeGreat(magicians);
show_magicians(magicians);

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// // names and one array with the Great added to each magician’s name.
console.log("Answer43")
function makeGrreat(magician:string[]){
    for(let i=0; i<magician.length; i++){
        console.log( "The great " + magician[i] + " magician.");
    }
return `${magicians}`
}

show_magicians(magicians);

makeGrreat(magicians);

show_magicians(magicians);

makeGrreat(magicians);

// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
console.log("Answer44")
function makeSandwich(...items : string[]) {

    console.log(`make sandwich with : ${items.join(', ')}.`)

}
makeSandwich("fried egg","bread");
makeSandwich("cheese","egg","bread");
makeSandwich("culselo","egg","bread","chilli");

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
console.log("Answer45")
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]) : Car {
    let car: Car = {
       
        manufacturer,
        model,
    };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'black'], ['year', 2023]);
console.log(myCar);

