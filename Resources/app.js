var drime = drime || {};

drime.init = function(){
	var current_window = Ti.UI.getCurrentWindow();
        Ti.UI.getCurrentWindow().addEventListener(Ti.MINIMIZED, function(event) {
        current_window.hide();
    });
};

drime.setTray = function(){
	var tray = Ti.UI.addTray('app://tray.png'),
    menu = Ti.UI.createMenu(),

    //Add some menu items
    menuItems = [
        Ti.UI.createMenuItem('Change Icon', function(e) {
            //Something's going on... let's change the icon.
            tray.setIcon('app://tray-active.png');
            setTimeout(function() {
                tray.setIcon('app://tray.png');
            }, 3000);
        }),
        
        Ti.UI.createMenuItem('Cat', function(e) {
            alert('Meow Meow');
        }),
        
        Ti.UI.createMenuItem('Quit', function(e) {
            Ti.App.exit();
        })

    ];

	menuItems.forEach(function(item) {
		menu.appendItem(item);
	});

	tray.setMenu(menu);
};

$(document).ready(function(){
	drime.init();
    drime.setTray();
});