//Процедурный подход

// const width = 5;
// const height = 10;

// function calsRectArea(width, height) {
//   const area = width * height;
//   return area;
// }

// console.log(calsRectArea(width, height));

//Подход ООП

// class Rectangle {
//   private _width;
//   private _height;

//   constructor(w: any, h: any) {
//     this._width = w;
//     this._height = h;
//   }

//   public get width() {
//     return this._width;
//   }

//   public set width(value) {
//     if (value <= 0) {
//       this._width = 1;
//     } else {
//       this._width = value;
//     }
//   }

//   calcArea() {
//     const area = this._width * this._height;
//     console.log(area);
//     return area;
//   }
// }

// const rect = new Rectangle(3, 10);
// const rect2 = new Rectangle(10, 2);
// const rect3 = new Rectangle(5, 5);
// rect2.calcArea();
// rect.width = -2;
// console.log(rect);

//Второй пример ООП

// class User {
//   private _username: any;
//   private _password: any;
//   private _id: any;

//   constructor(username: any, password: any) {
//     this._username = username;
//     this._password = password;
//     this._id = 1;
//     //generateRandomId();
//   }

//   get username() {
//     return this._username;
//   }

//   set username(value) {
//     this._username = value;
//   }

//   get password() {
//     return this._password;
//   }

//   set password(value) {
//     this._password = value;
//   }

//   get id() {
//     return this._id;
//   }
// }

// const user = new User('Ulbi', 'Timur');
// user.password = 5;
// console.log(user);

//Третий пример ООП инкапсуляции

// class Database {
//   private _url: any;
//   private _port: any;
//   private _username: any;
//   private _password: any;
//   private _tables: any;

//   constructor(url: any, port: any, username: any, password: any) {
//     this._url = url;
//     this._password = password;
//     this._port = port;
//     this._username = username;
//     this._tables = [];
//   }

//   public createNewTable(table: any) {
//     this._tables.push(table);
//   }

//   public clearTables() {
//     this._tables = [];
//   }

//   public get url(): string {
//     return this._url;
//   }

//   public get port(): string {
//     return this._port;
//   }

//   public get username(): string {
//     return this._username;
//   }

//   public get password(): string {
//     return this._password;
//   }

//   public get tables(): any {
//     return this._tables;
//   }
// }

// const db = new Database(1, 2, 3, 4);

// db.createNewTable('roles');
// db.createNewTable('users');
// db.clearTables();
// console.log(db);

//Пример наследования и полиморфизма

// class Person {
//   private _firstName: string;
//   private _lastName: string;
//   private _age: number;

//   constructor(firstName: any, lastName: any, age: number) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._age = age;
//   }

//   public get firstName(): string {
//     return this._firstName;
//   }

//   public set firstName(v: string) {
//     this._firstName = v;
//   }

//   public get lastame(): string {
//     return this._lastName;
//   }

//   public set lastname(v: string) {
//     this._lastName = v;
//   }

//   public get age(): number {
//     return this._age;
//   }

//   public set age(v: number) {
//     if (v < 0) {
//       this._age = 1;
//     } else {
//       this._age = v;
//     }
//   }

//   public get fullName(): string {
//     return `Фамилия - ${this._lastName}, имя - ${this._firstName}`;
//   }

//   public greeting() {
//     console.log(`Привет, я человек и меня зовут ${this._firstName}.`);
//   }
// }

// class Employee extends Person {
//   private _inn: number;
//   private _number: number;
//   private _snils: string;

//   constructor(
//     firstName: any,
//     lastName: any,
//     age: number,
//     inn: number,
//     number: number,
//     snils: string
//   ) {
//     super(firstName, lastName, age);
//     this._inn = inn;
//     this._number = number;
//     this._snils = snils;
//   }

//   public greeting() {
//     console.log(`Привет, я работник и меня зовут ${this.firstName}.`);
//   }
// }

// class Developer extends Employee {
//   private _level: string;

//   constructor(
//     firstName: any,
//     lastName: any,
//     age: number,
//     inn: number,
//     number: number,
//     snils: string,
//     level: string
//   ) {
//     super(firstName, lastName, age, inn, number, snils);
//     this._level = level;
//   }

//   public greeting() {
//     console.log(`Привет, я девелопер и меня зовут ${this.firstName}.`);
//   }
// }
// const person1 = new Person('Ana', 'Tab', 29);
// const employee1 = new Employee('Ana', 'Tab', 29, 15, 16, '17');
// const developer1 = new Developer('Ana', 'Tab', 29, 15, 16, '17', 'middle');

// const personList: Person[] = [person1, employee1, developer1];
// function massGreating(persons: Person[]) {
//   for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     person.greeting();
//   }
// }
// massGreating(personList);

//Композиция и агрегация
// class Engine {
//   drive() {
//     console.log('Двигатель работает');
//   }
// }

// class Wheel {
//   drive() {
//     console.log('Колеса едут');
//   }
// }

// class Freshener {}

// class Flat {
//   freshener: Freshener;

//   constructor(freshener) {
//     this.freshener = freshener;
//   }
// }

// class Car {
//   engine: Engine;
//   wheels: Wheel[];
//   freshener: Freshener;

//   constructor(freshener) {
//     //Агрегация
//     this.freshener = freshener;
//     //Композиция
//     this.engine = new Engine();
//     this.wheels = [];
//     this.wheels.push(new Wheel());
//     this.wheels.push(new Wheel());
//     this.wheels.push(new Wheel());
//     this.wheels.push(new Wheel());
//   }
//   //делегирование
//   drive() {
//     this.engine.drive();
//     for (let i = 0; i < this.wheels.length; i++) {
//       this.wheels[i].drive();
//     }
//   }
// }

// const bmv = new Car();
// bmv.drive();

// //Интерфейсы
// class User {
//   username: string;
//   age: number;
// }

// // class Car {}

// // interface Repository<T> {
// //   create: (obj: T) => T;
// //   get: () => T;
// //   delete: (obj: T) => T;
// //   update: (obj: T) => T;
// // }

// // class UserRepo implements Repository<User> {
// //   create(obj: User): User {
// //     return undefined as any;
// //   }

// //   delete(obj: User): User {
// //     return undefined as any;
// //   }

// //   get(): User {
// //     return undefined as any;
// //   }

// //   update(obj: User): User {
// //     return undefined as any;
// //   }
// // }

// // class CarRepo implements Repository<Car> {
// //   create: (obj: Car) => Car;
// //   get: () => Car;
// //   delete: (obj: Car) => Car;
// //   update: (obj: Car) => Car;
// // }

// //Dependency Injection

// interface UserRepo {
//   getUsers: () => User[];
//   //delete, create...
// }

// class UserMongoDBRepo implements UserRepo {
//   getUsers: () => User[] = () => {
//     console.log('Используем подключение к монго и получаем пользователей');
//     return [];
//   };
// }

// class UserPostgresRepo implements UserRepo {
//   getUsers: () => User[] = () => {
//     console.log('Используем подключение к Postgres и получаем');
//     return [{ age: 15, username: 'Пользователь из Postgres ДБ' }];
//   };
// }

// class UserService {
//   userRepo: UserRepo;

//   constructor(userRepo: UserRepo) {
//     this.userRepo = userRepo;
//   }

//   filterUserByAge(age: number) {
//     const users = this.userRepo.getUsers();
//     //Какая-то логика фильтрации
//     console.log(users);
//   }
// }

// const userService = new UserService(new UserMongoDBRepo());
// userService.filterUserByAge(15);

//Паттерн Синглтон - Singleton

// class Database {
//   static url: string;
//   private static instance: Database;

//   constructor() {
//     if (Database.instance) {
//       return Database.instance;
//     }
//     Database.url = Math.random().toString();
//     Database.instance = this;
//   }
// }

// const db1 = new Database();
// const db2 = new Database();

// console.log(Database.url);
// console.log(db2);

class Singleton {
  private static instance: Singleton | null = null;
  private data: string;

  private constructor() {
    this.data = Math.random().toString();
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): string {
    return this.data;
  }
}

// Использование Singleton
const singletonInstance1 = Singleton.getInstance();
console.log(singletonInstance1.getData()); // Output: Hello Singleton!

const singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance2.getData()); // Output: Hello Singleton!

console.log(singletonInstance1 === singletonInstance2); // Output: true
