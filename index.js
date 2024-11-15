
let loggedIn = true;

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) 
{
  console.log("You are logged in. Here is your cart: ");
  for (const items of cart) {
    console.log("Item: ", items);
  }
} else {
  console.log("Please log in to view your cart.");
}

let accountBalance = 1000;

function deposit(amount) {
  if (amount > 0) {
    accountBalance += amount;
    console.log(`Deposit successful! You added $${amount}. Your new balance is $${accountBalance}.`);
  } else {
    console.log("Deposit amount must be greater than 0.");
  }
}

function withdraw(amount) {
  if (amount > 0) {
    if (amount <= accountBalance) {
      accountBalance -= amount;
      console.log(`You have withdrawn $${amount}. Your new balance is $${accountBalance}.`);
    } else {
      console.log("Insufficient funds. Cannot withdraw more than your current balance.");
    }
  } else {
    console.log("Withdrawal amount must be greater than 0.");
  }
}

function checkBalance() {
  console.log(`Your current balance is $${accountBalance}.`);
}

// Example usage
deposit(1400);
withdraw(500);
checkBalance();
