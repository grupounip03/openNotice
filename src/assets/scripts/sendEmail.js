document.querySelector('.submit').addEventListener('click', function () {
   fetch('/create_post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         email: document.querySelector('input[name="email"]').value
      })
   })
      .then(res => {
         return res.json();
      })
      .then(res => {
         if (res.status == 'error') {
            alert('Email já registrado');
         }
      });
});
