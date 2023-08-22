<script lang="ts">
    import ToolTile from "../ToolTile.svelte";
    import { TOOL } from "../../stores/activeTool.store";
</script>

<style>
    aside {
        background-color: var(--colBg);
        border-top: var(--borderPane);
        grid-column: 1;
        grid-row: 1 / 3;

        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;
    }
</style>

<aside>
    <ToolTile name="Rotate view" src="icons/rotateBoth.png" toolId={TOOL.ROTATE_VIEW}/>
    <ToolTile name="Rotate view horizontaly" src="icons/rotateHorizontal.png" toolId={TOOL.ROTATE_VIEW_HORIZONTAL}/>
    <ToolTile name="Rotate view vertically" src="icons/rotatevertical.png" toolId={TOOL.ROTATE_VIEW_VERTICAL}/>
    <ToolTile name="Zoom" src="icons/zoom.png" toolId={TOOL.ZOOM}/>
</aside>