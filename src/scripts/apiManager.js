const APIManager = {
    getJournalEntries () {
        return fetch("http://localhost:8088/journal")
            .then(response => response.json())
    }
}

export default APIManager