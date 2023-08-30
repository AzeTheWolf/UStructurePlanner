import { writable } from "svelte/store";

export class Layer
{
    id: number;
    name: string;
    contents: any[];

    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }
}

const {subscribe, update} = writable<Layer[]>([]);

export class LayerManager
{
    subscribe = subscribe;

    addLayer()
    {
        update(n => {
            if (n.length > 512) return n;

            let uid = window.syslink.getRandom10bitID();
            while (typeof n.find(x => x.id === uid) !== 'undefined')
            {
                uid = window.syslink.getRandom10bitID();
            }


            n.push(new Layer(uid, `Group ${n.length + 1}`));
            console.log(n);

            return n;
        });
    }
}
