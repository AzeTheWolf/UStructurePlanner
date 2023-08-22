<script lang="ts">
    import { activeTool } from "../stores/activeTool.store";

    export let src: string;
    export let name: string;
    export let toolId: number;

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
        background-color: #484848;
    }

    div.active {
        background-color: #444;
    }

    img {
        width: auto;
        height: auto;
        max-width: 25px;
        max-height: 25px;
    }
</style>

<div role="button" tabindex="0" class:active={$activeTool == toolId} on:click={handleClick} on:keypress={handleClickAccess}>
    <img {src} alt={name + " tool"}>
</div>