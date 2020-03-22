if (navigator.clipboard) {
    //console.log("Support du presse papier")
    document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
        const $button = document.createElement('button');
        $button.className = "fa fa-clipboard";
        $clipboardEl.parentNode.append($button);
        $button.addEventListener(
            'click',
            copyToClipboard.bind(this, $clipboardEl, $button)
        );
    });
} else {
    console.warn("No clipboard support")
}

function copyToClipboard($clipboardEl, $button) {
    //console.log('Click !');
    navigator.clipboard
        .writeText($clipboardEl.getAttribute('data-clipboard'))
        .then(() => {
            $button.className = "fa fa-clipboard";
            setTimeout(() => ($button.className = "fa fa-clipboard"), 2000);
        })
        .catch((err) => console.warn(err));
}
