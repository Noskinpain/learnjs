var emmanuel = { 
  firstName: "Emmanuel",
  lastName : "Efegoma",
  course:"Architecture"
}
console.log(emmanuel)


var Student = function(firstName, lastName, course, yearOfEntry) {
   this.firstName= firstName
   this.lastName= lastName
   this.course= course
   this.yearOfEntry= yearOfEntry
    }

    student.prototype.active= truestudent.prototype.calcYears= function() {
        console.log(2019 - this.yearOfEntry)
    }

    var lifted= new student("Lifted", "ugheoke", "computer science", 2015)
    var frank= new student("frank", "ikpe", "computer science", 2015)

    console.log(lifted)
    console.log(frank)
    console.log(lifted.active)
    console.log(frank.calcYears())

    const names= "john ogie"
    console.log(names)

    String.prototype.replaceAll = function(search, replace) {
        var scope= this
        return scope.split(search).join(replace)
    }
    console.log(names.replaceAll("o", "a"))

    console.log("joe is a boy in class 2".replaceAll("i", "o"))
    console.log("5,000,000".replaceAll(",", ""))

    var developer = {
        language: "javascript",
        experience: 5
    }
    var victor= object.create(developer)
    victor.level= "intermediate"
    victor.location= "abuja"

    var bidemi= object.create(developer, {
        level: { value: "intermediate"},
        location: { value: "abuja"}
    })
    console.log(victor)
    console.log(bidemi)
    //primitives and objects

    var student1= "ife"
    var student2= student1
     student1= "tade"
     console.log(student1)
     console.log(student2)

     var person1 = {
         age: 12
     }
     var person2= person1

      person1.age= 15
      person2.age= 40
      console.log(person1)
      console.log(person2)
      //functions
      var scores= [76, 87, 98, 74, 59]

      function calculator(arr, fn) {
          var resultArray= []
          for (var index= 0; index< arr.length; index++) {
              resultArray.push(fn(arr[index]))
          }
          return resultArray
      }

      function isPassed(value) {
          return value >= 70
      }

      var passes = calculator(scores, isPassed)
      console.log(passes)

      //i = (p*r*t)/100
      function interestcalc(principal, rate, time) {
          var intetest= (principal* rate* time)/100
          return interest
      }

      var p= 5000
      var r= 34
      var t= 5
      interestcalc(p, r, t)
