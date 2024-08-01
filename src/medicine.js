const medicines = {
    "paracetamol": {
      "description": "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature.",
      "usage": "Take one tablet every 4-6 hours as needed. Do not exceed 4 grams per day.",
      "price": "₹29.57",
      "mrp": "₹33.60",
      "discount": "12% OFF",
      "manufacturer": "MICRO LABS",
      "quantity": "15 Tablet(s) in Strip"
    },
    "ibuprofen": {
      "description": "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that is used to reduce fever and treat pain or inflammation.",
      "usage": "Take one tablet every 4-6 hours as needed. Do not exceed 800 mg per dose or 3200 mg per day.",
      "price": "₹19.50",
      "mrp": "₹22.50",
      "discount": "13% OFF",
      "manufacturer": "ABC PHARMA",
      "quantity": "10 Tablet(s) in Strip"
    },
    "amoxicillin": {
      "description": "Amoxicillin is an antibiotic used to treat a number of bacterial infections. It is used to treat infections such as pneumonia, bronchitis, and infections of the ear, nose, throat, skin, and urinary tract.",
      "usage": "Take one tablet every 8 hours or as prescribed by your doctor.",
      "price": "₹45.00",
      "mrp": "₹50.00",
      "discount": "10% OFF",
      "manufacturer": "XYZ PHARMA",
      "quantity": "10 Tablet(s) in Strip"
    }
  };
  
  function searchMedicine(query) {
    const resultContainer = document.getElementById('searchResults');
    resultContainer.innerHTML = ''; 
  
    const lowerCaseQuery = query.toLowerCase();
  
    if (medicines[lowerCaseQuery]) {
      const medicine = medicines[lowerCaseQuery];
      const resultCard = document.createElement('div');
      resultCard.className = 'result-item';
  
      resultCard.innerHTML = `
        <div class="result-info">
          <div class="result-details">
            <strong>${lowerCaseQuery.charAt(0).toUpperCase() + lowerCaseQuery.slice(1)}</strong><br>
            By ${medicine.manufacturer}<br>
            ${medicine.quantity}
          </div>
        </div>
        <div class="result-price">
          <div class="mrp">${medicine.mrp}</div>
          <div class="price">${medicine.price} <span style="color: #d9534f;">${medicine.discount}</span></div>
          <a href="#" class="add-to-cart">Add To Cart</a>
        </div>
      `;
  
      resultContainer.appendChild(resultCard);
  
      // Scroll to the search results
      resultContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
      resultContainer.innerHTML = '<p>No results found.</p>';
    }
  }
  
