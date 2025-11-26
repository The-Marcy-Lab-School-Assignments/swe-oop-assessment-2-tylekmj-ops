class Phone {
  #password;

  constructor(brand, model, password, batteryLevel) {
    this.brand = brand;
    this.model = model;
    this.#password = password;

    this.batteryLevel = 100;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (password === this.#password) {
      return true;
    }

    return false;
  }
}

const flipPhone = new Phone("Nokia", "Flip", "TimeToLearn882");
console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// 1. Making a call and checking battery
console.log(flipPhone.makeCall("123-456-7890")); // Calling 123-456-7890
console.log(flipPhone.batteryLevel); // 95

// 2. Charging and checking battery
console.log(flipPhone.charge()); // Phone fully charged
console.log(flipPhone.batteryLevel); // 100

// 3. Unlocking the phone
console.log(flipPhone.unlock("TimeToLearn882")); // true
console.log(flipPhone.unlock("TimeToLearn883")); // false

class iPhone extends Phone {
  constructor(model, password, numberOfCameras, batteryLevel, brand) {
    super(brand, model, password, batteryLevel);
    this.brand = `Apple`;
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    return `Calling ${number} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE

const smartPhone = new iPhone("iPhone 14 Pro", "TimeToLearn882", 3);

console.log(smartPhone); // iPhone { brand: "Apple", model: "iPhone 14 Pro", numberOfCameras: 3, batteryLevel: 100}

// 1. Making a call
console.log(smartPhone.makeCall("555-1234")); // Calling 555-1234 using FaceTime audio
console.log(smartPhone.batteryLevel); // Should be 95

// 2. Using the faceTime method
console.log(smartPhone.faceTime("Alice")); // Facetiming Alice
console.log(smartPhone.batteryLevel); // Should be 85

// 3. Charge the phone
console.log(smartPhone.charge()); // Phone fully charged
console.log(smartPhone.batteryLevel); // Should be 100

// 4. Unlock the phone
console.log(smartPhone.unlock("0000")); // Invalid password
console.log(smartPhone.unlock("TimeToLearn882")); // true

// DO NOT REMOVE
module.exports = { Phone, iPhone };
