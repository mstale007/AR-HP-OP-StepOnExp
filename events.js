//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            var markerId = marker.id;
            console.log('Marker Found: ', markerId);
        });

        marker.addEventListener("markerLost",() =>{
            var markerId = marker.id;
            console.log('Marker Lost: ', markerId);
        });
    },
});