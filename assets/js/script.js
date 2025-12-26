const toggleBtn = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const header = document.getElementById('navbar');
const footL = document.getElementById('footer-links');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('expanded');
  header.classList.toggle('expand');
  footL.classList.toggle('expandF');
});
const roleSwitch = document.getElementById('roleSwitch');
const roleLabel = document.getElementById('roleLabel');
const roleSub = document.getElementById('roleSub');

function updateRole() {
  if (roleSwitch.checked) {
    roleLabel.textContent = "Employer";
    roleLabel.classList.remove("freelancer-active");
    roleLabel.classList.add("employer-active");
    roleSub.textContent = "Switch to Freelancer";
  } else {
    roleLabel.textContent = "Freelancer";
    roleLabel.classList.remove("employer-active");
    roleLabel.classList.add("freelancer-active");
    roleSub.textContent = "Switch to Employer";
  }
}

roleSwitch.addEventListener('change', updateRole);

// Run once on page load
updateRole();

// language dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('selectedLang').textContent = this.dataset.lang;
  });
});

// toggle table

const toggleButtons = document.querySelectorAll('.toggle-btn');
const tableRows = document.querySelectorAll('#transactionTable tr');

toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Remove active class from all buttons
    toggleButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    this.classList.add('active');

    // Get filter value
    const filter = this.getAttribute('data-filter');

    // Filter rows
    tableRows.forEach(row => {
      if (filter === 'all') {
        row.style.display = '';
      } else if (filter === 'earnings') {
        if (row.classList.contains('earning-row') || row.classList.contains('clearing-row')) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      } else if (filter === 'withdrawals') {
        if (row.classList.contains('withdrawal-row')) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    });
  });
});


document.querySelectorAll('.order-id').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Order details would open here for: ' + this.textContent);
  });
});

