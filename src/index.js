let argumentID = 2;
let argumentCount = 1
let id;
let arguments = [];
let thesis;

function addArgument() {
    id = argumentID.toString();
    $("#arguments").append(`
        <div class="columns" id=${argumentID}>
            <div class="column has-text-centered is-three-quarters">
                <textarea class="textarea argument" placeholder="e.g. Hello world"></textarea>
            </div>
            <div class="column">
                <input class="button is-danger is-light" value="remove this argument" id="removeArgument" onclick="removeArgument(${id})"/>
                </div>
            </div>
    `)
    argumentID++; argumentCount++;
    console.log("add argument" + argumentCount);
}

function removeArgument(argument) {
    document.getElementById(argument.toString()).remove();
    argumentCount--;
    console.log("remove argument")
}

// save functions save user's state when they navigate off a page

function saveThesis() {
    localStorage.setItem('thesis', document.getElementById("thesisTextarea").value)
    console.log(thesis)
}

function saveLayout() {

}

function saveArguments() {
    arguments = $('textarea').map(function() {
        return $.trim(this.value);
   }).get();
   localStorage.setItem('arguments', arguments)
}

function saveEvidence() {
    evidence = $('textarea').map(function() {
        return $.trim(this.value);
   }).get();
   localStorage.setItem('evidence', evidence)
}

// load functions load user's data when they return to a page

function loadThesis() {
    console.log(thesis)
    if (thesis != null) {
        document.getElementById("thesisTextarea").value=localStorage.getItem('thesis')
    }
    console.log(thesis)
}

function loadLayout() {

}

function loadArgument() {
    console.log(localStorage.getItem('thesis'))
    console.log("loadArgument")
}

function loadEvidence() {
    console.log("load evidence")
}

function updateTextInput(val) {
    if (val==19) {val=val+"+"}
    document.getElementById('lengthSlider').value=val+" pages"; 
}