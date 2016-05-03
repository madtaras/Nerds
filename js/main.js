;(function () {
  var scrollMenu = document.querySelector('#scroll-menu')

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 440) {
      if (!scrollMenu.classList.contains('opened')) scrollMenu.classList.add('opened')
    } else if (scrollMenu.classList.contains('opened')) {
      scrollMenu.classList.remove('opened')
    }
  })

  var contactsForm = document.querySelector('#contacts_form')
  document.querySelector('#write-us-btn').addEventListener('click', function () {
    contactsForm.classList.toggle('opened')
  })
})()
