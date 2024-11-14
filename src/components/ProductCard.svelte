<script>
    import { addToCart } from '../stores/cartStore';
    // @ts-ignore
    export let product;

    function handleAddToCart() {
        // @ts-ignore
        addToCart(product);
    }
</script>

<div class="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button on:click={handleAddToCart}>Add to Cart</button>
    <button>Trade</button>
</div>

<style>
    .product-card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 15px;
      text-align: left;
      transition: transform 150ms ease-in-out;
    }

    .product-card:hover{
      transform: scale(1.01);
      cursor: pointer;
    }
  
    img {
      width: 100%;
      height: max-content;
      border-radius: 4px;
    }
  
    h3 {
      margin-top: 10px;
      font-size: 18px;
      color: #333;
    }
  
    p {
      font-size: 16px;
      color: #777;
    }
  
    button {
      margin-top: 10px;
      padding: 8px 12px;
      border: none;
      background-color: #333;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: transform 150ms ease-in-out;
    }

    button:hover{
      transform: scale(1.04);
    }
  
    button + button {
      margin-left: 8px;
      background-color: #555;
    }
  </style>
  
