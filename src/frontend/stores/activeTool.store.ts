import { writable } from "svelte/store";

export class TOOL
{
    static ROTATE_VIEW = 0;
    static ROTATE_VIEW_HORIZONTAL = 1;
    static ROTATE_VIEW_VERTICAL = 2;
    static ZOOM = 3;
}

export const activeTool = writable(0);