import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const wheels = getWheels()
    const technologies = getTechnologies()
    const interiors = getInteriors()
    const paints = getPaints()
    
    const chosenPaint = paints.find(paint => {
        return paint.id === order.paintId
    })
    const chosenInterior = interiors.find(interior => {
        return interior.id === order.interiorId
    })
    const chosenTechnology = technologies.find(technology => {
        return technology.id === order.techId
    })
    const chosenWheels = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })

    chosenPaint.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    chosenInterior.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    chosenTechnology.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    chosenWheels.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const total = chosenWheels.price + chosenInterior.price + chosenTechnology.price +chosenPaint.price
    
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs $${total}
    </li>`
}

export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}












/*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */