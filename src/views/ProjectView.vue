<template>
    <main class="container mt-5">
        <h1 class="text-center">{{ projects[route.params.id].name }}</h1>
        <div class="row margin-top-90 g-0">
            <ProjectComponent v-for="(project, index) in projects[route.params.id]['projects']" 
            :is-even="index % 2 == 0" :project="project" />
        </div>
        
        <template v-if="route.params.id == 'web'">
        
        <h1 class="margin-top-90 text-center">More Designs</h1>
        <div id="carouselExampleIndicators"
            class="mx-auto carousel slide carousel-dark slide border border-dark mt-5 col-12 col-md-10"
            data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/img/projects/VideoLoop.png" class="img-fluid" alt="VideoLoop">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/projects/PSLETuition.png" class="img-fluid" alt="PSLETuition">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/projects/Flight.png" class="img-fluid" alt="Flight">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </template>
</main>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import ProjectComponent from '@/components/ProjectComponent.vue'

    const route = useRoute();

    const projects = ref({
        "web": {
            name: "Web Development",
            projects: [
                {
                    projectName: "Dummy Band",
                    skills: ["HTML", "CSS", "JS", "Adobe XD"],
                    description: "A virtal band made for Interactive Development Project. Responsible for designing and developing the website.",
                    githubURL: "https://github.com/LeoYunTao/IDAssignment1",
                    liveDemoURL: "https://leoyuntao.github.io/IDAssignment1/",
                    image: "/src/assets/img/projects/IDAssignment1.png",
                },
                {
                    projectName: "FASTGAME",
                    skills: ["HTML", "CSS", "JS", "JQuery", "Bootstrap", "Lottie", "RestDB", "Figma"],
                    description: "A Speed running game with e-commence theme made for final interactive development project.",
                    githubURL: "https://github.com/LeoYunTao/IDAssignment2",
                    liveDemoURL: "https://leoyuntao.github.io/IDAssignment2/",
                    image: "/src/assets/img/projects/IDAssignment2.png",
                },
            ],
        },
        "mobile": {
            name: "Mobile App Development",
            projects: [
                {
                    projectName: "Socrata",
                    skills: ["Android Studio", "Java", "Firebase", "Figma"],
                    description: `Socrata is a FREE student productivity app that enables you to stay on track and keep you stress free!
    Made as part of an group and individual assignment for partial fulfilment of the coursework of Mobile Applications development AY2022/23 in Ngee Ann Polytechnic.
    Responsible for being the project lead, designer, and developer for this project.`,
                    githubURL: "https://github.com/iirquhs-np/socrata",
                    liveDemoURL: null,
                    image: "/src/assets/img/projects/socrata.png",
                },
            ],
        },
    });

</script>
