//Grabs the information inside of the form and places it inside of an object
const createJournalEntry = () => {
    const dateValue = document.querySelector("#journalDate").value
    const conceptsValue = document.querySelector("#conceptsCovered").value
    const entryValue = document.querySelector("#journalEntry").value
    const moodValue = document.querySelector("#mood").value
    const inputObject = {
        Date: `${dateValue}`,
        concept: `${conceptsValue}`,
        entry: `${entryValue}`,
        mood: `${moodValue}`
    }
    return inputObject;
}

export default createJournalEntry

