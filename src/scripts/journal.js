import printJournalToTheDOM from './DOMPrinter.js'
import createJournalEntry from './singleJournalEntry.js'
import APIManager from './APIManager.js'

//Prints the entries to the DOM
printJournalToTheDOM()


//Listens for the record button, creates a new journal entry, and prints the journal to the DOM
document.querySelector("#record-btn").addEventListener("click", function(){   
    
    // Creates a new journal entry based on the information in the form and posts it to journal.json
    APIManager.postJournalEntry(createJournalEntry());

    // Prints the journal to the DOM
    printJournalToTheDOM();
})


