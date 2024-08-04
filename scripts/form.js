
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxUF8UVe2w1ll1MYyjhDmXmYqMmeE3vAs-K7XvM5v7VT6I0KPRE2CLecwZ0aZpVnrrQqg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
       