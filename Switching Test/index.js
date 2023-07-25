const products = [
    {
        name: 'Product 1',
        price: '23.43',
    },
    {
        name: 'Product 2',
        price: '87.76',
    },
    {
        name: 'Product 4',
        price: '87.98',
    },
    {
        name: 'Product 3',
        price: '56.25',
    },
    {
        name: 'Product 5',
        price: '25.25',
    },
]

function generateProductList(product) {
    let product_group = document.querySelector('.product-list');

    const li = document.createElement('li');
    li.classList.add('product-item');

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("align-container");

    const innerFDiv = document.createElement('div');

    const productTitle = document.createElement('h2');
    const name = document.createTextNode(product.name)

    productTitle.appendChild(name)
    innerFDiv.appendChild(productTitle)
    innerDiv.appendChild(innerFDiv);

    const productPrice = document.createElement('p');
    const price = document.createTextNode("Price: " + product.price);

    productPrice.appendChild(price);
    innerFDiv.appendChild(productPrice);

    const checkBox = document.createElement("input");
    checkBox.classList.add('checkbox')
    checkBox.setAttribute('type', 'checkbox');

    const innerSDiv = document.createElement('div');
    innerSDiv.appendChild(checkBox)

    innerDiv.appendChild(innerSDiv);

    li.appendChild(innerDiv)
    product_group.appendChild(li);
}

products.map((product)=>{
    generateProductList(product);
})


