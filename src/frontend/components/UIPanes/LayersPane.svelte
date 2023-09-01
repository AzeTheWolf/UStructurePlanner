<script lang="ts">
    import { LayerStore } from "../../stores/layers.store";
    import Layer from "../Layer.svelte";

    function newLayer()
    {
        LayerStore.addLayer();
    }
</script>

<style>
    aside {
        background-color: var(--colBg);
        border-top: var(--borderPane);
        grid-column: 3;
        grid-row: 2;
        display: flex;
        flex-direction: column;
    }

    .content {
        overflow-y: scroll;
        flex-grow: 1;
    }

    /*
        This rule is duplicated in ProperiesPane.
        They both could've been refactored into Pane with further sub-components.
        It is however easier to do that this way, since there's only two of them.
        Refactoring may be necessary if app is ever to be expanded.
    */
    header {
        padding: 5px;
        font-size: 12px;
        font-weight: 700;
        background-color: var(--colHeader);
    }
</style>

<aside>
    <header>Groups</header>
    <div class="content">
        {#each Array.from($LayerStore.entries()) as layer}
            <Layer uid={layer[0]} label={layer[1].name}/>
        {/each}
    </div>
    <div class="menu">
        <button class="newLayer" on:click={newLayer}>N</button>
    </div>
</aside>