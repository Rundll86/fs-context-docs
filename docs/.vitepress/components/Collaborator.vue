<template>
    <a class="container" :href="url" target="_blank" rel="noopener noreferrer">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <img class="avatar" :src="avatar" :alt="name + '的头像'" />
        <span class="name">{{ name }}</span>
        <span class="hover-bar">
            <Label v-for="i in label" :key="i">{{ i }}</Label>
        </span>
    </a>
</template>

<script setup>
import { computed } from "vue";
import Label from "./Label.vue";
import infos from "../assets/peoples.ts";

const props = defineProps({
    user: {
        type: String,
        default: "fs"
    }
});

const info = computed(() => infos[props.user] || infos.fs);
const avatar = computed(() => info.value.avatar);
const name = computed(() => info.value.name);
const label = computed(() => info.value.label);
const url = computed(() => info.value.url);
</script>

<style scoped>
* {
    transition: all 0.2s ease-out;
}

.container {
    display: inline-flex;
    align-items: center;
    padding: 10px 5px;
    color: inherit;
    text-decoration: none;
}

.container:hover {
    cursor: pointer;
}

.hover-bar {
    transform: translate(-50%);
    opacity: 0;
}

.container:hover .hover-bar {
    opacity: 1;
    transform: translate(0);
}

.container:hover .icon {
    opacity: 1;
    margin-left: 15px;
}

.icon {
    opacity: 0;
    margin-left: 0;
    margin-right: 5px;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px gray solid;
}

.name {
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
}
</style>
