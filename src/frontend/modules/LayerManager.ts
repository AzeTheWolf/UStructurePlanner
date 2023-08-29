import { writable } from "svelte/store";

import * as crypto from 'crypto';

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

const {subscribe, set, update} = writable<Layer[]>([]);

export class LayerManager
{
    subscribe = subscribe;

    addLayer()
    {
        update(n => {
            if (n.length > 512) return n;

            let uid = crypto.randomInt(2 ** 9);
            while (typeof n.find(x => x.id === uid) !== 'undefined')
            {
                uid = crypto.randomInt(2 ** 9);
            }


            n.push(new Layer(uid, ""));

            return n;
        });
    }
}
