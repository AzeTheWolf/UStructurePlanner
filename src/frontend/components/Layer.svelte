<script lang="ts">
    let editing = false;
    export let label = "Layer 1";

    function focus(element: HTMLInputElement)
    {
        element.focus();
        element.select();
    }
</script>

<style>
    .root {
        background-color: var(--colPaneElement);
        width: 100%;
        height: 60px;
        border-top: var(--borderDark);
        display: flex;
    }

    .layerIcon {
        height: 52px;
        width: 52px;
        border: 1px solid #555;
        margin: 3px;
    }

    input
    {
        background-color: var(--colBg);
        color: var(--colText);
    }

    span {
        cursor: pointer;
        user-select: none;
    }
    
    input, span {
        height: 20px;
        line-height: 20px;
        
        border: none;
        outline: none;

        margin: calc((56px - 16px) / 2) 0;
        padding-left: 5px;

        font-family: inherit;
        font-size: 12px;
        
        display: block;
    }
</style>

<div class="root">
    <div class="layerIcon">

    </div>
    <div class="layerLabel">
        {#if editing}
            <input type="text" bind:value={label} on:blur={() => {editing = false}} use:focus/>
        {:else}
            <span on:dblclick={() => {editing = true}}>{label}</span>
        {/if}
    </div>
</div>