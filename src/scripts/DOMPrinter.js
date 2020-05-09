import APIManager from './APIManager.js'

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    call the method within DOMPrinter
    to get the data and display it.
*/


//Puts the entry into HTML tags
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

//Prints the journal entries to the DOM
const printJournalToTheDOM = () => {

    //inputs empty string to the DOM to clear the contents before printing
    document.querySelector(".entry-log").innerHTML = "";

    // Gets the journal entries from journal.json, formats each entry with HTML tags and prints them to the DOM 
    APIManager.getJournalEntries()
        .then(entries => {
            entries.forEach(entry => {
                document.querySelector(".entry-log").innerHTML += formatJournalEntry(entry);
            })
        })
}


export default printJournalToTheDOM

