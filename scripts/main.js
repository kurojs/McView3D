document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const skinName = urlParams.get('skin') || 'kuromy888'; // Default skin
    const height = Number(urlParams.get('height')) || 400; // Default canvas
    const width = Number(urlParams.get('width')) || 400; // Default canvas
    const cape = urlParams.get('cape'); 

    const skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("simpleCanvas"),
        width,
        height,
        skin: `https://minotar.net/skin/${skinName}`,
    });

    // Viewer configuration
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

    if (cape && cape !== "default") {
        skinViewer.loadCape(`https://kurojs.github.io/McView3D/src/capes/${cape}`);
    } else if (cape && cape === "default") {
        try {
            const response = await fetch(`https://api.capes.dev/load/${skinName}`);
            if (!response.ok) throw new Error("Error obteniendo la capa de capes.dev");

            const data = await response.json();
            const capeUrl = data.minecraft?.imageUrl;

            if (capeUrl) {
                skinViewer.loadCape(capeUrl);
            } else {
                console.warn("El jugador no tiene capa disponible en capes.dev");
            }
        } catch (error) {
            console.error("Error al cargar la capa:", error);
        }
    }
});
