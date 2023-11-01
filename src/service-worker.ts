export function register(publicUrl: string) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${publicUrl}service-worker.js`; // Removed extra slashes

      if (isLocalhost(window.location.hostname)) {
        checkValidServiceWorker(swUrl);
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function isLocalhost(hostname: string) {
  return (
    hostname === 'localhost' ||
    hostname === '[::1]' ||
    hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
}

function registerValidSW(swUrl: string) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated content is available.
                // You may notify the user or refresh the UI.
                console.log('New content is available; please refresh.');
              }
            }
          };
        }
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl: string) {
  fetch(swUrl)
    .then((response) => {
      if (
        response.status === 404 ||
        response.headers.get('content-type')?.indexOf('javascript') === -1
      ) {
       
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error('Error during service worker unregistration:', error);
      });
  }
}
