import DOMPrinter from './DOMPrinter.js'
import objectManager from './singleJournalEntry.js'
import APIManager from './APIManager.js'

// DOMPrinter.printHomePage();

DOMPrinter.printDreamlandToTheDOM();
DOMPrinter.printJournalToTheDOM();

document.querySelector("#btn-container").addEventListener("click", () => {
    if (event.target.id.includes("home")) {
        DOMPrinter.printHomePage();
    } else if (event.target.id.includes("dream")) {
        DOMPrinter.printDreamlandToTheDOM();
        DOMPrinter.printJournalToTheDOM();
    }
})

//Keyup to set character limits on the Concepts Covered and Journal Entry portion of the form
document.querySelector("#output-container").addEventListener("keyup", () => {
    console.log(document.querySelector("#journalEntry").value.length)
    if (document.querySelector("#conceptsCovered").value.length >= 100) {
        alert("You have reached the character limit for this input")
    } else if (document.querySelector("#journalEntry").value.length >= 200) {
        alert("You have reached the character limit for this input")
    }
})



document.querySelector("#output-container").addEventListener("click", () => {

    //POSTS journal entry to journal.json if record button is clicked
    if (event.target.id.includes("record")) {
        // Creates a new journal entry based on the information in the form and posts it to journal.json then reprints the entries to the DOM
        const curseArray = ["fuck", "shit", "ass", "cocksucker", "damn"]
        const inputArray = document.querySelector("#journalEntry").value.split(" ")

        //Checks if any word in my inputArray matches any word in my curseArray and returns an alert, else it posts the entry and prints the journal to the DOM
        if (inputArray.some(word => curseArray.includes(word))) {
            alert("Oh that's crass.  I don't go for that kind of talk.")
        } else {
            APIManager.postJournalEntry(objectManager.createJournalObject())
        }
        //If the delete button is clicked the entry is deleted
    } else if (event.target.id.includes("delete-btn")) {

        // Grabs the ID number from the ID and stores it in IDToDelete
        const IDToDelete = event.target.id.split("-")[2]

        // Deletes the JSON object with the chosen ID then reprints the entries to the DOM
        APIManager.deleteJournalEntry(IDToDelete).then(DOMPrinter.printJournalToTheDOM)

        //If the edit button is clicked the form is injected into that journal entry with prepopulated information from the journal entry
    } else if (event.target.id.includes("edit-btn")) {
        const IDToEdit = event.target.id.split("-")[2]
        DOMPrinter.printEditForm(IDToEdit);

        //If the save button is clicked the entry in journal.json is updated with the new information
    } else if (event.target.id.includes("save-btn")) {
        APIManager.updateJournalEntry(objectManager.editJournalObject())
            .then(DOMPrinter.printJournalToTheDOM);
    } else if (event.target.id.includes("All")) {
        DOMPrinter.printJournalToTheDOM();
    } else if (["Jubilant", "Copacetic", "Flummoxed", "Drained"].some(r => r === event.target.value)) {
        //  Print the filtered results from the entries array in journal.json based on which mood is selected
        DOMPrinter.printFilteredJournalToTheDOM(event.target.id);
    }
})
