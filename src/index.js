var argumentID = 2;
var argumentCount = 1
var id;
var arguments = [];

function addArgument() {
    id = argumentID.toString();
    $("#arguments").append(`
        <div class="columns" id=${argumentID}>
            <div class="column has-text-centered is-three-quarters">
                <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
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

function saveArguments() {
    console.log("saved arguments")
}