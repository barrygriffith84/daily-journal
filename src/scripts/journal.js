const journalEntry = {
    Date: "4/17/2020",
    concept: "Daily Journal",
    entry: "Great time listening to Tommy",
    mood: "Jubilant"
}

const journalArray = []

journalArray.push(journalEntry)

document.querySelector("#record-btn").addEventListener("click", function () {

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
    journalArray.push(inputObject)
    renderJournalEntries(journalArray)
    
})






const makeJournalEntryComponent = (journalEntry) => {
    // create your own HTML structure for a journal entry
    return `
        <section class="single-entry">
            <br>
            <h3>${journalEntry.concept}</h3>
            <p>${journalEntry.entry}</p>
            <h4>${journalEntry.mood}</h4>
        </section
    `
}

const renderJournalEntries = (array) => {
    for (singleEntry of array) {
        document.querySelector(".entry-log").innerHTML += makeJournalEntryComponent(singleEntry)
    }
}




console.log(journalArray)
