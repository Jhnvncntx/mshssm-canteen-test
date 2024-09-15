//CUSTOMERS LOGIN

localStorage.removeItem('loggedInUser')

const identifiedCustomers = {
    'Adolfo': '122679120002',
    'Lopez': '104636120020',
    'Estropia': '104649130130',
    'Gutierrez': '104642130143',
    'Concepcion': '1070401203555'
  };

  const customerForm = document.getElementById('customerForm');
  
  customerForm.addEventListener('submit', event => {
    event.preventDefault();
  
    const customerIdInput = document.getElementById('customerIdInput').value;
  
    // Get an array of values from the identifiedCustomers object
    const identifiers = Object.values(identifiedCustomers);
  
    // Check if the customerIdInput exists among the values
    if (identifiers.includes(customerIdInput)) {
      // Find the corresponding user name for the identifier
      const userName = Object.keys(identifiedCustomers).find(key => identifiedCustomers[key] === customerIdInput);
      localStorage.setItem('loggedInUser', userName);
      sessionStorage.setItem('loggedIn', 'true')
  
      alert('Login successful! Welcome, User ' + userName);
  
      window.location.href = '/website.html';
    } else {
      alert('Invalid User. Please try again.');
    }
  });

//STAFF's LOGIN

const identifiedStaffs = {
  'Staff1': '123456789',
  'Staff2': '02468',
  'Staff3': '13579',
  'Staff4': '987654321',
  'Staff5': '123246369'
  };

  const staffForm = document.getElementById('staffForm');

  staffForm.addEventListener('submit', event => {
    event.preventDefault();
  
    const staffIdInput = document.getElementById('staffIdInput').value;
  
    // Get an array of values from the identifiedStaffs object
    const identifiers = Object.values(identifiedStaffs);
  
    // Check if the staffIdInput exists among the values
    if (identifiers.includes(staffIdInput)) {
      // Find the corresponding user name for the identifier
      const userName = Object.keys(identifiedStaffs).find(key => identifiedStaffs[key] === staffIdInput);
      localStorage.setItem('loggedInUser', userName);
      sessionStorage.setItem('loggedIn', 'true')
  
      alert('Login successful! Welcome, User ' + userName);
  
      window.location.href = '/store.html';
    } else {
      alert('Invalid User. Please try again.');
    }
  });

  console.log(localStorage.getItem('loggedInUser'))
