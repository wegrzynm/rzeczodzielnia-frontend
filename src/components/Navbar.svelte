<script>
    import { onMount } from 'svelte';
    import Cart from './Cart.svelte';
    import LoginForm from './LoginForm.svelte';
    import RegisterForm from './RegisterForm.svelte';

    let showCart = false;
    let showLogin = false;
    let showRegister = false;

    function toggleCart() {
        showCart = !showCart;
    }

    function openLoginForm() {
        showLogin = true;
    }

    function closeLoginForm() {
        showLogin = false;
    }

    function openRegisterForm() {
        showRegister = true;
    }

    function closeRegisterForm() {
        showRegister = false;
    }

    let showCategories = false;
  
    const categories = [
      { name: "Electronics", image: "https://via.placeholder.com/50" },
      { name: "Fashion", image: "https://via.placeholder.com/50" },
      { name: "Home Decor", image: "https://via.placeholder.com/50" },
      { name: "Books", image: "https://via.placeholder.com/50" },
      { name: "Toys", image: "https://via.placeholder.com/50" },
      { name: "Beauty", image: "https://via.placeholder.com/50" },
      { name: "Sports", image: "https://via.placeholder.com/50" },
      { name: "Groceries", image: "https://via.placeholder.com/50" },
      { name: "Garden", image: "https://via.placeholder.com/50" },
      { name: "Automotive", image: "https://via.placeholder.com/50" },
    ];
  
    function toggleCategories() {
      showCategories = !showCategories;
    }
  </script>
  <div class="navbar-container">
    <nav>
      <div class="nav-left">
        <button on:click={toggleCategories}>Categories</button>
      </div>

    <div class="nav-right">
        <button on:click={toggleCart}>🛒 Cart</button>
        <button on:click={openLoginForm}>Login</button>
    </div>

    {#if showCart}
        <Cart on:close={toggleCart} />
    {/if}

    {#if showLogin}
        <LoginForm on:close={closeLoginForm} on:register={openRegisterForm} />
    {/if}

    {#if showRegister}
        <RegisterForm on:close={closeRegisterForm} />
    {/if}
    </nav>
  
    {#if showCategories}
      <div class="categories-grid">
        {#each categories as category}
          <div class="category-card">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <style>
    .navbar-container {
      position: relative;
    }
  
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 10px 20px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
      z-index: 10;
    }

    .nav-left button {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      color: #333;
      transition: transform 150ms ease;
    }  

    .nav-left button:hover {
      transform: translateY(-1px);
    }

    .nav-right button {
      background: none;
      padding: 5px 10px;
      border: none;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 20px;
      transition: background-color 220ms ease-in-out;
      transition: color 220ms ease-in-out;
    }

    .nav-right button:hover {
      background: none;
      padding: 5px 10px;
      border: none;
      background-color: #333;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 20px;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      padding: 20px;
      background-color: #f9f9f9;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 9;
    }
  
    .category-card {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .category-card span {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
  
    .category-card:hover {
      transform: translateY(-2px);
    }
  
    .category-card img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 5px;
    }
  
    .category-card span {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
  </style>
  