export class Human {

    //Constructor
    constructor(id) {
      this.id = id;
    }
  
    // Method (no need function keyword)
    identify(suffix) {
      return `Hero Id: ${this.id} ${suffix}`;
    }
  
  }