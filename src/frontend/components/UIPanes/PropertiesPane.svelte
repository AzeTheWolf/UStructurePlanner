<style>
    aside {
        background-color: var(--colBg);
        border-top: var(--borderPane);
        grid-column: 3;
        grid-row: 1;
    }

    /*
        This rule is duplicated in LayersPane.
        They both could've been refactored into Pane with further sub-components.
        It is however easier to do that this way, since there's only two of them.
        Refactoring may be necessary if app is ever to be expanded.
    */
    header {
        padding: 5px;
        font-size: 12px;
        font-weight: 700;
        background-color: #444;
    }
</style>

<aside>
    <header>Properties</header>
</aside>