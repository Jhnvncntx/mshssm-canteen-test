//isLoggedIn
const loggedIn = sessionStorage.getItem('loggedIn')
if (!loggedIn) {
  window.location.href = 'login.html'
}