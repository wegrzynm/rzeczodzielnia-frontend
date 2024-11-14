// @ts-nocheck
// src/stores/cartStore.js
import { writable } from 'svelte/store';

export const cartItems = writable([]);

export function addToCart(product) {
  cartItems.update(items => {
    const existingItem = items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      return [...items];
    } else {
      return [...items, { ...product, quantity: 1 }];
    }
  });
}

export function removeFromCart(id) {
  cartItems.update(items => items.filter(item => item.id !== id));
}

export function updateQuantity(id, quantity) {
  cartItems.update(items => 
    items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  );
}

export function clearCart() {
  cartItems.set([]);
}
