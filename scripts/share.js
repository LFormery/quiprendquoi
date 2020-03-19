if (navigator["share"]){
    console.log("Support de partage")
    document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'Partager';
        $shareEl.parentNode.append($button);
        navigator
            ["share"]({
            title: $shareEl.getAttribute('data-share-title'),
            text: $shareEl.getAttribute('data-share-text'),
            url: $shareEl.getAttribute('data-share-url'),
        })
            .then(() => console.log('Partage réussi'))
            .catch((error) => console.warn('Erreur de partage à cause de', error));
    });
} else {
    console.warn("Pas de support de partage")
}
