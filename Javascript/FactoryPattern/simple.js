function createPerson({ name, age, job }) {
  return {
    name,
    age,
    job,
    presenter: function () {
      return console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old and my job is ${this.job}.`
      );
    },
    setAge: function (age) {
      this.age = age;
    },
  };
}

const jane = createPerson({ name: 'jane', age: 25, job: 'Developer' });

jane.presenter();
jane.setAge(32);
jane.presenter();
