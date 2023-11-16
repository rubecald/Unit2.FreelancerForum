/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const name = ["alice", "bob", "charlie"]
const occupations = ["programmer", "writer", "teacher"]

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
]

// references
const average = document.getElementById("average")
const tableBody = document.querySelector("#table-body")

// render initial data (dr slice and dr pressure)
render();

function render() {
  const newRows = freelancers.map(freelancer => {
    const newRow = document.createElement("tr")
    
    const name = document.createElement("td")
    name.innerText = freelancer.name

    const occupation = document.createElement("td")
occupation.innerText = freelancer.occupation

    const price = document.createElement("td")
price.innerText = `$${freelancer.price}`


    newRow.append(name, occupation, price)
    return newRow
  })
  // adds all new rows to original td
  tableBody.replaceChildren(...newRows)
}

function addRandomFreeLancer() {


  render();
}