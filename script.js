function contactAlert() {
    const confirmRedirect = confirm("Ingin membuka lokasi di Google Maps?");
    if (confirmRedirect) {
        window.open("https://maps.app.goo.gl/EVTgEVUQmBF3Stxq7", "_blank");
    }
}
