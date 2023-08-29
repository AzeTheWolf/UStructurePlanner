<script lang="ts">
    import { activeTool, displayTool } from "../stores/activeTool.store";

    export let src: string;
    export let name: string;
    export let toolId: number;

    $: active = $displayTool === null ? $activeTool === toolId : $displayTool === toolId

    function handleClickAccess(ev: KeyboardEvent)
    {
        if (ev.key == "Enter") handleClick();
    }

    function handleClick()
    {
        $activeTool = toolId;
    }
</script>

<style>
    div {
        width: 30px;
        height: 30px;
        line-height: 43px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        margin: 2px;
    }

    div:hover, div.active:hover {
        background-color: var(--colBgFocus);
    }

    div.active {
        background-color: var(--colBgActive);
    }

    img {
        width: auto;
        height: auto;
        max-width: 25px;
        max-height: 25px;
    }
</style>

<div role="button" tabindex="0" class:active on:click={handleClick} on:keypress={handleClickAccess}>
    <img {src} alt={name + " tool"}>
</div>