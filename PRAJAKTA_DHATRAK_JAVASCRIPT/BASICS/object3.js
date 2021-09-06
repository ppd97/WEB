const person = {
    firstName: "Praju",
    lastName : "Dhatrak",
    id       : 72,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());