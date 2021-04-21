let argumentID = 2;
let argumentCount = 1
let id;
let pageLength;
let style;
let arguments = [];
let evidence = [];
let associations = [];
let thesis;
let evidenceID = 2;
let evidenceCount = 1;
let eaID = 2;
let eaCount = 1;

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

function addEvidence() {
    id = evidenceID.toString();
    $("#evidence").append(`
        <br>
        <div class="columns" id=${evidenceID}>
            <div class="column has-text-centered is-three-quarters">
                <textarea class="textarea evidence" placeholder="e.g. Hello world"></textarea>
            </div>
            <div class="select">
                <select id='topic'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
            </div></div>
            <div>
                <input class="button is-danger is-light" value="remove this evidence" id="removeEvidence" onclick="removeEvidence(${id})"/>
                </div>
            </div>
    `)
    evidenceID++; evidenceCount++;
    console.log("add argument" + argumentCount);
}

function removeEvidence(evidence) {
    document.getElementById(evidence.toString()).remove();
    evidenceCount--;
    console.log("remove evidence")
}

// function addEvidenceArgument() {
//     id = eaID.toString();
//     $("#ea").append(`
//         <div class="columns" id=${eaID}>
//             <div class="column has-text-centered is-three-quarters">
//                 <textarea class="textarea evidence" placeholder="e.g. Hello world"></textarea>
//             </div>
//             <div class="column">
//                 <input class="button is-danger is-light" value="remove this argument" id="removeEa" onclick="removeEvidenceArgument(${id})"/>
//                 </div>
//             </div>
//     `)
//     eaID++; eaCount++;
//     console.log("add ea" + eaCount);
// }

// function removeEvidenceArgument(ea) {
//     document.getElementById(ea.toString()).remove();
//     eaCount--;
//     console.log("remove ea")
// }

// save functions save user's state when they navigate off a page

function saveThesis() {
    localStorage.setItem('thesis', document.getElementById("thesisTextarea").value)
    console.log(thesis)
}

function saveLayout() {
    localStorage.setItem('length', document.getElementById("pageLength").value)
    localStorage.setItem('topic', document.getElementById('topic').value)
}

function saveArguments() {
    args = $('textarea').map(function() {
        return $.trim(this.value);
   }).get();
   localStorage.setItem('arguments', args)
}

function saveEvidence() {
    evidence = $('textarea').map(function() {
        return $.trim(this.value);
   }).get();
   localStorage.setItem('evidence', evidence)
}

function saveDesk() {

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

function loadDesk() {
    console.log(localStorage.getItem("arguments"))
    for (let i=0; i<localStorage.getItem("arguments").length; i++) {
        $('#desk').append(`
        <p>argument</p>
        `)
    };
}

function loadOutline() {
    $("#outline").append(`
    <p>${localStorage.getItem('thesis')}</p>
    <p>${localStorage.getItem('arguments')}</p>
    <p>${localStorage.getItem('evidence')}</p>
    <p>${localStorage.getItem('length')}</p>
    <p>${localStorage.getItem('topic')}</p>
    `
    )
    console.log('loading outline')
}

function updateTextInput(val) {
    if (val==19) {val=val+"+"}
    document.getElementById('lengthSlider').value=val+" pages"; 
}