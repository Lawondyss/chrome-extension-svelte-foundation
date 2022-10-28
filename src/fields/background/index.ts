chrome.runtime.onInstalled.addListener(() => {
    console.log('👋 Hello from service worker');

    chrome.runtime.onMessage.addListener(message => {
        const data = JSON.parse(message)
        console.log('Message data', data);
    })

    // sets the site to open after uninstalling a extension
    chrome.runtime.setUninstallURL('https://example.com')

    // sets a notifications listener
    chrome.notifications.onClicked.addListener((notificationId: string) => {
        // opens a new window
        const createData = {
            url: `https://example.com/${notificationId}`,
            type: 'popup',
            width: 600,
            height: 800,
            top: 0,
            left: 1412 - 600,
        }
        chrome.windows.create(createData, (window?: Window) => {
            console.log(window);
        })
    })

    // sends a notification after 3 seconds
    setTimeout(() => {
        const options: chrome.notifications.NotificationOptions<true> = {
            title: 'Example of notification',
            message: 'When clicked, a new popup window opens with the defined page.\nThe notification itself disappears after 10 seconds.',
            iconUrl: chrome.runtime.getURL('assets/icons/icon-48.png'),
            type: 'basic',
        }
        chrome.notifications.create(options, (notificationId: string) => {
            console.log('ID of notification:', notificationId)
            setTimeout(() => chrome.notifications.clear(notificationId), 10000)
        })
    }, 3000)
})
