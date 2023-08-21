import * as Three from 'three';

export class Renderer 
{
    renderer: Three.WebGLRenderer = new Three.WebGLRenderer();
    scene = new Three.Scene();
    cameraBoom = new Three.Group();
    camera: Three.PerspectiveCamera = undefined;
    hostElement: HTMLElement;

    constructor(element: HTMLElement)
    {
        this.hostElement = element;
        this.camera = new Three.PerspectiveCamera(75, element.clientWidth / element.clientHeight, .1, 1000)
        this.renderer.setSize(element.clientWidth, element.clientHeight);

        this.cameraBoom.add(this.camera);
        this.camera.position.set(0, 0, 10);

        this.hostElement.appendChild(this.renderer.domElement);

        const geometry = new Three.BoxGeometry(1, 1, 1);
        const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Three.Mesh(geometry, material);
        this.scene.add(cube);
        this.scene.add(this.cameraBoom);

        this._update();
    }

    resizeRenderer(): void
    {
        const w = window.innerWidth - 340;

        this.camera.aspect = w / this.hostElement.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(w, this.hostElement.clientHeight);

        this._update()
    }
    
    rotateCamera(x: number, y: number): void
    {
        this.cameraBoom.rotateY(-x * Math.PI / 360);
        this.cameraBoom.rotateX(-y * Math.PI / 360);
        this._update();
    }

    protected _update(): void
    {
        this.renderer.render(this.scene, this.camera);
    }
}