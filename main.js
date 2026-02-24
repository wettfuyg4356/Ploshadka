document.addEventListener('DOMContentLoaded', function() {

    const languageTrigger = document.querySelector('.language-trigger');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageContainer = document.querySelector('.language-container');
    
    const currencyTrigger = document.querySelector('.currency-trigger');
    const currencyDropdown = document.querySelector('.currency-dropdown');
    const currencyContainer = document.querySelector('.currency-container');
    
    const searchTrigger = document.querySelector('.search-trigger');
    const searchDropdown = document.querySelector('.search-dropdown');
    const searchContainer = document.querySelector('.search-container');
    
    const profileButton = document.querySelector('.button1');
    const profileDropdown = document.querySelector('.profile-dropdown');
    const profileContainer = document.querySelector('.button-container.profile');
    
    const sellerButton = document.querySelector('.button2');
    const sellerDropdown = document.querySelector('.seller-dropdown');
    const sellerContainer = document.querySelector('.button-container.seller');
    
  
    function closeAllDropdowns() {
        languageDropdown.classList.remove('active');
        currencyDropdown.classList.remove('active');
        searchDropdown.classList.remove('active');
        profileDropdown.classList.remove('active');
        sellerDropdown.classList.remove('active');
        
        languageContainer.classList.remove('active');
        currencyContainer.classList.remove('active');
        searchContainer.classList.remove('active');
    }

    languageTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const isActive = languageDropdown.classList.contains('active');
        closeAllDropdowns();
        
        if (!isActive) {
            languageDropdown.classList.add('active');
            languageContainer.classList.add('active');
        }
    });
    

    currencyTrigger.addEventListener('click', function(e) {

        e.stopPropagation();
        
        const isActive = currencyDropdown.classList.contains('active');
        closeAllDropdowns();
        
        if (!isActive) {
            currencyDropdown.classList.add('active');
            currencyContainer.classList.add('active');
        }
    });
    
 
    searchTrigger.addEventListener('click', function(e) {

        e.stopPropagation();
        
        const isActive = searchDropdown.classList.contains('active');
        closeAllDropdowns();
        
        if (!isActive) {
            searchDropdown.classList.add('active');
            searchContainer.classList.add('active');
         
            setTimeout(() => {
                document.querySelector('.search-input').focus();
            }, 100);
        }
    });
    
  
    profileButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const isActive = profileDropdown.classList.contains('active');
        closeAllDropdowns();
        
        if (!isActive) {
            profileDropdown.classList.add('active');
        }
    });
    
  
    sellerButton.addEventListener('click', function(e) {

        e.stopPropagation();
        
        const isActive = sellerDropdown.classList.contains('active');
        closeAllDropdowns();
        
        if (!isActive) {
            sellerDropdown.classList.add('active');
        }
    });
    
  
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-container') && 
            !e.target.closest('.currency-container') && 
            !e.target.closest('.search-container') && 
            !e.target.closest('.button-container.profile') && 
            !e.target.closest('.button-container.seller')) {
            closeAllDropdowns();
        }
    });
    
  
    document.querySelectorAll('.language-dropdown a, .currency-dropdown a, .profile-dropdown a, .seller-dropdown a').forEach(item => {
        item.addEventListener('click', function(e) {
        
            const text = this.textContent;
            
            if (this.closest('.language-dropdown')) {
                languageTrigger.textContent = text.split(' ')[0]; 
                closeAllDropdowns();
            } else if (this.closest('.currency-dropdown')) {
                currencyTrigger.textContent = text.split(' ')[0]; 
                closeAllDropdowns();
            } else if (this.closest('.profile-dropdown')) {
               
                console.log('Выбрано действие профиля:', text);
                closeAllDropdowns();
            } else if (this.closest('.seller-dropdown')) {
          
                console.log('Выбрано действие продавца:', text);
                closeAllDropdowns();
            }
        });
    });
    
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });
});

const productsData = {
    transport: [
        {
            id: 1,
            title: "Renault Premium 420HP",
            price: "€45,000",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=Renault+Premium",
            category: "truck",
            country: ["france", "italy"],
            brand: "renault",
            model: "premium",
            year: 2011,
            mileage: 210000,
            details: {
                category: "Грузовик",
                country: "Франция, Италия",
                brand: "Renault",
                model: "Premium 420HP",
                year: 2011,
                mileage: "210,000 км",
                engine: "420 HP"
            }
        },
        {
            id: 2,
            title: "Renault Kangoo Z.E.",
            price: "€22,500",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=Kangoo+Z.E.",
            category: "van",
            country: ["france"],
            brand: "renault",
            model: "kangoo",
            year: 2020,
            mileage: 45000,
            details: {
                category: "Фургон",
                country: "Франция",
                brand: "Renault",
                model: "Kangoo Z.E.",
                year: 2020,
                mileage: "45,000 км",
                type: "Электрический"
            }
        },
        {
            id: 3,
            title: "Renault Dokker Van",
            price: "€18,900",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=Dokker+Van",
            category: "van",
            country: ["italy"],
            brand: "renault",
            model: "dokker",
            year: 2018,
            mileage: 89000,
            details: {
                category: "Фургон",
                country: "Италия",
                brand: "Renault",
                model: "Dokker Van",
                year: 2018,
                mileage: "89,000 км"
            }
        },
        {
            id: 4,
            title: "Renault Traffic",
            price: "€31,200",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=Traffic",
            category: "van",
            country: ["france", "germany"],
            brand: "renault",
            model: "traffic",
            year: 2019,
            mileage: 120000,
            details: {
                category: "Фургон",
                country: "Франция, Германия",
                brand: "Renault",
                model: "Traffic",
                year: 2019,
                mileage: "120,000 км"
            }
        },
        {
            id: 5,
            title: "Renault New Master",
            price: "€37,800",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=New+Master",
            category: "truck",
            country: ["france"],
            brand: "renault",
            model: "master",
            year: 2021,
            mileage: 35000,
            details: {
                category: "Грузовик",
                country: "Франция",
                brand: "Renault",
                model: "New Master",
                year: 2021,
                mileage: "35,000 км"
            }
        },
        {
            id: 6,
            title: "Peugeot Boxer 8000",
            price: "€42,500",
            image: "https://via.placeholder.com/400x300/009661/ffffff?text=Peugeot+Boxer",
            category: "truck",
            country: ["france"],
            brand: "peugeot",
            model: "boxer",
            year: 2017,
            mileage: 150000,
            details: {
                category: "Грузовик",
                country: "Франция",
                brand: "Peugeot",
                model: "Boxer 8000",
                year: 2017,
                mileage: "150,000 км"
            }
        }
    ],
    agriculture: [
        {
            id: 7,
            title: "John Deere Tractor",
            price: "€85,000",
            image: "https://via.placeholder.com/400x300/4CAF50/ffffff?text=John+Deere",
            category: "tractor",
            country: ["germany"],
            brand: "john deere",
            year: 2019,
            mileage: 2500,
            details: {
                category: "Трактор",
                country: "Германия",
                brand: "John Deere",
                year: 2019,
                mileage: "2,500 км"
            }
        }
    ],
    construction: [
        {
            id: 8,
            title: "Caterpillar Excavator",
            price: "€125,000",
            image: "https://via.placeholder.com/400x300/FF9800/ffffff?text=Caterpillar",
            category: "excavator",
            country: ["usa"],
            brand: "caterpillar",
            year: 2020,
            mileage: 1500,
            details: {
                category: "Экскаватор",
                country: "США",
                brand: "Caterpillar",
                year: 2020,
                mileage: "1,500 км"
            }
        }
    ],
    loading: [
        {
            id: 9,
            title: "Toyota Forklift",
            price: "€35,000",
            image: "https://via.placeholder.com/400x300/2196F3/ffffff?text=Toyota+Forklift",
            category: "forklift",
            country: ["japan"],
            brand: "toyota",
            year: 2021,
            mileage: 800,
            details: {
                category: "Погрузчик",
                country: "Япония",
                brand: "Toyota",
                year: 2021,
                mileage: "800 км"
            }
        }
    ]
};


let currentFilters = {
    category: 'all',
    country: 'all',
    brand: 'all',
    model: 'all',
    year: '',
    mileage: ''
};

let currentCategory = 'transport';


document.addEventListener('DOMContentLoaded', function() {
  
    loadProducts();
    

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {

            document.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
            });
            
      
            this.classList.add('active');
            
          
            currentCategory = this.getAttribute('data-category');
            
           
            loadProducts();
        });
    });

    document.querySelectorAll('.filter-select, .filter-input').forEach(filter => {
        filter.addEventListener('change', function() {
            const filterType = this.getAttribute('data-filter');
            const value = this.value;
            currentFilters[filterType] = value;
            filterProducts();
        });
        
        filter.addEventListener('input', function() {
            const filterType = this.getAttribute('data-filter');
            const value = this.value;
            currentFilters[filterType] = value;
            filterProducts();
        });
    });
    
    
    document.querySelector('.apply-filters').addEventListener('click', function() {
        filterProducts();
    });
    
  
    document.querySelector('.reset-filters').addEventListener('click', function() {
        resetFilters();
    });
});


function loadProducts() {
    const products = productsData[currentCategory];
    const container = document.querySelector('.products-container');
    
    if (!products || products.length === 0) {
        container.innerHTML = '<p class="no-products">Товары в этой категории отсутствуют</p>';
        return;
    }
    
    displayProducts(products);
}


function displayProducts(products) {
    const container = document.querySelector('.products-container');
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-country', product.country.join(' '));
    card.setAttribute('data-brand', product.brand);
    card.setAttribute('data-model', product.model || '');
    card.setAttribute('data-year', product.year);
    card.setAttribute('data-mileage', product.mileage);
    
    const detailsHtml = Object.entries(product.details)
        .map(([key, value]) => `
            <div class="detail-item">
                <span class="detail-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span class="detail-value">${value}</span>
            </div>
        `)
        .join('');
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${product.price}</div>
            <div class="product-details">
                ${detailsHtml}
            </div>
            <div class="product-actions">
                <button class="product-button primary">Подробнее</button>
                <button class="product-button secondary">В избранное</button>
            </div>
        </div>
    `;
    
    return card;
}

function filterProducts() {
    const products = productsData[currentCategory];
    if (!products) return;
    
    const filteredProducts = products.filter(product => {
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }
        
        if (currentFilters.country !== 'all' && !product.country.includes(currentFilters.country)) {
            return false;
        }
        
        if (currentFilters.brand !== 'all' && product.brand !== currentFilters.brand) {
            return false;
        }
        
        if (currentFilters.model !== 'all' && product.model !== currentFilters.model) {
            return false;
        }
        
        if (currentFilters.year && product.year < parseInt(currentFilters.year)) {
            return false;
        }
        
        if (currentFilters.mileage && product.mileage > parseInt(currentFilters.mileage)) {
            return false;
        }
        
        return true;
    });
    
    displayProducts(filteredProducts);
}

function resetFilters() {
    currentFilters = {
        category: 'all',
        country: 'all',
        brand: 'all',
        model: 'all',
        year: '',
        mileage: ''
    };
    
    document.querySelectorAll('.filter-select').forEach(select => {
        select.value = 'all';
    });
    
    document.querySelectorAll('.filter-input').forEach(input => {
        input.value = '';
    });
    
    loadProducts();
}
document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('modelSelect');
    const modelDisplay = modelSelect.querySelector('.select-display');
    const modelOptionsContainer = modelSelect.querySelector('.select-options');
    const options = modelOptionsContainer.querySelectorAll('.option');


    modelDisplay.addEventListener('click', (e) => {

        if (e.target === modelDisplay) {
            modelSelect.classList.toggle('active');
            modelOptionsContainer.classList.toggle('open');
        }
    });


    options.forEach(option => {
        option.addEventListener('click', (e) => {
            
            const selectedValue = option.textContent;
            modelDisplay.textContent = selectedValue;
            
            options.forEach(opt => opt.classList.remove('selected'));
            
            
            option.classList.add('selected');

    
            modelSelect.classList.remove('active');
            modelOptionsContainer.classList.remove('open');
     
            console.log('Выбрана модель:', selectedValue);
        });
    });

    document.addEventListener('click', (e) => {
        if (!modelSelect.contains(e.target) && modelSelect.classList.contains('active')) {
            modelSelect.classList.remove('active');
            modelOptionsContainer.classList.remove('open');
        }
    });
    

}); 
document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('modelSelect');
    const modelDisplay = modelSelect.querySelector('.select-display');
    const modelOptionsContainer = modelSelect.querySelector('.select-options');
    const options = modelOptionsContainer.querySelectorAll('.option');

    modelDisplay.addEventListener('click', (e) => {
        if (e.target === modelDisplay) {
            const isActive = modelSelect.classList.contains('active');
            
            
            document.querySelectorAll('.custom-select.active').forEach(select => {
                if (select !== modelSelect) {
                    select.classList.remove('active');
                    select.querySelector('.select-options').classList.remove('open');
                }
            });
            
            modelSelect.classList.toggle('active');
            modelOptionsContainer.classList.toggle('open');
        }
    });

    
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            
            const selectedValue = option.textContent;
            modelDisplay.textContent = selectedValue;
            
            
            options.forEach(opt => opt.classList.remove('selected'));
            
            
            option.classList.add('selected');
            
            
            setTimeout(() => {
                modelSelect.classList.remove('active');
                modelOptionsContainer.classList.remove('open');
            }, 200);
            
            console.log('Выбрана модель:', selectedValue);
        });
    });

    
    document.addEventListener('click', (e) => {
        if (!modelSelect.contains(e.target) && modelSelect.classList.contains('active')) {
            modelSelect.classList.remove('active');
            modelOptionsContainer.classList.remove('open');
        }
    });
    
    
    document.querySelectorAll('.custom-select').forEach(select => {
        const display = select.querySelector('.select-display');
        const optionsContainer = select.querySelector('.select-options');
        
        if (display && optionsContainer) {
            display.addEventListener('click', (e) => {
                if (e.target === display || e.target.closest('.select-display')) {
                    const isActive = select.classList.contains('active');
                    
                    
                    document.querySelectorAll('.custom-select.active').forEach(s => {
                        if (s !== select) {
                            s.classList.remove('active');
                            s.querySelector('.select-options')?.classList.remove('open');
                        }
                    });
                    
                    select.classList.toggle('active');
                    optionsContainer.classList.toggle('open');
                }
            });
        }
    });
}); 


document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.button-end2');
    const hiddenResults = document.querySelector('.hidden-results');
    const hiddenRows = document.querySelectorAll('.hidden-row');
    
    let isExpanded = false;
    
    // Скрываем карточки при загрузке
    if (hiddenResults) {
        hiddenResults.style.display = 'none';
    }
    
    loadMoreButton.addEventListener('click', function(e) {

        
        if (!isExpanded) {
        
            hiddenResults.style.display = 'block';
            
            
            setTimeout(() => {
                hiddenResults.classList.add('show');
            }, 10);
            
            
            this.textContent = 'Скрыть';
            this.classList.add('active');
            
            // Плавная прокрутка к новым карточкам
            setTimeout(() => {
                hiddenResults.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 300);
            
            isExpanded = true;
        } else {
            
            hiddenResults.classList.remove('show');
            
            
            setTimeout(() => {
                hiddenResults.style.display = 'none';
            }, 600);
            
            
            this.textContent = 'Смотреть больше';
            this.classList.remove('active');
           
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            isExpanded = false;
        }
    });
}); 
// Слайдер для недавно просмотренных
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slideCards = document.querySelectorAll('.slide-card');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    let currentIndex = 0;
    const cardsPerView = 4;
    const cardWidth = 280 + 30; 
    
    
    function updateActiveCards() {
        slideCards.forEach((card, index) => {
            card.classList.remove('active');
            
            
            if (index >= currentIndex && index < currentIndex + cardsPerView) {
                card.classList.add('active');
            }
        });
    }
    
    
    function scrollToSlide(direction) {
        if (direction === 'next') {
            if (currentIndex + cardsPerView < slideCards.length) {
                currentIndex++;
            } else {
                currentIndex = 0; 
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slideCards.length - cardsPerView; 
            }
        }
        

        slidesContainer.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
        
        updateActiveCards();
    }
    

    if (prevArrow) {
        prevArrow.addEventListener('click', () => scrollToSlide('prev'));
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', () => scrollToSlide('next'));
    }
    

    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            scrollToSlide('next');
        }, 5000); 
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    

    startAutoScroll();
    

    if (slidesContainer) {
        slidesContainer.addEventListener('mouseenter', stopAutoScroll);
        slidesContainer.addEventListener('mouseleave', startAutoScroll);
    }
    

    updateActiveCards();
    

    function updateCardsPerView() {
        const width = window.innerWidth;
        
        if (width <= 480) {
            cardsPerView = 2;
        } else if (width <= 768) {
            cardsPerView = 3;
        } else {
            cardsPerView = 4;
        }
        
        updateActiveCards();
    }
    
    window.addEventListener('resize', updateCardsPerView);
    updateCardsPerView(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const cardsGrid = document.querySelector('.cards-grid');
    const sortSelect = document.querySelector('.sort-select');
    const resultsCount = document.querySelector('.results-count');
    const paginationButtons = document.querySelectorAll('.page-btn');
    

    const filterCardsData = [
        {
            id: 1,
            image: "/img/Rectangle58(1).png",
            title: "Opel COMBO Airco Elct Ramen Stuurbediening",
            subtitle: "Закрытые грузопассажирские автомобили",
            location: "Garage van Nierop Netherlands",
            price: "1500$",
            year: "2015",
            mileage: "120,000 км",
            details: ["AC", "Manual", "Diesel"]
        },
        {
            id: 2,
            image: "/img/Rectangle58(2).png",
            title: "Renault Kangoo Z.E. Electric Van",
            subtitle: "Электрические фургоны для города",
            location: "Paris Auto France",
            price: "22500€",
            year: "2020",
            mileage: "45,000 км",
            details: ["Electric", "Auto", "Zero Emission"]
        },
        {
            id: 3,
            image: "/img/Rectangle58(3).png",
            title: "Peugeot Boxer 8000 Series",
            subtitle: "Грузовые автомобили для бизнеса",
            location: "Lyon Trucks France",
            price: "42500€",
            year: "2017",
            mileage: "150,000 км",
            details: ["Diesel", "Manual", "AC"]
        },
        {
            id: 4,
            image: "/img/Rectangle58(4).png",
            title: "Mercedes Sprinter 316 CDI",
            subtitle: "Грузопассажирские автомобили премиум",
            location: "Berlin Motors Germany",
            price: "38000€",
            year: "2018",
            mileage: "89,000 км",
            details: ["Diesel", "Auto", "Premium"]
        },
        {
            id: 5,
            image: "/img/Rectangle58(5).png",
            title: "Volkswagen Transporter T6.1",
            subtitle: "Универсальные грузовики",
            location: "Hamburg Vehicles Germany",
            price: "34500€",
            year: "2019",
            mileage: "120,000 км",
            details: ["Diesel", "Manual", "AC"]
        },
        {
            id: 6,
            image: "/img/Rectangle58(6).png",
            title: "Ford Transit Custom 350L",
            subtitle: "Коммерческие автомобили",
            location: "London Vans UK",
            price: "29800€",
            year: "2021",
            mileage: "35,000 км",
            details: ["Diesel", "Manual", "Leather"]
        },
        {
            id: 7,
            image: "/img/Rectangle58(1).png",
            title: "Fiat Ducato Maxi 180 MultiJet",
            subtitle: "Просторные грузовые фургоны",
            location: "Milan Auto Italy",
            price: "26500€",
            year: "2020",
            mileage: "60,000 км",
            details: ["Diesel", "Manual", "Spacious"]
        },
        {
            id: 8,
            image: "/img/Rectangle58(2).png",
            title: "Renault Trafic Passenger",
            subtitle: "Пассажирские перевозки",
            location: "Paris Transport France",
            price: "31000€",
            year: "2019",
            mileage: "95,000 км",
            details: ["Diesel", "Manual", "9 Seats"]
        },
        {
            id: 9,
            image: "/img/Rectangle58(3).png",
            title: "Peugeot Expert",
            subtitle: "Универсальный бизнес-фургон",
            location: "Marseille Motors France",
            price: "28900€",
            year: "2020",
            mileage: "70,000 км",
            details: ["Diesel", "Manual", "Business"]
        }
    ];
    

    function createFilterCard(cardData) {
        const card = document.createElement('div');
        card.className = 'filter-card';
        card.setAttribute('data-id', cardData.id);
        
        const detailsHtml = cardData.details.map(detail => 
            `<span class="detail-tag">${detail}</span>`
        ).join('');
        
        card.innerHTML = `
            <img src="${cardData.image}" alt="${cardData.title}">
            <div class="filter-card-content">
                <h3 class="filter-card-title">${cardData.title}</h3>
                <p class="filter-card-subtitle">${cardData.subtitle}</p>
                
                <div class="filter-card-info">
                    <div class="filter-card-year">
                    </div>
                    <div class="filter-card-mileage">
                        <span>${cardData.mileage}</span>
                    </div>
                </div>
                
                <div class="filter-card-details">
                    <div class="filter-card-location">
                        <img src="/img/carbon_location.svg" alt="location">
                        <span>${cardData.location}</span>
                    </div>
                    <div class="filter-card-price">${cardData.price}</div>
                </div>
            </div>
        `;
        
        
        card.addEventListener('click', function() {
            console.log('Карточка выбрана:', cardData.id);
            
        });
        
        return card;
    }
    

    function loadFilterCards() {
        if (!cardsGrid) return;
        
        cardsGrid.innerHTML = '';
        
        filterCardsData.forEach(cardData => {
            const card = createFilterCard(cardData);
            cardsGrid.appendChild(card);
        });
        
        
        if (resultsCount) {
            resultsCount.textContent = `(${filterCardsData.length} результатов)`;
        }
    }
    

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            
            switch(sortValue) {
                case 'price-low':
                    filterCardsData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    break;
                case 'price-high':
                    filterCardsData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                    break;
                case 'newest':
                    filterCardsData.sort((a, b) => b.year - a.year);
                    break;
                case 'mileage':
                    filterCardsData.sort((a, b) => parseFloat(a.mileage) - parseFloat(b.mileage));
                    break;
                default:
                    
                    filterCardsData.sort((a, b) => a.id - b.id);
            }
            
            loadFilterCards();
        });
    }
    
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active') || this.disabled) return;
            
            
            document.querySelectorAll('.page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
           
            if (!this.classList.contains('prev-btn') && !this.classList.contains('next-btn')) {
                this.classList.add('active');
            }
            
            console.log('Переход на страницу:', this.textContent);
          
        });
    });
   
    loadFilterCards();
    
    
    function initFilterPageLayout() {
        const filterContainer = document.querySelector('.filter-container');
        const mainContent = document.querySelector('.container > div:last-child');
        
        if (filterContainer && mainContent) {
            
            const wrapper = document.createElement('div');
            wrapper.className = 'filter-container-wrapper';
        
            const filterParent = filterContainer.parentElement;
            filterParent.insertBefore(wrapper, filterContainer);
            wrapper.appendChild(filterContainer);
      
            let cardsContainer = document.querySelector('.cards-container');
            if (!cardsContainer) {
                cardsContainer = document.createElement('div');
                cardsContainer.className = 'cards-container';
                cardsContainer.innerHTML = `
                    <h2 class="cards-title">Результаты поиска <span class="results-count">(${filterCardsData.length} результатов)</span></h2>
                    <div class="sort-container">
                        <select class="sort-select">
                            <option value="relevance">По релевантности</option>
                            <option value="price-low">Цена: по возрастанию</option>
                            <option value="price-high">Цена: по убыванию</option>
                            <option value="newest">Сначала новые</option>
                            <option value="mileage">Пробег: по возрастанию</option>
                        </select>
                    </div>
                    <div class="cards-grid"></div>
                    <div class="pagination">
                        <button class="page-btn prev-btn" disabled>← Назад</button>
                        <div class="page-numbers">
                            <button class="page-btn active">1</button>
                            <button class="page-btn">2</button>
                            <button class="page-btn">3</button>
                            <span class="page-dots">...</span>
                            <button class="page-btn">8</button>
                        </div>
                        <button class="page-btn next-btn">Вперед →</button>
                    </div>
                `;
            }
            
            wrapper.appendChild(cardsContainer);
            
            setTimeout(() => {
                loadFilterCards();
            }, 100);
        }
    }
    

    if (window.location.pathname.includes('index1.html') || document.querySelector('.filter-container')) {
        setTimeout(initFilterPageLayout, 100);
    }
});

document.addEventListener('DOMContentLoaded', function() {
   
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
       
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const showMoreBtn = document.querySelector('.show-more-btn');
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    const btnText = showMoreBtn.querySelector('.btn-text');
    
    let isExpanded = false;
    let visibleRows = 1; 
    
    showMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
         
            hiddenCards.forEach(cards => {
                cards.classList.add('show');
            });
          
            btnText.textContent = 'Скрыть';
            showMoreBtn.classList.add('expanded');
            
           
            setTimeout(() => {
                const lastCard = document.querySelector('.hidden-cards.show:last-child');
                if (lastCard) {
                    lastCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 300);
            
            isExpanded = true;
        } else {
            // Скрываем карточки
            hiddenCards.forEach(cards => {
                cards.classList.remove('show');
            });
            
            // Возвращаем текст кнопки
            btnText.textContent = 'Показать больше';
            showMoreBtn.classList.remove('expanded');
            
            // Прокрутка к кнопке
            showMoreBtn.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            isExpanded = false;
        }
    });
    
    // Кнопка "Применить фильтры"
    const applyBtn = document.querySelector('.filter-apply-btn');
    
    applyBtn.addEventListener('click', function() {
        // Собираем все выбранные фильтры
        const filters = {
            categories: [],
            countries: [],
            brands: [],
            condition: [],
            yearFrom: document.querySelector('input[placeholder="2010"]')?.value,
            yearTo: document.querySelector('input[placeholder="2024"]')?.value,
            mileageFrom: document.querySelector('input[placeholder="0"]')?.value,
            mileageTo: document.querySelector('input[placeholder="500000"]')?.value
        };
        
    
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const name = checkbox.getAttribute('name');
            const value = checkbox.value;
            
            if (name === 'category') filters.categories.push(value);
            if (name === 'country') filters.countries.push(value);
            if (name === 'brand') filters.brands.push(value);
            if (name === 'condition') filters.condition.push(value);
        });
        
        console.log('Применены фильтры:', filters);
        
    
        applyBtn.textContent = 'Применено!';
        applyBtn.style.background = '#007a4d';
        
        setTimeout(() => {
            applyBtn.textContent = 'Применить фильтры';
            applyBtn.style.background = '';
        }, 2000);
    });
    
  
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.closest('label');
            
            if (this.checked) {
                label.style.transform = 'translateX(5px)';
                setTimeout(() => {
                    label.style.transform = '';
                }, 200);
            }
        });
    });
});