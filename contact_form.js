const scriptURL = 'https://script.google.com/macros/s/AKfycby1xZPL-LMF3VxQuaIa8L6CzlGdUl1WYTnLVd3BQNFIREpS440YAln4gkidN2QMZxl2fQ/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => 
            alert("Your message has been recorded, Thank you !"),
            form.reset()
        ) 
        
        .catch(error => alert("Unknown error occured, Please try again."))
        })

        
  
