//Grabs the information inside of the form and places it inside of an object
const objectManager = {
    createJournalObject: () => {
        return {
            Date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#conceptsCovered").value,
            entry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#mood").value,
            userId: sessionStorage.userId
        }
    },

    //Grabs the information inside of the form and places it inside of an object the can be PUT in the JSON file
    editJournalObject: () => {
        return {
            Date: document.querySelector("#editJournalDate").value,
            concept: document.querySelector("#editConceptsCovered").value,
            entry: document.querySelector("#editJournalEntry").value,
            mood: document.querySelector("#editMood").value,
            id: event.target.id.split("-")[2]
        }
    }


}

export default objectManager

