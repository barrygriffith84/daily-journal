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
        <section class="single-entry" id="single-entry-${journalEntry.id}">
            <br>
            <h3>${journalEntry.concept}</h3>
            <p>${journalEntry.Date}</p>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.mood}</p>
            <button class="delete-btn" id="delete-btn-${journalEntry.id}">Delete</button>
            <button id="edit-btn-${journalEntry.id}">Edit</button>
        </section>
    `
}

const createEditForm = (JSONEntry) => {

    return `
    <form action="">
      <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="editJournalDate" value="${JSONEntry.Date}">
      </fieldset>

      <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="editConceptsCovered" maxlength="100" value="${JSONEntry.concept}">
      </fieldset>

      <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="editJournalEntry" maxlength="200" >${JSONEntry.entry}</textarea>
      </fieldset>

      <fieldset>
        <label for="mood">Mood</label>
        <select name="mood" id="editMood" value="${JSONEntry.mood}">
          <option value="Jubilant">Jubilant</option>
          <option value="Copacetic">Copacetic</option>
          <option value="Flummoxed">Flummoxed</option>
          <option value="Drained">Drained</option>
        </select>
      </fieldset>
    </form>
    <button class="save-btn" id="save-btn-${JSONEntry.id}">Save</button>
    `
}

const DOMPrinter = {
//Prints the journal entries to the DOM
printJournalToTheDOM() {

    //inputs empty string to the DOM to clear the contents before printing
    document.querySelector(".entry-log").innerHTML = "";

    // Gets the journal entries from journal.json, formats each entry with HTML tags using the formatJounralEntry function and prints them to the DOM 
    APIManager.getJournalEntries()
        .then(entries => {
            entries.forEach(entry => {
                document.querySelector(".entry-log").innerHTML += formatJournalEntry(entry);
            })
        })
},

printFilteredJournalToTheDOM(moodInput) {

    document.querySelector(".entry-log").innerHTML = "";
      
    APIManager.getJournalEntries()
    .then(entries => entries.filter(entry => entry.mood === moodInput))
    .then(filteredEntries => {
        filteredEntries.forEach(entry => {
            document.querySelector(".entry-log").innerHTML += formatJournalEntry(entry);
        })
    })
},

printEditForm(id) {
const entryCard = document.querySelector(`#single-entry-${id}`)
// console.log(entryCard)

APIManager.getOneEntry(id)
.then(journalObject => {
    entryCard.innerHTML = createEditForm(journalObject)
})

// entryCard.innerHTML = createEditForm(journalObject)
}
}

export default DOMPrinter

