document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const editExpenseModal = new bootstrap.Modal(document.getElementById('editExpenseModal'));
    const saveChangesBtn = document.getElementById('saveChangesBtn');
  
    // Load expenses from local storage on page load
    loadExpenses();
  
    // Event listener for form submission
    expenseForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Get input values
      const expenseName = document.getElementById('expenseName').value;
      const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
      const expenseCategory = document.getElementById('expenseCategory').value;
  
      // Validate input
      if (expenseName && !isNaN(expenseAmount)) {
        // Add expense to the list
        addExpense(expenseName, expenseAmount, expenseCategory);
  
        // Clear the form inputs
        expenseForm.reset();
  
        // Save expenses to local storage
        saveExpenses();
      } else {
        alert('Please enter valid expense details.');
      }
    });
  
    // Event listener for edit button click
    expenseList.addEventListener('click', function (event) {
      if (event.target.classList.contains('edit-btn')) {
        const listItem = event.target.closest('li');
        const expenseName = listItem.querySelector('span:first-child').textContent;
        const expenseAmount = parseFloat(listItem.querySelector('span:nth-child(2)').textContent);
        const expenseCategory = listItem.querySelector('span:last-child').textContent;
  
        // Populate the modal fields with current values
        document.getElementById('editExpenseName').value = expenseName;
        document.getElementById('editExpenseAmount').value = expenseAmount;
        document.getElementById('editExpenseCategory').value = expenseCategory;
  
        // Show the modal
        editExpenseModal.show();
  
        // Save the index of the edited expense
        saveChangesBtn.dataset.index = listItem.dataset.index;
      }
    });
  
    // Event listener for save changes button click
    saveChangesBtn.addEventListener('click', function () {
      const index = saveChangesBtn.dataset.index;
  
      if (index !== undefined) {
        // Update the expense in the list
        const listItem = expenseList.querySelector(`li[data-index="${index}"]`);
        listItem.querySelector('span:first-child').textContent = document.getElementById('editExpenseName').value;
        listItem.querySelector('span:nth-child(2)').textContent = parseFloat(document.getElementById('editExpenseAmount').value).toFixed(2);
        listItem.querySelector('span:last-child').textContent = document.getElementById('editExpenseCategory').value;
  
        // Save the changes to local storage
        saveExpenses();
  
        // Hide the modal
        editExpenseModal.hide();
      }
    });
  
    // Event listener for delete button click
    expenseList.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.closest('li');
        const index = listItem.dataset.index;
  
        // Remove the expense from the list
        listItem.remove();
  
        // Save the changes to local storage
        saveExpenses();
      }
    });
  
    // Function to add an expense to the list
    function addExpense(name, amount, category) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.dataset.index = Date.now(); // Unique identifier for each expense
      li.innerHTML = `
        <span>${name}</span>
        <span class="badge badge-primary badge-pill">${amount.toFixed(2)}</span>
        <span class="badge badge-secondary">${category}</span>
        <button type="button" class="btn btn-warning btn-sm edit-btn ml-2">Edit</button>
        <button type="button" class="btn btn-danger btn-sm delete-btn ml-2">Delete</button>
      `;
      expenseList.appendChild(li);
    }
  
    // Function to save expenses to local storage
    function saveExpenses() {
      const expenses = [];
      const expenseItems = expenseList.querySelectorAll('li');
  
      expenseItems.forEach(item => {
        const name = item.querySelector('span:first-child').textContent;
        const amount = parseFloat(item.querySelector('span:nth-child(2)').textContent);
        const category = item.querySelector('span:last-child').textContent;
        const index = item.dataset.index;
        expenses.push({ name, amount, category, index });
      });
  
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  
    // Function to load expenses from local storage
    function loadExpenses() {
      const storedExpenses = localStorage.getItem('expenses');
  
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        expenses.forEach(expense => addExpense(expense.name, expense.amount, expense.category));
      }
    }
  });
  