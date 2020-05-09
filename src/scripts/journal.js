// const journalEntry = {
//     Date: "4/17/2020",
//     concept: "Daily Journal",
//     entry: "Great time listening to Tommy",
//     mood: "Jubilant"
// }

// const journalArray = []

// journalArray.push(journalEntry)

// renderJournalEntries(journalArray)

// document.querySelector("#record-btn").addEventListener("click", function () {
   
//     journalArray.push(inputObject)
//     document.querySelector(".entry-log").innerHTML = "";
//     renderJournalEntries(journalArray)
// })

const createJournalEntry = () => {
    const dateValue = document.querySelector("#journalDate").value
    const conceptsValue = document.querySelector("#conceptsCovered").value
    const entryValue = document.querySelector("#journalEntry").value
    const moodValue = document.querySelector("#mood").value
    const inputObject = {
        Date: `${dateValue}`,
        concept: `${conceptsValue}`,
        entry: `${entryValue}`,
        mood: `${moodValue}`
    }
    return inputObject;
}

const formatJournalEntry = (journalEntry) => {
    // create your own HTML structure for a journal entry
    return `
        <section class="single-entry">
            <br>
            <h3>${journalEntry.concept}</h3>
            <p>${journalEntry.Date}</p>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.mood}</p>
        </section
    `
}


fetch("http://localhost:8088/entries")
.then(response => response.json())
.then(entries => {
    entries.forEach(entry => {
        console.log(entry)
        document.querySelector(".entry-log").innerHTML += formatJournalEntry(entry)
    });
})

// console.log(journalArray)
