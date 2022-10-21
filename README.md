# Foundation for create Chrome extension
Just clone and use ;o)

## Chrome storages
There are three classes representing Chrome storages.
 1. `ChromeLocalStorage`
    Stores data only on the local device. They are not available on any other device.
 2. `ChromeSyncStorage`
    Data are syncs across user devices.
 3. `ChromeInMemoryStorage`
   Stores data in memory where it is available only while the application is running.


## Fields

### Popup
For direct interaction with the user.
Field `action` in `manifest.json`.

### Background worker
Worker running in the background and monitoring web processes.
Field `background` in `manifest.json`.

### Content script
Script manipulating the DOM of a web site.
Field `content_scripts` in `manifest.json`.

### Options
Customise the behavior of an extension by providing an options page.
Field `options_page` in `manifest.json`.


## Build on
 - [Vite](https://vitejs.dev/)
 - [Svelte](https://svelte.dev/)
 - [Tailwind](https://tailwindcss.com/)

## Roadmap
    ✓ Base skeleton
    ✓ Chrome storages
    ✓ Popup
    ✗ Tailwind
    ✗ Base UI components
    ✗ Background worker
    ✗ WebSocket monitoring
    ✗ Content script
    ✗ Options
