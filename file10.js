class Name {
    constructor(fname, lname) {
      this.firstName = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lastName = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullName = `${this.firstName} ${this.lastName}`;
      this.initials = this.firstName[0].toUpperCase() + "." + this.lastName[0].toUpperCase() + ".";
    }
  }
  
  const a1 = new Name("john", "SMITH");
  console.log(a1.firstName); // "John"
  console.log(a1.lastName); // "Smith"
  console.log(a1.fullName); // "John Smith"
  console.log(a1.initials); // "J.S."
  
  const ch = new Name("cHaRlIe", "chaplIN");
  console.log(ch.firstName); // "Charlie"
  console.log(ch.lastName); // "Charlie"
  console.log(ch.fullName); // "Charlie Charlie"
  console.log(ch.initials); // "C.C."