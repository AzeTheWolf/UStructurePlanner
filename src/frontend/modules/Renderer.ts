import * as Three from 'three';

export class Renderer 
{
    renderer = new Three.WebGLRenderer();
    scene = new Three.Scene();
    camera: Three.PerspectiveCamera = undefined;
    hostElement: HTMLElement;

    constructor(element: HTMLElement)
    {
        this.hostElement = element;
        this.camera = new Three.PerspectiveCamera(75, element.clientWidth / element.clientHeight, .1, 1000)
        this.renderer.setSize(element.clientWidth, element.clientHeight);

        this.hostElement.appendChild(this.renderer.domElement);

        const geometry = new Three.BoxGeometry(1, 1, 1);
        const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Three.Mesh(geometry, material);
        this.scene.add(cube);

        this.camera.position.z = 5;
        this.renderer.render(this.scene, this.camera);
    }
}