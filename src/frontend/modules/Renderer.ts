import * as Three from 'three';

/**
 * Rendering 3D objects using Three.js
 * 
 * This class exposes 3D viewport manipulation functions
 * for easy use inside Svelte components
 */
export class Renderer 
{
    MAX_ZOOM_OUT = 1000; // Far limit for zoom tool

    renderer = new Three.WebGLRenderer(); // Main renderer object
    scene = new Three.Scene(); // main Scene object

    cameraBoom = new Three.Group(); // Helper group for rotating camera around origin
    camera: Three.PerspectiveCamera = undefined; // main camera

    floorGrid = new Three.GridHelper(2000, 2000); // floor grid
    axes = [new Three.AxesHelper(1000), new Three.AxesHelper(-1000)];

    hostElement: HTMLElement; // DOM element in which canvas is placed

    /**
     * Prepares initial values
     * 
     * @param element DOM element to place canvas in
     */
    constructor(element: HTMLElement)
    {
        this.hostElement = element; // store reference to DOM parent
        this.camera = new Three.PerspectiveCamera(75, element.clientWidth / element.clientHeight, .1, 1000) // create camera with correct aspect ratio
        this.renderer.setSize(element.clientWidth, element.clientHeight); // set renderer aspect ratio

        this.cameraBoom.add(this.camera); // attach camera to rotation group
        this.camera.position.set(0, 0, 10); // set camera initial position

        this.hostElement.appendChild(this.renderer.domElement); // put canvas inside hostElement;

        this.scene.add(this.cameraBoom); // put camera in the scene
        this.scene.add(this.floorGrid) // put grid in the scene
        this.scene.add(this.axes[0]) // put grid in the scene
        this.scene.add(this.axes[1]) // put grid in the scene

        this.floorGrid.position.set(.5, 0, .5);

        this._update(); // render
    }

    /**
     * Changes camera and renderer aspect ratio
     * 
     * Used when window is resized
     */
    resizeRenderer(): void
    {
        const OTHER_WIDTH = 340; // Width of other UI elements
        const w = window.innerWidth - OTHER_WIDTH; // Canvas element width

        this.camera.aspect = w / this.hostElement.clientHeight; // Update camera aspect ratio
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(w, this.hostElement.clientHeight); // Update renderer size

        this._update(); // Render with new sizes
    }
    
    /**
     * Rotates camera around focus point
     * 
     * @param x Yaw rotation scale
     * @param y Pitch rotation scale
     */
    rotateCamera(x: number, y: number): void
    {
        // Convert to radians and scale down
        this.cameraBoom.rotateOnWorldAxis(new Three.Vector3(0, -1, 0), x * Math.PI / 360);
        this.cameraBoom.rotateOnAxis(new Three.Vector3(-1, 0, 0), y * Math.PI / 360);

        this._update();
    }

    /**
     * Moves camera closer or farther from focus point
     * 
     * @param x Movement scale parameter
     */
    zoom(x: number): void
    {
        if (x == 0) return; // don't execute when no movement required

        this.camera.position.z += x / 10; // Scale down and adjust positions

        // Cap camera distance
        if (this.camera.position.z < 1) this.camera.position.z = 1;
        if (this.camera.position.z > this.MAX_ZOOM_OUT) this.camera.position.z = this.MAX_ZOOM_OUT;

        this._update();
    }

    /**
     * Renders the scene
     */
    protected _update(): void
    {
        this.renderer.render(this.scene, this.camera);
    }
}