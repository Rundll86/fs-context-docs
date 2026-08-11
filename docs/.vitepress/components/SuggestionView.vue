<template>
    <div class="container">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <a :href="withBase(`/v1/suggestion/${target}`)" target="_blank" rel="noopener noreferrer">{{ target }}.md</a>
        <span class="hover-bar">
            <Label>{{ infos[sender].name }}</Label>
        </span>
    </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import Label from "./Label.vue";
import infos, { People } from "../assets/peoples";
import { PropType } from "vue";

defineProps({
    sender: {
        type: String as PropType<People>,
        default: "fs"
    },
    target: {
        type: String,
        default: ""
    }
});
</script>

<style scoped>
* {
    transition: all 0.2s ease-out;
}

.container {
    display: inline-flex;
    align-items: center;
}

.container:hover {
    cursor: pointer;
}

.icon {
    opacity: 0;
    margin-left: 0;
    margin-right: 5px;
}

.hover-bar {
    transform: translate(-20%);
    opacity: 0;
    margin-left: 5px;
}

.container:hover .hover-bar {
    opacity: 1;
    transform: translate(0);
}

.container:hover .icon {
    opacity: 1;
    margin-left: 15px;
}
</style>
