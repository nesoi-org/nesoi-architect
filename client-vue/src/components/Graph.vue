<template>
    <div ref="graph" class="bg-background w-100 h-100"/>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import cytoscape from 'cytoscape';

const graph = useTemplateRef<HTMLDivElement>('graph');

const app = useAppStore();

onMounted(() => {
    var cy = cytoscape({
        container: graph.value,

        elements: [ // list of graph elements to start with
            { // node a
            data: { id: 'a' }
            },
            { // node b
            data: { id: 'b' }
            },
            { // edge ab
            data: { id: 'ab', source: 'a', target: 'b' }
            }
        ],

        style: [ // the stylesheet for the graph
            {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(id)'
            }
            },

            {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
            }
        ],

        layout: {
            name: 'grid',
            rows: 1
        }
    });
    
    fetch();
})

async function fetch() {
    // await app.daemon?.trx('core').run(async trx => {
    //     const deviceTypes = await trx.bucket('device_type').readAll();
    //     console.log(deviceTypes);
    // })
}

</script>