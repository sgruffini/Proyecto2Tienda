const products = [
  {
    id: 1,
    name: 'Air Max 1',
    category: 'Nike Original',
    price: 120,
    image: 'assets/Shoes1.png'
  },
  {
    id: 2,
    name: 'NB 9060',
    category: 'New Balance',
    price: 80,
    image: 'assets/Shoes2.png'
  },
  {
    id: 3,
    name: 'Nike Revolution',
    category: 'Nike Original',
    price: 90,
    image: 'assets/Shoes3.png'
  },
  {
    id: 4,
    name: 'Forum Buckle',
    category: 'Adidas Original',
    price: 100,
    image: 'assets/Shoes4.png'
  },
  {
    id: 5,
    name: 'Campus',
    category: 'Adidas Original',
    price: 120,
    image: 'assets/Shoes5.png'
  },
  {
    id: 6,
    name: 'NB 327',
    category: 'New Balance',
    price: 120,
    image: 'assets/Shoes6.png'
  },
  {
    id: 7,
    name: 'Dunk Low',
    category: 'Nike Original',
    price: 100,
    image: 'assets/Shoes7.png'
  },
  {
    id: 8,
    name: 'Gazelle',
    category: 'Adidas Original',
    price: 90,
    image: 'assets/Shoes8.png'
  },
  {
    id: 9,
    name: 'Air Max SC',
    category: 'Nike Original',
    price: 150,
    image: 'assets/Shoes9.png'
  },
  {
    id: 10,
    name: 'Handball Spezial',
    category: 'Adidas Original',
    price: 120,
    image: 'assets/Shoes10.png'
  },
  {
    id: 11,
    name: 'Air Force',
    category: 'Nike Original',
    price: 130,
    image: 'assets/Shoes11.png'
  },
  {
    id: 12,
    name: 'NB 9060',
    category: 'New Balance',
    price: 100,
    image: 'assets/Shoes12.png'
  },
  {
    id: 13,
    name: 'NB 480',
    category: 'New Balance',
    price: 150,
    image: 'assets/Shoes13.png'
  },
  {
    id: 14,
    name: 'Full Force Low',
    category: 'Nike Original',
    price: 110,
    image: 'assets/Shoes14.png'
  },
  {
    id: 15,
    name: 'Air Max SC',
    category: 'Nike Original',
    price: 160,
    image: 'assets/Shoes15.png'
  },
  {
    id: 16,
    name: 'Handball Spezial',
    category: 'Adidas',
    price: 140,
    image: 'assets/Shoes16.png'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list')
  const categoryFilter = document.getElementById('category')
  const priceFilter = document.getElementById('price')
  const clearFiltersButton = document.getElementById('clear-filters')

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category))
  ]
  uniqueCategories.forEach((category) => {
    const option = document.createElement('option')
    option.value = category
    option.textContent = category
    categoryFilter.appendChild(option)
  })

  const renderProducts = (filteredProducts) => {
    productList.innerHTML = ''
    if (filteredProducts.length === 0) {
      showSuggestedProducts()
    } else {
      filteredProducts.forEach((product) => {
        const productElement = document.createElement('div')
        productElement.className = 'product'
        productElement.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h2>${product.name}</h2>
                  <p>Marca: ${product.category}</p>
                  <p>Precio: $${product.price}</p>
              `
        productList.appendChild(productElement)
      })
    }
  }

  const applyFilters = () => {
    const category = categoryFilter.value
    const maxPrice = priceFilter.value
    const filteredProducts = products.filter((product) => {
      return (
        (category === '' || product.category === category) &&
        (maxPrice === '' || product.price <= maxPrice)
      )
    })
    renderProducts(filteredProducts)
  }

  const showSuggestedProducts = () => {
    const suggestedProducts = products
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    productList.innerHTML =
      '<p>No se encontraron productos. Productos sugeridos:</p>'
    suggestedProducts.forEach((product) => {
      const productElement = document.createElement('div')
      productElement.className = 'product'
      productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>Marca: ${product.category}</p>
              <p>Precio: $${product.price}</p>
          `
      productList.appendChild(productElement)
    })
  }

  categoryFilter.addEventListener('change', applyFilters)
  priceFilter.addEventListener('input', applyFilters)
  clearFiltersButton.addEventListener('click', () => {
    categoryFilter.value = ''
    priceFilter.value = ''
    renderProducts(products)
  })

  renderProducts(products)
})
