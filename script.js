let clickHandler = () => {
    text = document.getElementById('text-combination').value;
    range = document.getElementById('range').value;
    if (text != '') {
        newPass = random(text, range)
        document.getElementById('password-result').innerHTML = newPass
    }
}

function copyPass() {
    copyText = document.getElementById('password-result').innerHTML;

    navigator.clipboard.writeText(copyText);

    alert("Copied the password : " + copyText);
}

let random = (mergeData, range) => {

    let text = ''

    for (let i = 0; i <= range; i++) {
        text += mergeData.charAt(Math.floor(Math.random() * mergeData.length))
    }

    return text;
}