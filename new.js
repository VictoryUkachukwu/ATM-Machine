let bal = 100000;

// for the greeting and acc number input
function welCome() {
          let welcome = prompt("WELCOME TO V-BANK PLC. \n Input Account Number");
                    if(welcome == "1234567890") {
                    accPin();
                    }else if(welcome == "") {
                              alert("Input a valid account number");
                              welCome();
                    }else{
                              alert("Unrecognized account number");
                              welCome();
                    }
}

welCome();

// for the acc pin input
function accPin() {
          let myPin = prompt("Enter your 5-digit pin");
                    if(myPin == "12345") {
                              alert("Welcome, Victory!");
                              transact();
                    }else if(myPin == "") {
                              alert("Invalid pin");
                              accPin();
                    }else{
                              alert("Unrecognized pin");
                              accPin();
                    }
}

// for the transaction menu
function transact() {
          let trans = prompt("                               SELECT A TRANSACTION: \n 1. Balance                                                                     2. Withdrawal \n \n 3. Deposit                                                                     4. Transfer");
                    if(trans == "") {
                              alert("Please select an option");
                              transact();
                    }else if(trans == "1") {
                              balance();
                    }else if(trans == "2") {
                              withdrawal();
                    }else if(trans == "3") {
                              deposit();
                    }else if(trans == "4") {
                              transfer();
                    }else{
                              alert("Please select a valid option [1, 2, 3, 4]");
                              transact();
                    }
}

// for checking acc balance
function balance() {
          alert(`Your account balance is ${bal} naira`);
          anSwr();
}

// for another transaction request redirect
function anSwr() {
          let answr = prompt("Do you want to perform another transaction? \n 1. Yes  \n 2. No");
                    if(answr == "") {
                              alert("Input a valid option");
                              anSwr();
                    }else if(answr == 1) {
                              transact();
                    }else if(answr == 2) {
                              alert("Thank you for banking with us!");
                    }else{
                              alert("Please select a valid option");
                              anSwr();
                    }
}

// for withdrawal
function withdrawal() {
          let withdraw = prompt("Select amount to withdraw");
                    if(withdraw == "") {
                              alert("Select a valid amount");
                              withdrawal();
                    }else if(withdraw <= bal) {
                              alert(`${withdraw} naira has been debited from your account \n \n Press OK to check balance`);
                              alert(`Your current balance is ${bal - withdraw} naira`);
                              anSwr();
                    }else if(withdraw > bal) {
                              alert("Insufficient funds");
                              withdrawal();
                    }else {
                              alert("Input a valid option");
                              withdrawal();
                    }
}

// for deposit
function deposit() {
          let input = prompt("Select amount to deposit");
                    if(input == "") {
                              alert("Please enter a valid amount");
                              deposit();
                    }else if(isNaN(input)) {
                              alert("Unrecognized input");
                              deposit();
                    }else{
                              alert(`CREDIT ALERT \n\n ${input} naira has been successfully credited to your account \n \n Click OK to check balance`);
                              alert(`Your current balance is ${bal + parseInt(input)} naira`);     //parseInt executes strict numbers
                              anSwr();
                    }
}

// for transfer
function transfer() {
          let transf = prompt("Select recepient's account number");
                    if(transf == "") {
                              alert("Please enter a valid account");
                              transfer()
                    }else if(isNaN(transf)) {
                              alert("Unrecognized input");
                              transfer()
                    }else if(transf.length !== 10) {
                              alert("Please enter a valid account [10 digits]");
                              transfer()
                    }else{
                              function traNsf() {
                                        let traNsfer = prompt("Select amount to transfer");
                                                  if(traNsfer == "") {
                                                            alert("Please enter a valid amount");
                                                            traNsf();
                                                  }else if(isNaN(traNsfer)) {
                                                            alert("Unrecognized input");
                                                            traNsf();
                                                  }else if(traNsfer > bal) {
                                                            alert("Insufficient funds! \n Try again")
                                                            traNsf();
                                                  }else{
                                                            alert(`DEBIT ALERT \n\n You have successfully transferred ${traNsfer} naira to ${transf} \n \n Click OK to check balance`);
                                                            // alert(`Your current balance is ${bal - traNsfer} naira`);
                                                            bal = bal - traNsfer;
                                                            alert(bal);
                                                            anSwr();
                                                  }
                              }
                              traNsf();
                    }
}
