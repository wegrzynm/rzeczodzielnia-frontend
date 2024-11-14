<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closeRegisterForm() {
        dispatch('close');
    }
</script>

<div class="overlay">
    <div class="register-form">
        <button class="close-btn" on:click={closeRegisterForm}>X</button>
        <h2>Register</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Repeat Password">
        <button>REGISTER</button>
    </div>
</div>

<style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .register-form {
      background-color: #fff;
      padding: 20px;
      width: 300px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      position: relative;
      text-align: center;
    }
  
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
  
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      color: #333;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      width: 100%;
      padding: 8px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
  
