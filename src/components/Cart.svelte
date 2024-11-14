<script>
  import { createEventDispatcher } from 'svelte';
  import { cartItems, removeFromCart, updateQuantity, clearCart } from '../stores/cartStore';
  
  const dispatch = createEventDispatcher();
  let isClosing = false;

  function closeCart() {
    isClosing = true;
    setTimeout(() => {
      dispatch('close');
      isClosing = false;
    }, 300);
  }

  $: totalPrice = $cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
</script>

<div
  class="cart-overlay {isClosing ? 'slide-out' : 'slide-in'}">
  <button class="close-btn" on:click={closeCart}>X</button>
  <hr />

  {#if $cartItems.length > 0}
    {#each $cartItems as item (item.id)}
      <div class="cart-item">
        <img src={item.image || 'https://via.placeholder.com/50'} alt={item.name} class="cart-item-image" />
        
        <div class="cart-item-details">
          <h4>{item.name}</h4>
          <p>{item.price * item.quantity}$</p>
        </div>
        
        <div class="cart-item-controls">
          <button on:click={() => updateQuantity(item.id, item.quantity - 1)} class="quantity-btn decrement">-</button>
          <span class="quantity-display">{item.quantity}</span>
          <button on:click={() => updateQuantity(item.id, item.quantity + 1)} class="quantity-btn increment">+</button>
        </div>
        
        <button on:click={() => removeFromCart(item.id)} class="remove-btn">X</button>
      </div>
    {/each}
    
    <div class="cart-summary">
      <p>Total Price: {totalPrice}$</p>
      <button on:click={clearCart} class="clear-cart-btn">Clear Cart</button>
      <button on:click={() => alert("Proceeding to checkout")} class="finalize-btn">Finalize Purchase</button>
    </div>
  {:else}
    <p>No products in the cart</p>
  {/if}
</div>
  
<style>
  .cart-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 10;
    overflow-y: auto;
  }

  .slide-in {
    animation: slideIn 0.3s forwards;
  }

  .slide-out {
    animation: slideOut 0.3s forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  .close-btn {
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #888;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  .cart-item-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .cart-item-details {
    flex-grow: 1;
    font-size: 14px;
  }

  .cart-item-details h4 {
    margin: 0;
    font-weight: bold;
  }

  .cart-item-details p {
    margin: 0;
    color: #555;
  }

  .cart-item-controls {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .quantity-btn {
    width: 30px;
    height: 30px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  .decrement {
    background-color: red;
  }

  .increment {
    background-color: green;
  }

  .quantity-display {
    width: 30px;
    text-align: center;
    font-size: 16px;
    margin: 0 5px;
  }

  .remove-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #888;
  }

  .cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
  }

  .clear-cart-btn,
  .finalize-btn {
    padding: 8px 12px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .finalize-btn {
    background-color: #007bff;
  }
</style>
