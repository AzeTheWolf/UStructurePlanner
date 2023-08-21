<script lang="ts">
    import { setContext, onMount } from "svelte";
    import { Renderer } from "../../modules/Renderer";

    let rendererModule: Renderer;
    let hostElement: HTMLElement;

    onMount(() => {
        rendererModule = new Renderer(hostElement);
    });

    function mousedown(ev: MouseEvent): void
    {
        console.log(ev);
    }
</script>

<style>
    main {
        background-color: black;
        grid-row: 1 / 3;
    }
</style>

<main id="display" bind:this={hostElement}>
</main>