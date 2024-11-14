<script>
  import Navbar from './components/Navbar.svelte';
  import ProductCard from './components/ProductCard.svelte';

  const apiUrl = import.meta.env.VITE_API_URL;

  async function fetchData() {
    try {
      const response = await fetch(`${apiUrl}/endpoint`); // NIE WIEM ZA CHOLERE JAK DAC TU ENDPOINT
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Błąd w komunikacji z API:', error);
    }
  }

  fetchData();

  let products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Product 11', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Product 12', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Product 13', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Product 14', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Product 15', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Product 16', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Product 17', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Product 18', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Product 19', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Product 20', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 21, name: 'Product 21', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 22, name: 'Product 22', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Product 23', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Product 24', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 25, name: 'Product 25', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 26, name: 'Product 26', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Product 27', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 28, name: 'Product 28', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Product 29', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Product 30', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 31, name: 'Product 31', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 32, name: 'Product 32', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 33, name: 'Product 33', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 34, name: 'Product 34', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 35, name: 'Product 35', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 36, name: 'Product 36', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 37, name: 'Product 37', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 38, name: 'Product 38', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 39, name: 'Product 39', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 40, name: 'Product 40', price: 10, image: 'https://via.placeholder.com/150' }
      
  ];
  let searchTerm = '';
  const itemsPerPage = 30;
  let currentPage = 1;

  $: filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  $: totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  $: paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function prevPage() {
    if (currentPage > 1) currentPage--;
  }

  function nextPage() {
    if (currentPage < totalPages) currentPage++;
  }
</script>

<Navbar />

<div class="search-bar">
  <input
    type="text"
    placeholder="Search for products..."
    bind:value={searchTerm}
    on:input={() => currentPage = 1} />
</div>

<main>
  <div class="product-grid">
    {#each paginatedProducts as product}
      <ProductCard {product} />
    {/each}
  </div>

  <div class="pagination-controls">
    <a href="#"><button on:click={prevPage} disabled={currentPage === 1}>Previous</button></a>
    <span>Page {currentPage} of {totalPages}</span>
    <a href="#"><button on:click={nextPage} disabled={currentPage === totalPages}>Next</button></a>
  </div>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f4f4f9;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  .search-bar input {
    padding: 10px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1600px;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .pagination-controls button {
    padding: 10px 15px;
    margin: 0 10px;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .pagination-controls button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  .pagination-controls span {
    font-size: 16px;
    color: #333;
  }
</style>