// ------------------------------------------ index.html ----------------------------------------------------
    // <!-- JS for card section -->

    const creditButton = document.getElementById("credit-button");
    const debitButton = document.getElementById("debit-button");
    const creditContent = document.getElementById("credit-content");
    const debitContent = document.getElementById("debit-content");

    // Initially show credit card details
    creditContent.style.display = "block";

    creditButton.addEventListener("click", () => {
      creditContent.style.display = "block";
      debitContent.style.display = "none";
    });

    debitButton.addEventListener("click", () => {
      creditContent.style.display = "none";
      debitContent.style.display = "block";
    });

    // JS of carousel
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const indicatorParents = document.querySelector('.controls ul li')
    var sectionindex = 0;
    
    function setindex() {
      document.querySelector('.controls .selected').classList.remove('selected');
      slider.style.transform = 'translate(' + (sectionindex) * -20 + '%)';
    }
    document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
      indicator.addEventListener('click', function () {
        sectionindex = ind;
        setindex();
        indicator.classList.add('selected');
      });
    });

    leftArrow.addEventListener('click', function () {
      sectionindex = (sectionindex > 0) ? sectionindex - 1 : 0;
      indicatorParents.children[sectionindex].classList.add('selected')
      setindex();
    });

    rightArrow.addEventListener('click', function () {
      sectionindex = (sectionindex < 3) ? sectionindex + 1 : 3;
      indicatorParents.children[sectionindex].classList.add('selected');
      setindex();
    });


// ------------------------------------------ login. html ----------------------------------------------------

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var formBox = document.getElementById("myForm"); // Get the .form-box element
// var registerBox = document.getElementById("register") ;
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    z.style.width = "138px";
    formBox.style.width = "50%"; // Change the width to 50%
    formBox.style.height = "680px"; // Change the width to 50%
    formBox.style.marginTop = "3%";
    formBox.style.overflow = "scroll";
    formBox.style.overflowX = "hidden";
    
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    z.style.width = "110px";
    formBox.style.width = "380px"; // Reset the width to the default value
    formBox.style.height = "60%"; // Reset the width to the default value
    formBox.style.marginTop = "10%";
    formBox.style.overflow = "hidden";
}
// <!-- password validation -->
const pwdField = document.getElementById('pwdInputField');
const pwdErrorSpan = document.getElementById('pwdErrorDisplay');

pwdField.addEventListener('input', function () {
    const pwdPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).{8,12}$/;
    
    if (this.value && !pwdPattern.test(this.value)) {
        pwdErrorSpan.textContent = "Invalid password format";
    } else {
        pwdErrorSpan.textContent = ""; // Clear the error message if the input is valid
    }
});
// <!-- password re-enter password validation -->
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).{8,12}$/;

passwordInput.addEventListener('input', function () {
    if (this.value && !passwordRegex.test(this.value)) {
        passwordError.textContent = "Invalid password format";
    } else {
        passwordError.textContent = ""; // Clear the error message if the input is valid
    }
});

confirmPasswordInput.addEventListener('input', function () {
    if (this.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = ""; // Clear the error message if the passwords match
    }
});
// <!-- aadhar card validation -->
const aadharCardInput = document.getElementById('aadharCardNumber');
aadharCardInput.addEventListener('input', function () {
    let cursorPosition = this.selectionStart;
    let rawValue = this.value.split(" ").join("");  // Remove existing spaces
    
    // Check if the value is purely numeric
    if (/^\d*$/.test(rawValue)) {
        // Format with spaces after every 4 digits
        let formattedValue = rawValue.replace(/(\d{4})/g, '$1 ').trim();
        
        // Adjust cursor position for spaces added
        cursorPosition += Math.floor(cursorPosition / 5) - Math.floor((cursorPosition - 1) / 5);
        
        // Update the input value and cursor position
        this.value = formattedValue;
        this.selectionStart = cursorPosition;
        this.selectionEnd = cursorPosition;
    } else {
        // If there are any non-numeric characters, reset the value
        this.value = rawValue;
    }
});

// <!-- pan card validation -->
const panCardInput = document.getElementById('panCardNumber');
const panError = document.getElementById('panError');

// Convert input to uppercase and validate format as the user types
panCardInput.addEventListener('input', function () {
    this.value = this.value.toUpperCase();
    
    const panPartialRegex = /^(?:[A-Z]{1,4}|[A-Z]{4}\d{1,5}|[A-Z]{4}\d{5}[A-Z]?)$/;
    
    if (this.value && !panPartialRegex.test(this.value)) {
        panError.textContent = "Invalid PAN card format";
        this.value = ''; // Clear the input value
    } else {
        panError.textContent = ""; // Clear the error message if the input is valid
    }
});
panCardInput.addEventListener('blur', function () {
    const panFullRegex = /^[A-Z]{4}\d{5}[A-Z]$/;
    
    if (this.value && !panFullRegex.test(this.value)) {
        panError.textContent = "Wrong PAN card number";
        this.value = ''; // Clear the input value
    } else {
        panError.textContent = ""; // Clear the error message if the input is valid
    }
});

// ------------------------------------------ loan. html ----------------------------------------------------
    // <!-- loan amount restriciton -->

    const loanTypeSelect = document.getElementById('loanTypeSelect');
    const loanAmountInput = document.querySelector('input[name="loan amount"]');
    const loanMaxAmounts = {
        'Commercial': 2000000,
        'Real Estate': 1500000,
        'Personal': 500000,
        'House Loan': 5000000,
        'Car': 1500000,
        'Education ': 4000000
    };
    const interestRates = {
        'House Loan': 8.60,
        'Car': 8.70,
        'Education ': 8.55,
        'Personal': 10.90,
        'Real Estate': 12,
        'Commercial': 11
    };

    loanTypeSelect.addEventListener('change', function () {
        loanAmountInput.value = '';
    });

    loanAmountInput.addEventListener('change', function () {
        const selectedLoanType = loanTypeSelect.value;
        if (selectedLoanType === 'Select') return;

        const maxAmount = loanMaxAmounts[selectedLoanType];
        if (this.value > maxAmount) {
            alert(`For a ${selectedLoanType} loan, the maximum amount is ₹${maxAmount.toLocaleString()}.`);
            this.value = '';
        } else {
            const rate = interestRates[selectedLoanType];
            const interestAmount = (this.value * rate) / 100;
            const totalAmount = parseFloat(this.value) + interestAmount;
            alert(`For a loan of ₹${this.value.toLocaleString()} at an interest rate of ${rate}%, the total amount to be repaid will be ₹${totalAmount.toLocaleString()}.`);
        }
    });


    // <!-- loan type script -->
    document.getElementById('loanTypeSelect').addEventListener('focus', function () {
        this.querySelector('option[value="Select"]').disabled = true;
    });
    // <!-- phn number regex -->
    const phoneNumberInput = document.getElementById('phoneNumberInput');

    phoneNumberInput.addEventListener('blur', function () {
        // Regular expression to check if the number is 10 digits and starts with 6, 7, 8, or 9
        const phoneRegex = /^[6-9]\d{9}$/;

        if (this.value && !phoneRegex.test(this.value)) {
            alert('Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.');
            this.value = '';  // Clear the input field
        }
    });


    // <!-- loan tenure script -->
    document.getElementById('loanTenureInput').addEventListener('input', function () {
        var value = this.value;
        if (value > 12) {
            document.getElementById('loanTenureError').innerText = "Loan tenure cannot exceed 12 years.";
            this.value = '';  // Optionally, you can clear the input if it's invalid
        } else {
            document.getElementById('loanTenureError').innerText = '';
        }
    });
// ------------------------------------------ Account.html ----------------------------------------------------

// User details
const user = {
    name: "John Doe",
    accountNumber: "1234567890",
    accountType: "Savings",
    balance: 5000
};

// Display welcome message
const welcomeMessage = `Hi ${user.name}, welcome back!`;
document.getElementById("welcome").textContent = welcomeMessage;

// Display balance
document.getElementById("balance").textContent = `Rs. ${user.balance}`;

function transferMoney() {
    const transactionTable = document.getElementById("transactionHistory");
    const accountNumber = document.getElementById("recipient").value;
    const amount = parseInt(document.getElementById("amount").value);
    const note = document.getElementById("note").value;
    const currentBalanceElem = document.getElementById("balance");
    const currentBalance = parseInt(currentBalanceElem.textContent.replace("Rs. ", ""));
    
    if (amount > currentBalance) {
        document.getElementById("error").textContent = "Insufficient balance";
        return; // exit the function early so that the balance update doesn't happen
    } else if (amount <= 0) {
        document.getElementById("error").textContent = "Invalid amount for transfer";
        return;
    }
    else {
        const newRow = transactionTable.insertRow();
        newRow.insertCell(0).textContent = transactionTable.rows.length - 1;
        newRow.insertCell(1).textContent = new Date().toLocaleString();
        newRow.insertCell(2).textContent = accountNumber;
        newRow.insertCell(3).textContent = note;  // Adding the note
        const amountCell = newRow.insertCell(4);
        amountCell.textContent = "-" + amount;
        amountCell.style.color = "red";
    }
    
    // Update balance after the transaction
    const newBalance = currentBalance - amount;
    currentBalanceElem.textContent = `Rs. ${newBalance}`;
    
}

document.addEventListener('DOMContentLoaded', function () {
    var loansButton = document.getElementById('loans-button');
    loansButton.addEventListener('click', function () {
        window.location.href = 'loan.html';
    });
});

// ------------------------------------------ Novus.html ----------------------------------------------------
    // Sample FAQs
    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Visit our signup page and follow the instructions to create a new account."
        },
        {
            question: "How do I reset my password?",
            answer: "Click on the 'Forgot Password' link on the login page and follow the instructions."
        },
        {
            question: "What are the requirements for opening an account?",
            answer: "The requirements may vary depending on the type of account. Typically, you'll need identification documents, proof of address, and an initial deposit."
        },
        {
            question: "How can I transfer funds between my accounts?",
            answer: "You can easily transfer funds between your accounts using our online banking platform. Online transfers are processed instantly, providing you with a convenient and efficient way to manage your finances."
        },
        {
            question: "Are there any additional charges for using debit/credit cards abroad?",
            answer: "Yes, there might be foreign transaction fees for using your cards abroad. Please refer to our Terms of Use for more information."
        }

    ];

    const faqsSection = document.getElementById('faqs');

    faqs.forEach(faq => {
        const faqCard = document.createElement('div');
        faqCard.classList.add('faq-card');

        const question = document.createElement('h3');
        question.textContent = faq.question;

        const answer = document.createElement('p');
        answer.textContent = faq.answer;

        faqCard.appendChild(question);
        faqCard.appendChild(answer);
        faqsSection.appendChild(faqCard);
    });