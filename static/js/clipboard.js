let url = document.location.href

function sharePage() {
    navigator.clipboard.writeText(url).then(function () {
        console.log('Copied page URL');
        document.getElementById("copyText").innerText = "Copied";
        ui("#toast", 1500);

    }, function () {
        document.getElementById("copyText").innerText = "Copy error :("
        console.log('Could not copy page url')
    });
}