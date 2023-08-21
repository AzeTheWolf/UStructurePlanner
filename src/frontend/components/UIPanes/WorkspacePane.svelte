<script lang="ts">
    import { setContext, onMount } from "svelte";
    import { Renderer } from "../../modules/Renderer";

    let rendererModule: Renderer;
    let hostElement: HTMLElement;

    onMount(() => {
        rendererModule = new Renderer(hostElement);
        window.onresize = () => { rendererModule.resizeRenderer(); };
    });

    function rotateViewport(ev: MouseEvent): void
    {
        if ((ev.buttons & 1) === 0) return;
        rendererModule.rotateCamera(ev.movementX, ev.movementY);
    }
</script>

<style>
    main {
        background-color: black;
        grid-row: 1 / 3;
    }
</style>

<main id="display" bind:this={hostElement} on:mousemove={rotateViewport}>
</main>