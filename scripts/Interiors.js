import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an Interior Fabric</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.fabric}</option>`
    }

    html += "</select>"
    
    return html
}


// export const Technologies = () => {
//     let html = "<h2>Technologies</h2>"

//     html += '<select id="tech">'
//     html += '<option value="0">Select a technology package</option>'

//     for (const tech of technologies) {
//         html += `<option value="${tech.id}">${tech.package}</option>`
//     }

//     html += "</select>"
//     return html
//  } 