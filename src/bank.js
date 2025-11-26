debugger;

class BankAccount {
  #balance = 0;
  static #totalNumberOfAccounts = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];

  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += account.getBalance();
    });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find(
      (account) => (account.accountNumber = accountNumber)
    );
  }
}

// TEST YOUR CODE HERE

// Create a Bank instance
const myBank = new Bank("First National");
console.log(myBank); // Bank { name: "First National" }

// Create BankAccount instances
const account1 = new BankAccount("001", "Alice");
const account2 = new BankAccount("002", "Bob");
console.log(account1); // BankAccount { accountNumber: "001", ownerName: "Alice" }
console.log(account2); // BankAccount { accountNumber: "002", ownerName: "Bob" }

// Add accounts to the bank
myBank.addAccount(account1);
myBank.addAccount(account2);
console.log(myBank.accounts);
/* 
[
  BankAccount { accountNumber: "001", ownerName: "Alice" },
  BankAccount { accountNumber: "002", ownerName: "Bob" }
]
*/

// Perform deposits and withdrawals
console.log(account1.deposit(100)); // Deposited $100. New Balance: 100
console.log(account1.withdraw(50)); // Withdrew $50. New Balance: 50
console.log(account2.deposit(250)); // Deposited $250. New Balance: 250

// Check total balance of the bank
console.log(myBank.getTotalBalance()); // 300

// Find a specific account by accountNumber
console.log(myBank.findAccount("001").ownerName); // "Alice"

// Create a new account and check total accounts
new BankAccount("003", "Charlie");
console.log("Total accounts:", BankAccount.getTotalNumberOfAccounts()); // Should be 3

// DO NOT REMOVE
module.exports = { BankAccount, Bank };
