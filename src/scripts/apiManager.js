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
        return fetch(`http://localhost:8088/entries/${id}`).then(response => response.json())
    },

    updateJournalEntry(entry){
        //Take the information inside of the form
        return fetch(`http://localhost:8088/entries/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        
        //Put it in the correct JSON entry
    }
}

export default APIManager