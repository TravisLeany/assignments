    // function Car (year, make, model) {
    //         // use the "this" keyword to reference each object
    //         // that is created from this constructor
    //     this.year = year;
    //     this.make = make;
    //     this.model = model;
    // }

    //         // then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

    // var myTacoma = new Car(2015, "Toyota", "Tacoma");


employees = []


                                        //could set defaul here eg status = "default" ; however only one, and must be last
                                        //otherwise do as done on line 23
function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = "$"+salary
    this.status = status || "Full Time"
    this.printEmployeeForm = function(){
        printout = "Name: "+this.name+", Job Title: "+this.jobTitle+", Salary: "+this.salary+", Status: "+this.status
        console.log(printout)
    }
}

var dog = new Employee("Dog", "Bounty Hunter", 100000);
var mindi = new Employee("Mindi", "Nurse", 100001);
var sasha = new Employee("Sasha", "Support Dog", 52, "Part Time")


dog.printEmployeeForm()
mindi.printEmployeeForm()
sasha.printEmployeeForm()

employees.push(dog)
employees.push(mindi)
employees.push(sasha)

