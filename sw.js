if (navigator.serviceWorker) {
    console.log('All good');
    navigator.serviceWorker.register("/sw.js")
        .then(() => console.log('Service worker is registered'))
        .catch(err => console.warn(err));
} else {
    console.log('Nothing to see here...');
}

