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
                <textarea class="textarea argument" placeholder="Your argument"></textarea>
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
                <textarea class="textarea evidence" placeholder="Your evidence"></textarea>
            </div>
            <div class="select">
                <select id='ev'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
            </div>
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
    console.log(localStorage.getItem('arguments')[0])
    localStorage.setItem('evidence', evidence)
    links = $('select').map(function() {
    return $.trim(this.value);
    }).get();
    localStorage.setItem('link', links)
}

// load functions load user's data when they return to a page

function loadThesis() {
    console.log(thesis)
    if (thesis != null) {
        document.getElementById("thesisTextarea").value=localStorage.getItem('thesis')
    }
    console.log(thesis)
}

// function loadDesk() {
//     console.log(localStorage.getItem("arguments"))
//     for (let i=0; i<localStorage.getItem("arguments").length; i++) {
//         $('#desk').append(`
//         <p>argument</p>
//         `)
//     };
// }

function loadOutline() {
    length = localStorage.getItem('length')
    let citationStyle
    console.log(localStorage.getItem('topic'))
    if (localStorage.getItem('topic') == 'Natural and Social Sciences') {
        citationStyle="APA"
    } else if (localStorage.getItem('topic') == 'History and Fine Arts') {
        citationStyle="Chicago"
    } else if (localStorage.getItem('topic') == 'Language, Literature, and Cultural Studies') {
        citationStyle="MLA"   
    }
    $("#outline").append(`
    <p>Thesis statement: ${localStorage.getItem('thesis')}</p>
    <p>Arguments: ${localStorage.getItem('arguments')}</p>
    <p>Evidence: ${localStorage.getItem('evidence')}</p>
    <p>At ${length} pages, your essay will be about ${length*250} -- ${length*300} words long</p>
    <p>As your essay is about ${localStorage.getItem('topic')}, you should use the ${citationStyle} citation format.</p>
    `
    )
    console.log('loading outline')
}

function updateTextInput(val) {
    if (val==19) {val=val+"+"}
    document.getElementById('lengthSlider').value=val+" pages"; 
}

function fillSidebar() {
    $('#sidebar').append('<p>Your thesis<p>')
    console.log(localStorage.getItem('thesis'))
    if (localStorage.getItem('thesis')!==undefined) {
        $('#sidebar').append(localStorage.getItem('thesis'))
    }
    $('#sidebar').append('<br><br>')
    $('#sidebar').append('<p>Your arguments<p>')
    if (localStorage.getItem('arguments')!==undefined) {
         $('#sidebar').append(localStorage.getItem('arguments'))
    }
    $('#sidebar').append('<br><br>')
    $('#sidebar').append('<p>Your evidence<p>')
    if (localStorage.getItem('evidence')!==undefined) {
        $('#sidebar').append(localStorage.getItem('evidence'))
    }
}