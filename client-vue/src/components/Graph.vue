<template>
    <div ref="graph" class="bg-background w-100 h-100"/>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import cytoscape from 'cytoscape';

const graph = useTemplateRef<HTMLDivElement>('graph');

const app = useAppStore();

onMounted(() => {
    

    // var cy = cytoscape({
    //     container: graph.value,

    //     elements: [ // list of graph elements to start with
    //         { // node a
    //         data: { id: 'a' }
    //         },
    //         { // node b
    //         data: { id: 'b' }
    //         },
    //         { // edge ab
    //         data: { id: 'ab', source: 'a', target: 'b' }
    //         }
    //     ],

    //     style: [ // the stylesheet for the graph
    //         {
    //         selector: 'node',
    //         style: {
    //             'background-color': '#666',
    //             'label': 'data(id)'
    //         }
    //         },

    //         {
    //         selector: 'edge',
    //         style: {
    //             'width': 3,
    //             'line-color': '#ccc',
    //             'target-arrow-color': '#ccc',
    //             'target-arrow-shape': 'triangle',
    //             'curve-style': 'bezier'
    //         }
    //         }
    //     ],

    //     layout: {
    //         name: 'grid',
    //         rows: 1
    //     }
    // });
    
    fetch();
})

async function fetch() {
    const nodes = await app.run('core', trx => trx.bucket('node').readAll());
    const links = await app.run('core', trx => trx.bucket('link').readAll());
    
    var cy = cytoscape({
        container: graph.value,
        elements: [
            ...nodes.map(node => ({
                data: { id: node.id }
            })),
            ...links.map(link => ({
                data: { id: link.id, source: link.from_node_id, target: link.to_node_id }
            })),
        ],
        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'color': '#ddd',
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
}

</script>