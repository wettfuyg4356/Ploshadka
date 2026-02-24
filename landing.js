document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalForm = document.querySelector('.modal-form');

    
    openModalBtn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });


    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

 
    modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
    
        const formData = new FormData(modalForm);
        const formDataObj = Object.fromEntries(formData.entries());
        
        console.log('Данные формы:', formDataObj);
        
    
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        modalForm.reset();
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}); 
