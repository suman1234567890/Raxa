Ext.define('RaxaEmr.Pharmacy.view.Viewport', {
    extend: 'Ext.container.Viewport',
    autoScroll: true,
    width: 960,
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initialize: function (args) {
        var topBar = Ext.create('Topbar.view.TopToolbar', {
            docked: 'top'
        });
        this.add(topBar);

    },
    items:[{
        xtype: 'pharmacytopbar',
    },{
        autoScroll: true,
        layout: 'auto',
        width:960,
        items:[{
            layout: 'card',
            id: 'mainarea',
            activeItem: 0,
            items:[{
                xtype: 'prescription'
            },{
                xtype: 'goodsdetails'
            },{
                xtype: 'reports'
            },{
                xtype: 'drugGroups'
            },{
                xtype: 'allStock'
            }]
        }]
    }]
})