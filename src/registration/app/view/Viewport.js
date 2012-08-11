Ext.define('RaxaEmr.Registration.view.Viewport', {
    extend: 'Ext.TabPanel',
    initialize: function (args) {
        var topBar = Ext.create('Topbar.view.TopToolbar', {
            docked: 'top'
        });
        this.add(topBar);

    },
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'registerpage' // view/Register.js
        }, {
            xtype: 'searchpage' // view/Search.js
        }, {
            xtype: 'bmipage' // view/Bmi.js
        }]
    }
});