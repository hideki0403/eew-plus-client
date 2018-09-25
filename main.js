const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const ipc = electron.ipcMain
const Menu = electron.Menu
const Tray = electron.Tray
const clipboard = electron.clipboard
const Notification = electron.Notification

const http = require('http')
const fs = require('fs')
require('date-utils')

var mainWindow = null

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 800, height: 600, show: false})
    mainWindow.loadURL('file://' + __dirname + '/lib/html/index.html')
    /*
    tray = new Tray()
    const contextMenu = Menu.buildFromTemplate([
        { label: 'EEW Plus', click: function () { mainWindow.show() } },
        { label: '再起動', click: function () { app.relaunch(); app.quit() } },
        { label: '終了', click: function () { app.quit() } }
    ])
    tray.setToolTip('EEWP Ver.' + appVersion.version)
    tray.setContextMenu(contextMenu)
    */

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    setInterval(function() {
        var dt = new Date()
        var now = new Date()
        dt.setSeconds(now.getSeconds() - 1)
        var timedata = dt.toFormat("YYYYMMDDHH24MISS")

        var getURL = 'http://www.kmoni.bosai.go.jp/new/webservice/hypo/eew/' + timedata + '.json'
        http.get(getURL, (res) => {
            var body = ''
            res.setEncoding('utf8')

            res.on('data', (chunk) => {
                body += chunk
            })

            res.on('end', (res) => {
                var res = JSON.parse(body)
                
                if(res.result.message === '') {
                    
                }
            })
        })
    }, 1000)
})
