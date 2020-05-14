const APIManager = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    postJournalEntry(journalEntry) {
        return fetch(" http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
    },

    deleteJournalEntry(idToDelete) {
       return fetch(`http://localhost:8088/entries/${idToDelete}`, {
            method: "DELETE"
        })
    },

    getOneEntry(id) {
        console.log("ID inside of getOneEntry: ", id)
        return fetch(`http://localhost:8088/entries/${id}`).then(response => response.json())
    },

    saveEditToJSON(){
        //Take the information inside of the form

        
        //Put it in the correct JSON entry
    }
}



export default APIManager