document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const skinName = urlParams.get('skin') || 'kuromy888'; // Default skin
    const height = urlParams.get('height') || 400; // Default canvas
    const width = urlParams.get('width') || 400; // Default canvas
    const cape = urlParams.get('cape'); 

    const skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("simpleCanvas"),
        width: `${width}`,
        height:`${height}`,
        skin: `https://minotar.net/skin/${skinName}`,
        cape: `/src/capes/${cape}` 
    });

    skinViewer.fov = 70;
    skinViewer.zoom = 0.90;
    skinViewer.globalLight.intensity = 3;
    skinViewer.cameraLight.intensity = 0.60;
    skinViewer.autoRotate = false;
    skinViewer.autoRotateSpeed = 0.5;

    skinViewer.animation = new skinview3d.WalkingAnimation();
    skinViewer.animation.speed = 0.5;

    skinViewer.controls.enableRotate = true;
    skinViewer.controls.enableZoom = false;
    skinViewer.controls.enablePan = true;

    skinViewer.loadCape(urlParams.get('cape'));
});