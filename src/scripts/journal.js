import DOMPrinter from './DOMPrinter.js'
import objectManager from './singleJournalEntry.js'
import APIManager from './APIManager.js'

DOMPrinter.printHomePage();

DOMPrinter.printDreamlandToTheDOM();
//Prints the entries to the DOM
DOMPrinter.printJournalToTheDOM();

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
    
    //Checks if any word in my inputArray matches any word in my curseArray and returns an alert, else it posts the entry and prints the journal to the DOM
    if (inputArray.some(word => curseArray.includes(word))) {
        alert("Oh that's crass.  I don't go for that kind of talk.")
    } else{
    APIManager.postJournalEntry(objectManager.createJournalObject())
    .then(() => {
        DOMPrinter.printJournalToTheDOM()})
    }  
})


//Listens for the delete button and deletes the journal entry from journal.json when clicked.
document.querySelector("#entry-log").addEventListener("click", () => {
    
    // If a delete button on a journal entry is clicked
    if (event.target.id.includes("delete-btn")) {
        
        // Grabs the ID number from the ID and stores it in IDToDelete
        const IDToDelete = event.target.id.split("-")[2]
        
        // Deletes the JSON object with the chosen ID then reprints the entries to the DOM
        APIManager.deleteJournalEntry(IDToDelete).then(DOMPrinter.printJournalToTheDOM)     
    
    } else if (event.target.id.includes("edit-btn")) {
        const IDToEdit = event.target.id.split("-")[2]
        DOMPrinter.printEditForm(IDToEdit);
    } else if (event.target.id.includes("save-btn")) {
        console.log("save-btn clicked");
        APIManager.updateJournalEntry(objectManager.editJournalObject())
        .then(DOMPrinter.printJournalToTheDOM);
    }
})



document.querySelector("#radio-form").addEventListener("click", () => {
    if (event.target.id === "All") {
        // Print the entire entries array in journal.json to the DOM
        DOMPrinter.printJournalToTheDOM();
    } else {
        //  Print the filtered results from the entries array in journal.json based on which mood is selected
        DOMPrinter.printFilteredJournalToTheDOM(event.target.id);
    }
})