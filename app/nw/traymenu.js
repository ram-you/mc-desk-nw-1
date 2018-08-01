// Create a tray icon
var tray = new nw.Tray({ title: 'Tray'  });

// Give it a menu
var menu = new nw.Menu();
menu.append(new nw.MenuItem({ type: 'checkbox', label: 'box1' }));
tray.menu = menu;