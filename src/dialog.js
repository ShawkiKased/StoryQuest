<>
<dialog id="mainDialog">
    <form method="dialog">
    <p>Welcome to StoryQuest!</p>
    <menu>
        <button id="confirmBtn" value="default">Continue</button>
    </menu>
    </form>
</dialog>

<menu>
    <button id="start">Start</button>
</menu>
</>

let startButton = document.getElementById('start');
let mainDialog = document.getElementById('mainDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let continueBtn = document.getElementById('continueBtn');

startButton.addEventListener('click', function onOpen() {
    if (typeof mainDialog.showModal === "function") {
        mainDialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});









{/* <>
<dialog id="favDialog">
    <form method="dialog">
        <p>
        <label>Favorite animal:
            <select>
                <option></option>
                <option>Brine Shrimp</option>
                <option>Red Panda</option>
                <option>Spider monkey</option>
            </select>
        </label></p>
        <menu>
            <button value="cancel">Cancel</button>
            <button id="confirmBtn" value="default">Confirm</button>
        </menu>
    </form>
</dialog>

<menu>
    <button id="updateDetails">Update details</button>
</menu>
<output aria-live="polite"></output>
</>

let updateButton = document.getElementById('updateDetails');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let confirmBtn = document.getElementById('confirmBtn');

updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

selectEl.addEventListener('change', function onSelect(e) {
    confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', function onClose() {
    outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
}); */}