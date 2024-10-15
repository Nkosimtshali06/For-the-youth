// Service Worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'));
}

// Delay PWA prompt for 20 seconds
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('PWA install prompt saved');

    // Show the prompt after a delay of 20 seconds
    setTimeout(() => {
        showInstallPrompt();
    }, 10000); // 20 seconds
});

// Function to show the install prompt
function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the PWA prompt');
            } else {
                console.log('User dismissed the PWA prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Full-screen ad behavior
function closeFullScreenAd() {
    document.getElementById('fullScreenAd').style.display = 'none';
}

// Redirect to another page (replace 'your-url' with the actual URL)
function goToPage() {
    window.location.href = 'https://www.lnksforyou.com/link/42662';
}
function showFullscreenAd() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://vdbaa.com/pup.php?section=General&pt=2&pub=719287&ga=g";
    document.body.appendChild(script);
}
