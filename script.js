const home = document.getElementById('home')
const products = document.getElementById('products')
const homePage = document.getElementById('home-page')
const productsPage = document.getElementById('products-page')


const loadPage = (page) => {
    if (page == 'displayHomePage') {
        productsPage.classList.add('hidden')
        homePage.classList.remove('hidden')
        home.classList.add('active')
        products.classList.remove('active')
    }
    else {
        homePage.classList.add('hidden')
        productsPage.classList.remove('hidden')
        products.classList.add('active')
        home.classList.remove('active')
    }
}

const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            displayProducts(data.slice(1, 4), 'trending-container')
            displayProducts(data, 'products-container')
        })
}

loadProducts()

const card = (product) => {
    const newProduct = document.createElement('div')
    newProduct.innerHTML = `
            <div class="card bg-base-100 border border-gray-300">
                    <figure class="bg-gray-200 flex justify-center items-center h-[16rem] py-2">
                        <img src=${product.image} class="h-full" />
                    </figure>
                    <div class="p-3">
                        <div class="flex items-center justify-between font-semibold text-lg">
                            <div class="rounded-2xl w-40 flex items-center justify-center bg-[#d4dcf6]">
                                <p class="text-blue-700">${product.category}</p>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <span class="text-gray-600">${product.rating.rate} <span>(${product.rating.count})</span></span>
                            </div>
                        </div>
                        <h1 class="text-lg font-semibold line-clamp-1 mt-4">${product.title}</h1>
                        <p class="text-xl font-bold mt-2 mb-8">$${product.price}</p>
                        <div class="flex items-center justify-between">
                            <button class="btn w-[48%] text-lg">
                                <i class="fa-regular fa-eye"></i>
                                <span>Details</span>
                            </button>
                            <button class="btn w-[48%] bg-blue-600 text-lg text-white hover:bg-blue-800">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                </div>
        
        `

    return newProduct
}

const displayProducts = (products, containerId) => {
    const container = document.getElementById(containerId)
    container.innerHTML = ''

    for (const product of products) {

        container.appendChild(card(product))

    }
}


const loadCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displayCategories(data))
}

loadCategories()

const displayCategories = (categories) => {
    console.log(categories)
    const categoriesContainer = document.getElementById('categories-container')
    categoriesContainer.innerHTML = ''

    const allCategorieBtn = document.createElement('div')
    allCategorieBtn.innerHTML = `
    <div class="active-cat categorie-btn border border-gray-400 px-3.5 py-1 rounded-2xl font-medium text-gray-600 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out">All</div>
    
    `
    categoriesContainer.appendChild(allCategorieBtn)

    allCategorieBtn.addEventListener('click', e => {
        removeActiveCat()
        e.target.classList.add('active-cat')
    })

    for (const categorie of categories) {
        const newdiv = document.createElement('div')
        newdiv.innerHTML = `
        <div class="categorie-btn border border-gray-400 px-3.5 py-1 rounded-2xl font-medium text-gray-600 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out">${categorie}</div>

        `

        categoriesContainer.appendChild(newdiv)

        newdiv.addEventListener('click', e => {
            removeActiveCat()
            e.target.classList.add('active-cat')
        })
    }
}

const removeActiveCat = () => {
    const allBtn = document.getElementById('categories-container').querySelectorAll('.categorie-btn')
    for (btn of allBtn) {
        btn.classList.remove('active-cat')
    }
}