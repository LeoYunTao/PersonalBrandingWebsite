<template>
    <template v-if="props.isEven">
        <div class="col-12 col-md-4 my-auto">
            <h1 class="mb-3 mt-5 mt-md-0">{{ props.project.projectName }}</h1>
            <span v-for="skill in props.project.skills" class="badge bg-primary">{{ skill }}</span>
            <p class="mt-4">{{ props.project.description }}</p>
            <a class="btn btn-primary me-3 mt-5" v-if="props.project.liveDemoURL != null" v-bind:href="props.project.liveDemoURL" target="_blank">Visit
                Website</a>
            <a class="btn btn-none mt-5" v-bind:href="props.project.githubURL" data-bs-toggle="tooltip"
                data-bs-title="View Source Code" target="_blank">
                <img src="@/assets/img/GitHub_icon.png">
            </a>
        </div>
        <div class="col-1"></div>
        <div class="col-12 col-md-7 order-first order-md-0">
            <a v-bind:href="props.project.githubURL" target="_blank">
                <img v-bind:src="props.project.image" class="img-fluid border border-dark rounded"
                    >
            </a>
        </div>
    </template>
    <template v-else>
        <div class="col-12 col-md-7">
            <a v-bind:href="props.project.githubURL" target="_blank">
                <img v-bind:src="props.project.image" class="img-fluid border border-dark rounded"
                    >
            </a>
        </div>
        <div class="col-1"></div>
        <div class="col-12 col-md-4 my-auto">
            <h1 class="mb-3 mt-5 mt-md-0">{{ props.project.projectName }}</h1>
            <span v-for="skill in props.project.skills" class="badge bg-primary">{{ skill }}</span>
            <p class="mt-4">{{ props.project.description }}</p>
            <a class="btn btn-primary me-3 mt-5" v-if="props.project.liveDemoURL != null" v-bind:href="props.project.liveDemoURL" target="_blank">Visit
                Website</a>
            <a class="btn btn-none mt-5" v-bind:href="props.project.githubURL" data-bs-toggle="tooltip"
                data-bs-title="View Source Code" data-bs-placement="bottom" target="_blank">
                <img src="@/assets/img/GitHub_icon.png">
            </a>
        </div>
    </template>
    <div class="margin-top-120"></div>
</template>

<script setup>
const props = defineProps({ project: Object, isEven: Boolean });
</script>