<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    async function closeLoginForm() {
        try {
          const response = await fetch(`http://localhost:5000/`); // NIE WIEM JAK DAC TU ENDPOINT
        const data = await response.json();
        console.log(data);
        }catch (e) {
          console.log(e)
        }
        dispatch('close');
    }

    function openRegisterForm() {
        dispatch('register');
    }
</script>

<div class="overlay">
    <div class="login-form">
        <button class="close-btn" on:click={closeLoginForm}>X</button>
        <h2>Login</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>LOGIN</button>
        <p><a href="#">Forgot Password?</a></p>
        <p><a on:click={openRegisterForm}>Register</a></p>
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
  
    .login-form {
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
  
    p a {
      color: #333;
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
    }
  </style>
  
