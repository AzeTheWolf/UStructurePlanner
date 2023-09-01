import { writable } from "svelte/store";

export class Layer
{
    name: string;
    contents: any[];

    constructor(name: string)
    {
        this.name = name;
    }
}

const {subscribe, update} = writable<Map<number, Layer>>(new Map);

export class LayerManager
{

    subscribe = subscribe;

    addLayer()
    {
        update(n => {
            if (n.size > 512) return n;

            let uid = window.syslink.getRandom10bitID();
            while (typeof Array.from(n.keys()).find(x => x === uid) !== 'undefined')
            {
                uid = window.syslink.getRandom10bitID();
            }

            n.set(uid, new Layer(`Group ${n.size + 1}`));

            return n;
        });
    }


}
