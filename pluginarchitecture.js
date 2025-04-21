const plugin = {
    init: function() {
        console.log('Plugin initialized');
    },
    destroy: function() {
        console.log('Plugin destroyed');
    }
}
const analytics = Object.create(plugin);
analytics.track = function(eventName) {
    console.log(`Tracking event: ${eventName}`);
};
analytics.init();
analytics.track('Added to cart');
analytics.destroy();



