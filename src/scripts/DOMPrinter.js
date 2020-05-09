//Prints the journal array to the DOM
const renderJournalEntries = (array) => {
    for (singleEntry of array) {
        document.querySelector(".entry-log").innerHTML += makeJournalEntryComponent(singleEntry)
    }
}

