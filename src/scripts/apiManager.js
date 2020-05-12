const APIManager = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    postJournalEntry(journalEntry) {
        fetch(" http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
    },

    deleteJournalEntry(idToDelete) {
        fetch(` http://localhost:8088/entries/${idToDelete}`, {
            method: "DELETE"
        })
    }
}




export default APIManager