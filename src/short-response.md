# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** is one of the 4 pillars of **object oriented programming (oop)**. Encapsulation is a style of programming where a programmer would pack all of their data inside of one **object** rather than separating that data through multiple different **functions** like you would in **functional programming**.

Here's an example of code that uses functional programming:

```js
const addSongToPlaylist = (playlist, song) => {
  const songs = [...playlist];
  songs.push(song);
  return songs;
};

const showPlaylist = (playlist) => {
  playlist.forEach((song) => {
    console.log(song);
  });
};

const playlist = [`song1`, `song2`];
const songs = addSongToPlaylist(playlist, `song3`);

showPlaylist(songs);
// song1
// song2
// song3
```

Here's an example of that same code being used with encapsulation instead:

```js
const playlistManager = {
  playlist: [`song1`, `song2`],

  addSongToPlaylist(song) {
    this.playlist.push(song);
  },

  showPlaylist() {
    this.playlist.forEach((song) => {
      console.log(song);
    });
  },
};

playlistManager.addSongToPlaylist(`song3`);
playlistManager.showPlaylist();
//song1
//song2
//song3
```

As we can see, both codes print out the same results and do the exact same thing. "So why do this?" We do this because not only is using objects to bundle data arguably more cleaner and organized since you got your **properties** and **methods** all in one general area to look at, but this also helps with performance optimization as factory functions are a waste of memory when programming because everytime a factory function is even invoked it creates a whole new object and it recreates the methods used instead of just using the method thats already there. So it becomes much more beneficial to use encapsulation instead.

MDN Reference: [Encapsulation – MDN Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming#encapsulation)

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism**, like **encapsulation**, is another one of the 4 pillars in **object oriented programming**. Polymorphism is when multiple different objects have the same functionalities, even if those functionalities are implemented differently.

Here's an example of code that uses polymorphism:

```js
class Computer {
  constructor(name, brand, os) {
    this.name = name;
    this.brand = brand;
    this.os = os;
  }

  bootup() {
    return `Your ${this.brand} is booting up now`;
  }

  showInformatiion() {
    return `Name: ${this.name}, \nBrand: ${this.brand} \nOS Name: ${this.os}`;
  }
}

const PC = new Computer(`TylekPC`, `HP`, `Microsoft Windows 11 Pro`);
console.log(PC.bootup());
console.log(PC.showInformatiion());

class Laptop extends Computer {
  constructor(name, brand, os, touchscreen) {
    super(name, brand, os);
    this.touchscreen = touchscreen;
  }

  showInformatiion() {
    return `Name: ${this.name}, \nBrand: ${this.brand} \nOS Name: ${this.os} \nTouchscreen: ${this.touchscreen}`;
  }
}

const randomLaptop = new Laptop(
  `TylekLaptop`,
  `Lenovo`,
  `Microsoft Windows 11 Pro`,
  `true`
);
console.log(randomLaptop.bootup());
console.log(randomLaptop.showInformatiion());
```

Notice how we're able to use the `bootup()` method in the `Laptop` class despite not even having it, that's an example polymorphism because this code uses **inheritance** to allow the `Laptop` class to borrow the `bootup()` method from `Computer` so that both classes have similar functionalities. `showInformation()` is another example of polymorphism as well because the same method is being used between 2 different classes even though `showInformation` is being used differently throughout both `Laptop` and `Computer`.

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

I would use **inheritance** for this game by first creating a `Pets` **class** since, according to the prompt, `name`, `energy`, `happiness`, and `sleep()` are universal to all pets, so the `Pets` class would be a coordinator in this context.

After that, I'd make each individual pet class (Cats, dogs, birds) a **subclass** of the `Pets` **superclass** by using the `extends` **keyword** as I'm creating the class names. As well as using the `super` keyword inside each individual pet's constructor to get all properties in the `Pet` class. Using `extends` already gave those pet classes access to the `sleep()` method, so nothing more needs to be done.

The biggest advantage inheritance has for creating this game is the fact that it saves you a lot of unnecessary lines of code. If you had written this normally as 3 separate classes, then you'd have to redeclare the same `sleep()` **method** inside 3 classes. It'd also be annoying to write in the constructor since, without the use of `super`, we'd have to use `this.name`, `this.energy`, `this.happiness` for every class instead of just `super(name, energy, happiness)`, saving you some lines of code.
