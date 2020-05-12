import printJournalToTheDOM from './DOMPrinter.js'
import createJournalEntry from './singleJournalEntry.js'
import APIManager from './APIManager.js'

//Prints the entries to the DOM
printJournalToTheDOM()


document.querySelector("#conceptsCovered").addEventListener("keyup", () => {
    if (document.querySelector("#conceptsCovered").value.length >= 100) {
        alert("You have reached the character limit for this input")
    }
})

document.querySelector("#journalEntry").addEventListener("keyup", () => {
    if (document.querySelector("#journalEntry").value.length >= 200) {
        alert("You have reached the character limit for this input")
    }
})


//  Listens for the record button, creates a new journal entry, and prints the journal to the DOM
document.querySelector("#record-btn").addEventListener("click", function () {
    // Creates a new journal entry based on the information in the form and posts it to journal.json then reprints the entries to the DOM
    const curseArray = ["fuck", "shit", "ass", "cocksucker", "damn"]
    const inputArray = document.querySelector("#journalEntry").value.split(" ")
    if (inputArray.some(word => curseArray)) {
        alert("Oh that's crass.  I don't go for that kind of talk.")
    } else{
    APIManager.postJournalEntry(createJournalEntry()).then(() => {
        console.log("after the post")
        printJournalToTheDOM()})
    }  
})


//Listens for the delete button and deletes the journal entry from journal.json when clicked.
document.querySelector("#entry-log").addEventListener("click", () => {
    
    // If a delete button on a journal entry is clicked
    if (event.target.id.includes("delete-btn")) {
        
        console.log("Inside the if statement")
        // Grabs the ID number from the ID and stores it in IDToDelete
        const IDToDelete = event.target.id.split("-")[2]
        
        // Deletes the JSON object with the chosen ID then reprints the entries to the DOM
        APIManager.deleteJournalEntry(IDToDelete).then(printJournalToTheDOM)     
    }
})