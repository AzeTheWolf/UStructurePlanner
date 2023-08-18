<script>
    let versions = {node: "-", electron: "-", chrome: "-", app: "-"};

    window.syslink.getElectronData().then(x => {versions = x});

</script>

<style>
    footer {
        background-color: var(--colBg);
        border-top: var(--borderPane);
        grid-column: 1 / 4;
        grid-row: 3;
        
        font-size: 11px;
        line-height: 18px;
        padding: 0 10px;

        color: #888;
    }
</style>

<footer>
    <div style="float: left">
        <span>Structure Planner v{versions.app}</span>
    </div>
    <div style="float: right">node {versions.node} | electron {versions.electron} | chrome {versions.chrome}</div>
    <div style="clear:both"></div>
</footer>