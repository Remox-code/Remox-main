    document.addEventListener('click', function(e){
      if(!e.target.closest('.filter')) return;
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      document.querySelectorAll('.card').forEach(card=>{
        if(filter === 'all') card.style.display = '';
        else card.style.display = card.dataset.category === filter ? '' : 'none';
      });
    });