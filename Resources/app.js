var drime = drime || {};

drime.init = function(){
	setTimeout(drime.splashHide, 3000);
};

drime.splashHide = function(){
    var current_window = Ti.UI.getCurrentWindow();
    current_window.hide();
};

drime.openMain = function(){
    Ti.UI.createWindow({
        id: 'drimeapp',
        url: 'app://drime.html',
        title: i18n.t('app.title'),
        height: 560,
        width: 300,
        x:0,
        y:0,
        closeable: true,
        rezisable: true,
        minimizable: true,
        maximizable: true,
        transparentBackground: false,
        visible: true
    }).open();
};

drime.setTray = function(){
	drime.tray = Ti.UI.addTray('app://imgs/tray.png', function() {
            drime.openMain();
        }),
    menu = Ti.UI.createMenu(),
    //Add some menu items
    menuItems = [
        Ti.UI.createMenuItem(i18n.t('menu.new_task'), function(e) {
            alert('Meow Meow');
        }),
        Ti.UI.createSeparatorMenuItem(),

        Ti.UI.createMenuItem(i18n.t('menu.open'), function(e) {
            drime.openMain();
        }),
        Ti.UI.createMenuItem(i18n.t('menu.todo'), function(e) {
            alert('Meow Meow');
        }),
        Ti.UI.createMenuItem(i18n.t('menu.settings'), function(e) {
            alert('Meow Meow');
        }),

        Ti.UI.createSeparatorMenuItem(),
        
        Ti.UI.createMenuItem(i18n.t('menu.exit'), function(e) {
            Ti.App.exit();
        })

    ];

	menuItems.forEach(function(item) {
		menu.appendItem(item);
	});

	drime.tray.setMenu(menu);
};

$.i18n.init({
    //lng: 'en',
    fallbackLng: 'en',
    ns: { namespaces: ['ns.common'], defaultNs: 'ns.common'},
    getAsync: false,
    useLocalStorage: false
});

$(document).ready(function(){
	drime.init();
    drime.setTray();
});