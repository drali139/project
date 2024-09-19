import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private cartItems = new BehaviorSubject<any[]>([]);
  private cartItemCount = new BehaviorSubject(0);
  private checkoutItems = new BehaviorSubject<any[]>([]);
  private shippingAddress = new BehaviorSubject<string>('');
  private debitCardData = new BehaviorSubject<any>(null);
  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const items = JSON.parse(storedItems);
      this.cartItems.next(items);
      this.updateCartItemCount();
    }

    const storedCheckoutItems = localStorage.getItem('checkoutItems');
    if (storedCheckoutItems) {
      const items = JSON.parse(storedCheckoutItems);
      this.checkoutItems.next(items);
    }

    const storedAddress = localStorage.getItem('shippingAddress');
    if (storedAddress) {
      this.shippingAddress.next(storedAddress);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems.value));
    localStorage.setItem('checkoutItems', JSON.stringify(this.checkoutItems.value));
    localStorage.setItem('shippingAddress', this.shippingAddress.value);
  }

  addToCart(newItem: any) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(item => 
      item.img1 === newItem.img1 && 
      item.text6 === newItem.text6
    );
    
    if (existingItemIndex > -1) {
      currentItems[existingItemIndex].quantity = 
        Number(currentItems[existingItemIndex].quantity) + 1;
      currentItems[existingItemIndex].subtotal = 
        Number(currentItems[existingItemIndex].subtotal) + Number(newItem.price);
    } else {
      currentItems.push(newItem);
    }
  
    this.cartItems.next(currentItems);
    this.updateCartItemCount();
    this.saveToLocalStorage();
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  updateCartItemCount() {
    this.cartItemCount.next(this.cartItems.value.length);
  }

  clearCart() {
    this.cartItems.next([]);
    this.cartItemCount.next(0);
    // sessionStorage.removeItem('cartItems');
    this.saveToLocalStorage();
  }

  updateItemQuantity(index: number, newQuantity: number) {
    const currentItems = this.cartItems.value;
    if (index >= 0 && index < currentItems.length) {
      const oldQuantity = Number(currentItems[index].quantity);
      currentItems[index].quantity = Number(newQuantity);
      currentItems[index].subtotal = currentItems[index].price * currentItems[index].quantity;
      this.cartItems.next(currentItems);
      this.updateCartItemCount();
      this.saveToLocalStorage();
    }
  }

  removeItem(index: number) {
    const currentItems = this.cartItems.value;
    if (index >= 0 && index < currentItems.length) {
      currentItems.splice(index, 1);
      this.cartItems.next(currentItems);
      this.updateCartItemCount();
      this.saveToLocalStorage();
    }
  }

  setCheckoutItems(items: any[]) {
    const checkoutItems = items.map(item => ({
      ...item,
      text11: item.text5,
      subtotal: Number(item.subtotal)
    }));
    this.checkoutItems.next(checkoutItems);
    this.checkoutItems.next(items);
    this.saveToLocalStorage();
  }

  getCheckoutItems() {
    return this.checkoutItems.asObservable();
  }
  setShippingAddress(address: string) {
    this.shippingAddress.next(address);
    // sessionStorage.setItem('shippingAddress', address);
    this.saveToLocalStorage();
  }

  getShippingAddress() {
    return this.shippingAddress.asObservable();
  }

  loadShippingAddressFromSession() {
    const storedAddress = sessionStorage.getItem('shippingAddress');
    if (storedAddress) {
      this.shippingAddress.next(storedAddress);
    }
  }
  setDebitCardData(data: any) {
    this.debitCardData.next(data);
  }

  getDebitCardData() {
    return this.debitCardData.asObservable();
  }
  // local storage 
    // Add methods to handle shipped and delivered items
    setShippedItems(items: any[]) {
      const itemsToSave = items.map(item => ({
        ...item,
        text11: item.text11 || item.text5 // Ensure text11 is set
      }));
      localStorage.setItem('shippedItems', JSON.stringify(items));
    }
  
    setDeliveredItems(items: any[]) {
      const itemsToSave = items.map(item => ({
        ...item,
        text11: item.text11 || item.text5 // Ensure text11 is set
      }));
      localStorage.setItem('deliveredItems', JSON.stringify(items));
    }
  
    getShippedItems(): any[] {
      return JSON.parse(localStorage.getItem('shippedItems') || '[]');
    }
  
    getDeliveredItems(): any[] {
      return JSON.parse(localStorage.getItem('deliveredItems') || '[]');
    }
  
}
