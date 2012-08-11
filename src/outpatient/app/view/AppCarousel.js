Ext.define('RaxaEmr.view.AppCarousel', {
    extend: 'Ext.Carousel',
    xtype: 'smartDash',
    initialize: function (args) {
        var topBar = Ext.create('Topbar.view.TopToolbar', {
        
            docked: 'top'
        });
        this.add(topBar);

    },
    
});
