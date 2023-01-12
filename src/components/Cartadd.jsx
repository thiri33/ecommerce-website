import React from 'react'

const Cartadd = () => (
  <section className={`flex flex-wrap justify-between py-[40px] px-[80px] bg-[#E5D1B8]`}>
    <div className={`w-[50%] mb-[30px]`}>
      <h3 className={`pb-[15px] font-bold`}>Apply Coupon</h3>
      <div>
        <input type="text" placeholder="Enter Your Coupon" className={`py-[10px] px-[20px] w-[60%] mr-10 border-[1px_solid_#e2e9e1]`} />
        <button className={`text-[14px] font-semibold bg-[#c54809] text-[#fff] py-[12px] px-[20px] rounded-[4px] cursor-pointer border-none outline-none transition-[0.2s]`}>Apply</button>
      </div>
    </div>
    <div id="subtotal" className="border-[#482614]">
      <h3 className={`pb-[15px] font-bold`}>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>$ 335</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>$ 335</strong></td>
        </tr>
      </table>

      <button className={`text-[14px] font-semibold bg-[#c54809] text-[#fff] py-[12px] px-[20px] rounded-[4px] cursor-pointer border-none outline-none transition-[0.2s]`}>Proceed to checkout</button>
    </div>
  </section>
)

export default Cartadd