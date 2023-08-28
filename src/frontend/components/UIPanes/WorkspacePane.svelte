<script lang="ts">
    import { onMount } from "svelte";
    import { Renderer } from "../../modules/Renderer";
    import { activeTool, TOOL } from "../../stores/activeTool.store";

    let rendererModule: Renderer;
    let hostElement: HTMLElement;

    onMount(() => {
        rendererModule = new Renderer(hostElement);
        window.onresize = () => { rendererModule.resizeRenderer(); };
    });

    function handleMouseMove(ev: MouseEvent): void
    {
        if ((ev.buttons & 1) === 0) return;

        if (ev.ctrlKey || $activeTool === TOOL.ZOOM)
        {
            rendererModule.zoom(ev.movementY);
            return
        }

        let xMov = $activeTool === TOOL.ROTATE_VIEW || $activeTool === TOOL.ROTATE_VIEW_HORIZONTAL ? ev.movementX : 0;
        let yMov = $activeTool === TOOL.ROTATE_VIEW || $activeTool === TOOL.ROTATE_VIEW_VERTICAL ? ev.movementY : 0;
        rendererModule.rotateCamera(xMov, yMov);
    }
</script>

<style>
    main {
        background-color: black;
        grid-row: 1 / 3;
    }
</style>

<main id="display" bind:this={hostElement} on:mousemove={handleMouseMove}>
</main>