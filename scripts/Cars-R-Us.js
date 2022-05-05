
import { Wheels } from "./Wheels.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${Interiors()}
            </section>
            <section class="choices__sizes options">
                ${Paints()}
            </section>
            <section class="choices__styles options">
                ${Technologies()}
            </section>
            <section class="choices__styles options">
                ${Wheels()}
        </section>
        </article>

        <article class="button">
            <button id="orderButton">Place Order</button>
        </article>

        <article class="customOrders">
            <h2>Car Accessory Orders</h2>
            ${Orders()}
        </article>
    `
}