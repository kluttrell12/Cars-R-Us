const database = {
    orderBuilder: {
       
    },
    paints: [
        {id: 1, color: "Silver", price: 40},
        {id: 2, color: "Midnight Blue", price: 38}, 
        {id: 3, color: "Firebrick Red", price: 42},
        {id: 4, color: "Spring Green", price: 42}
    ],
    interiors: [
        {id: 1, fabric: "Beige Fabric", price: 43},
        {id: 2, fabric: "Charcoal Fabric", price: 41},
        {id: 3, fabric: "White Leather", price: 45},
        {id: 4, fabric: "Black Leather", price: 49}
    ],

    technologies: [
        {id: 1, package: "Basic Package", price: 32},
        {id: 2, package: "Navigation Package", price: 35},
        {id: 3, package: "Visibility Package", price: 40},
        {id: 4, package: "Ultra Package", price: 50}
    ],

    wheels: [
        {id: 1, package: "17-inch Pair Radial", price: 35},
        {id: 2, package: "17-inch Pair Radial Black", price: 38},
        {id: 3, package: "18-inch Pair Spoke Silver", price: 42},
        {id: 4, package: "18-inch Pair Spoke Black", price: 51}
    ],
    customOrders: [
        {
        id: 1,
        paintId: 3,
        interiorId: 2,
        wheelId: 1,
        techId: 1,
        timestamp: 1614659931693
        }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}