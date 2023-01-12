import React from 'react'
import { f1 } from "../assets"

const Carts = () => (
  <section id="cart" className="bg-[#E5D1B8]">
    <table width="100%" className="border-[#482614]">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={f1} alt=""/></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" className="border border-[#482614] bg-[#E5D1B8]"/></td>
          <td>$118.19</td>
        </tr>

        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={f1} alt=""/></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" className="border border-[#482614] bg-[#E5D1B8]"/></td>
          <td>$118.19</td>
        </tr>

        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={f1} alt=""/></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" className="border border-[#482614] bg-[#E5D1B8]"/></td>
          <td>$118.19</td>
        </tr>
        
      </tbody>
    </table>
  </section>
)

export default Carts