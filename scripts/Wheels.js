import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

// create a function to create HTML to later be exported to Cars-R-Us
export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a Wheel Package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.package}</option>`
    }

    html += "</select>"
    return html
 } 