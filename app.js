console.log("hello world from app")
//variable declaration
var firstName = "samuel"
console.log(firstName)

/*
datatypes in javascript
number
string
boolean
symbol
undefined
null

*/

var lastName 
lastName= "ebuka"
console.log(lastName)
var age= 24
console.log(age)
var isStudent= true
console.log(isStudent)
//naming variable, variable name can only start with letter or an underscore or dollar sign 
//variable name cannot contain special characters or spaces in between

var $years= 5
console.log($years)

//variable mutuation and coarsion it means variable change
//coarsion is how javascript forces a variable from one type to another
var name = "joe"
var firstName= "ofordile"
var myAge= 7
console.log(firstName)

//coarsion
console.log("my name is " + name + " i am " + myAge + " years old.")

console.log(`my name is ${name} i am ${myAge} years old`)

var dob = 2022 - myAge
console.log(dob)

//
//operators
var result = 3 - (4 / 2) * 2

console.log(result)

var std1, std2, std3
std1 = std2 = std3 = "james"
console.log(std1, std2, std3)

//increament
//var newAge = myAge +1;

myAge = myAge +1

myAge += 1
myAge++
console.log(myAge)

//DECREMENT
myAge = myAge -1

myAge -= 4
myAge--
console.log(myAge)


/**class work
 * var cynthiaMass = 100
 * var cynthiaHeigth= 40
 * 
 * var emekaMass = 44
 * var emekaHeight= 66
 * 
 * var cynthiaBmi = 100 / (40*40)
 * var emekaBmi = 44 / (66*66)
 * 
 */
//correction
var cynthiaMass = 70
var cynthiaHeigth = 1.7

var emekaMass = 175
var emekaHeight= 1.6

var cynthiaBmi = cynthiaMass / (cynthiaHeigth * cynthiaHeigth)
var emekaBmi = emekaMass / (emekaHeight * emekaHeight)

var higherBmi = cynthiaBmi > emekaBmi
console.log(" is cynthia bmi higher than emeka's? " + higherBmi)

//typeof helps us determine the type of a variable

console.log(typeof cynthiaBmi, typeof higherBmi)

//conditional statements
if (cynthiaBmi > emekaBmi) {
    console.log("cynthia wins")
}
else{
    console.log("emeka wins")
}

var studentAge = 34
if (studentAge >= 20) {
    console.log("you are a legal  adult now")
}
else if(studentAge <= 18 && studentAge >=13){
    console.log("you are a teenager")
}
else if(studentAge < 13 && studentAge >= 5){
    console.log("hello young one")
}
else{
    console.log("lovely baby")
}
//switch case is used to test for equality
var gender = "male"
switch (gender) {
    case "male":
        console.log("hello sir")

        break
        case "female":
            console.log("hello ma")
            break
            default:
                console.log("you are confuse")
                break
}

//
var isMarried = true
console.log("is james married" + (isMarried ? " yes " : "no"))

//classwork

var johnScores = (89, 120, 103);
var johnAverageScores = (89 + 120 + 123) / 3
// console.log(johnAverageScores)

//var mikeScores = (116, 94, 103)
//var mikeAverageScores = (116 + 94 + 103) / 3
//console.log(mikeAverageScores)

//var highestAverageScores = 110

//if (highestAverageScores >= 110) {
    // console.log("johns team won")
//} else if (highestAverageScores <=103){
    // console.log(" try harder next time")
//}

// correction

var johnAve = (89 + 120 + 103) / 3
var mikeAve = (116 + 120 + 123) / 3
var maryAve = (97 + 134 + 106) / 3

if (johnAve > mikeAve && johnAve > maryAve){
    console.log("the winner is johns team an average score of " + johnAve)
} else if(mikeAve > johnAve && mikeAve > maryAve){
    console.log(" the winner is mike team with an average score of " + mikeAve)
} else if( maryAve > johnAve && maryAve > mikeAve){
    console.log("the winner is marys team with an average score of " + maryAve)
} else {
    console.log("it is a draw")
}

//function

function calculateAge(yearOfBirth){
    var currentYear = 2022
    var age = currentYear - yearOfBirth
    return age
}

console.log("hello am " + calculateAge(2009) + "years old")
console.log("i am " + calculateAge(2000) + "years old" )

function yearsUntilRetirement(dob, jobYear, name) {
    var myAge = calculateAge(dob)
    var noOfYears = calculateAge(jobYear)
    var ageTillRetirement = 65 - myAge
    var workTillRetirement = 35 - noOfYears
    if (ageTillRetirement > workTillRetirement){
        console.log(
            "hello ," + name + " you have " + workTillRetirement + "years before you retire")
    } else if(workTillRetirement > ageTillRetirement){
        console.log(
            "hello," + name + " you have " + workTillRetirement + " years before you retire"        )
    }
 else{
    console.log(" hello, "+ name + " you have " + workTillRetirement + " years before you retire ")
}
}
yearsUntilRetirement(1998, 2009, "james")
yearsUntilRetirement(1968, 2005, "joy")
yearsUntilRetirement(1978, 2015, "mary")
yearsUntilRetirement(1988, 2005, "rita")

var result = [90, 87, 66, 88, 99, "john" ]
console.log(result)
console.log(result.length)
console.log(result[5])
var student= ["hosea", "john", "favour", "emma"]
console.log(student)
console.log(student[3])

console.log(student.indexOf("favour"))
student.pop()
console.log(student)
student.shift()
console.log(student)
student.push("linda")
console.log(student)
student.unshift("ali")
console.log(student)

//function practice
let fuel= 199
function launch_rocket() {
    function warning_msg() {
        console.error("not enough fuel")
    }
    if (fuel >= 100) {
        console.log("we are good to go")
    } else {
        warning_msg()
    }
}
launch_rocket()

//correction
function tipCalculator(bill) {
    var percentage
    if (bill < 5000) {
        percentage = 0.15
    } else {
        percentage= 0.1
    }
    return percentage * bill
}
//console.log(tipCalculator(60000))

var bill= [12400, 4800, 30000] 
 var tips= [
     tipCalculator(bill[0]),
       tipCalculator(bill[1]),
         tipCalculator(bill[2]),
 ]
 var finalValues= [bill[0]+ tips[0] + bill[1] + tips[1] + bill[2] + tips[2]]

 console.log(tips, finalValues)


 //object are like property or entity, key value pair

 var student= {
     firstName: "victor",
     lastName: "david",
     age: 22,
     state: "new york",
     lga: "memphis",
     ca: 44,
     exam: 66,

     address: {
         city: "gwagwalada",
     },
     email: function () {
         return "hello@yahoo.com"
     },
     children: ["funmi", "joy", "charlse", "david"],
 }

 console.log(student.address.city)
 console.log(student.email())
 console.log(student.children[3])
 console.log(student)

 console.log(student.state)
 console.log(student["firstName"])

 var key= "ca"
 console.log(student["ca"])

 var worker= Object.create(null)
worker.job= "doctor"
worker.salary= 30000
console.log(worker)
// var job = () => (
    // occupation= "web dev"
    // )

    //object with function
    var house= {
        address: "gwags",
        // monthlyRent: 1000,
        annual: 0,
        calculateAnnualRent: function (monthlyRent) {
            //var annual = this.monthlyRent * 12;
            //return annual;
            this.annual = monthlyRent * 12
            return this.annual
        }
    }
    console.log(house.calculateAnnualRent)
    console.log(house.calculateAnnualRent(20000))
    console.log(house)
    

    var mark = {
        fullName: " mark emeka",
        mass: 56,
        height: 1.6,
        calculateBmi: function () {
            this.bmi= this.mass / (this.height * this.height)
            return this.bmi
        }
    }
    // console.log(mark.calculateBmi())

    var daniel = {
        fullName: "daniel emeka",
        mass: 56,
        height: 1.7,
        calculateBmi: function () {
            this.bmi = this.mass / (this.height * this.height)
            return this.bmi
        }

    }
    if (mark.calculateBmi() > daniel.calculateBmi()) {
        console.log("mark has the heighest bmi")
         console.log("full name", mark.fullName)
          console.log("bmi", mark.bmi)
    } else if (daniel.calculateBmi() > mark.calculateBmi()) {
         console.log("daniel has the heighest bmi")
          console.log("full name", daniel.fullName)
           console.log("bmi", daniel.bmi)
    } else{
        console.log("its a stalemate")
    }

    //loops and iteration it is used to repeat a set of task forloop
    //this is forloop
    for(var index= 0; index<= 20; index++){
        console.log("hello " + index)
    }

    var students = ["john", "james", "fred", "dan", "success"]

    for (var i=0; i< students.length; i++) {
        console.log(students[i])
        if (students[i] === "james") {
            break;
        }
    }
    //whileloop
    var counter = 0
    while (counter < students.length) {
        console.log("hello "+ students[counter])
        counter++
    }
    //map
    students.map(function (students) {
        console.log(students)
    })
    var developers = [
        {
            name:"victor",
            language:"javascript",
            address:"usa",
        },
        {
            name:"bidemi",
            language:"javascript",
            address:"gwagwalada", 
        },
        {
            name:"lifted",
            language:"javascript",
            address:"lokoja",
        },
        {
            name:"frank",
            language:"javascript",
            address:"kuje",
        },
    ]
    //const {name, language, address}= developers  //detructuring
    developers.map(function (developer) {
        console.log(
            developer.name +
            " codes in " + 
            developer.language +
            " and lives in " +
            developer.address
        )
    })

    function alTip(bill) {
        //var bill = [
       //     {bill:5000},
        //    {bill: 15000},
         //   {bill: 25000},
          //  {bill:55000},
       // ]
    

    var percentage
    if (bill < 5000) {
        percentage= 0.2
    } else if (bill>=5000 && bill<= 20000) {
        percentage = 0.15
    } else if (bill > 20000) {
        percentage = 0.1
    }
    return percentage * bill
    }
    //console.log(calTip(300))
    var johnBills = [
        {
            bill1: 12400
        },
        {
            bill2: 4800
        },
        {
            bill3: 18000
        },
        {
            bill4: 4200
        }
    ]
    console.log(johnBills)
    //correction
    var john = {
        fullname: "john Ali ",
        bills: [12400, 4800, 18000, 4200],
        calTips: function(){
            this.tips = []
            this.finalValues = []
            for (var i = 0; i< this.bills.length; i++) {
                var percentage
                var bill = this.bills[i]
                if (bill < 5000) {
                    percentage = 0.2
                } else if (bill >= 5000 && bill <= 20000) {
                    percentage = 0.15
                } else {
                    percentage = 0.1
                }
                this.tips[i] = bill * percentage
                this.finalValues[i]= bill + bill + percentage
            }
        }
    }
    var obi= {
        fullName: "obi peter ",
        bills: [7700, 47500, 4000, 4500],
        calTips: function() {
            this.tips = []
            this.finalValues= []
            for(var i= 0; i< this.bills.length; i++) {
                var percentage
                var bill= this.bills[i]
                if(bill < 10000) {
                    percentage = 0.2
                } else if (bill >= 10000 && bill <30000) {
                    percentage= 0.1
                } else {
                    percentage= 0.25
                }
                this.tips[i] = bill * percentage
                this.finalValues[i] = bill + bill + percentage
            }
        }
    }
    function calculateAverage(tips) {
        var sum= 0
        for (var i= 0; i < tips.length; i++) {
            sum = sum + tips[i]
        }
        return sum/ tips.length
    }
    john.callTips()
    obi.callTips()
    john.average = calculateAverage(john.tips)
    obi.average= calculateAverage(obi.tips)
    console.log(john, obi)

    if (john.average > obi.average) {
        console.log(
            john.fullName + " 's family pays higher tips, with an average of $ " + john.average
        )
    } else if(obi.average > john.average) {
        console.log(
            obi.fullName +  " 's family pays higher tips, with an average of $ " + obi.average
        )
    }