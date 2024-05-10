"use client";

import { useState } from 'react';
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  // Add state for shipping location and phone number
  const [shippingLocation, setShippingLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Add separate state for each error message
  const [shippingLocationError, setShippingLocationError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleCheckout = async () => {
    try {
      if (!user) {
        // Server-side redirect to sign-in page
        window.location.href = "/sign-in";
      } else {
        // Reset error messages
        setShippingLocationError('');
        setPhoneNumberError('');

        let hasError = false;

        if (!shippingLocation) {
          // If shipping location is not provided, set error message
          setShippingLocationError('Shipping location is required.');
          hasError = true;
        }

        if (!phoneNumber) {
          // If phone number is not provided, set error message
          setPhoneNumberError('Phone number is required.');
          hasError = true;
        }

        if (hasError) {
          return;
        }

        const cartItems = cart.cartItems.map((cartItem) => {
          const item = cartItem.item;
          return {
            productName: item.title,
            productUrl: item.media[0], // Assuming the first image URL is the product
            quantity: cartItem.quantity,
            totalPrice: cartItem.quantity * item.price,
          };
        });

        const orderDetails = {
          cartItems,
          customer, // Assuming you still want to include customer details
        };

        const encodedOrderDetails = encodeURIComponent(JSON.stringify(orderDetails));

        const whatsappURL = `https://wa.me/${254748236146}?text=New order! Please review the details below:%0A%0A${cartItems.map(
          (item) => `* ${item.productName} - ${item.productUrl} (Qty: ${item.quantity}, Total: Ksh.${item.totalPrice})`
        ).join("%0A")}%0A%0AShipping Location: ${shippingLocation}%0APhone Number: ${phoneNumber}`;

        window.location.href = whatsappURL;
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>
        <hr className="my-6" />
        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between" key={cartItem.item._id}>
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">Ksh. {cartItem.item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>
                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Total Amount</span>
          <span>Ksh. {totalRounded}</span>
        </div>
        <div>
          <label className="flex justify-between text-body-semibold mt-3 mb-3">Shipping Location:</label>
          <input 
            type="text" 
            value={shippingLocation} 
            onChange={(e) => setShippingLocation(e.target.value)} 
            className="w-full text-gray-400 h-12 text-body-semibold px-3 py-2 border border-gray-300 rounded-md"
          />
          {shippingLocationError && <p style={{ color: 'red' }}>{shippingLocationError}</p>}
        </div>
        <div>
          <label className="flex justify-between text-body-semibold mt-3 mb-3">Phone Number:</label>
          <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className="w-full text-gray-400 h-12 text-body-semibold px-3 py-2 border border-gray-300 rounded-md"
          />
          {phoneNumberError && <p style={{ color: 'red' }}>{phoneNumberError}</p>}
        </div>
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          Pay on Delivery
        </button>
      </div>
    </div>
  );
};

export default Cart;