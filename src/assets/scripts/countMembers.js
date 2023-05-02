function fetchData() {
   setTimeout(() => {
      fetchData();
   }, 5000);
   fetch('/api/posts', { method: 'GET' })
      .then(res => {
         return res.json();
      })
      .then(res => {
         document.querySelector('.backend-members').innerHTML = res.tot_members;
      });
}

fetchData();
