<template>
    <main>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col margin-top-90" style="margin-bottom: 150px;">
                    <h1 class="display-3 text-center">Leo Yun Tao</h1>
                    <p class="blockquote text-center">Second year Information Technology student at <br> Ngee Ann Poly.</p>
                    <div class="text-center">
                        <a href="mailto:leoyuntao@gmail.com" class="mx-auto btn btn-primary btn-lg margin-top-60">Contact
                            Me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row margin-top-120">
            <div class="col-0 col-lg-2"></div>
            <div class="col">
                <h1 id="about" class="mb-4">About Me</h1>
                <p>Second year Information Technology student, future software engineer. My passion have brought me to Ngee
                    Ann Poly. Before that, I have explored areas in programming and have created projects in areas such as
                    web development, machine learning and game development. <br> <br>

                    Exploring these areas have helped me to realize what area of programming that I am interested in. This
                    helps
                    me to work on my interest even more. <br> <br>

                    In the future, I want to be a part of a meaningful project that values my skills and can change the
                    world for the better. <br> <br>

                </p>
            </div>
            <div class="col-0 col-lg-2"></div>
        </div>
        <div class="row margin-top-90">
            <div class="col-0 col-lg-2"></div>
            <div class="col">
                <h1 id="skills" class="mb-4">Skills</h1>
                <div class="card-group">
                    <div class="education-card card me-4" v-for="skill in skillList">
                        <div v-html="skill.imgTag" class="mx-auto" style="height: 200px;"></div>
                        <h4 class="text-center margin-top-60">{{ skill.name }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-0 col-lg-2"></div>
        </div>
        <div class="row margin-top-120">
            <div class="col-0 col-lg-2"></div>
            <div class="col">
                <h1 class="mb-4">Education</h1>
                <div class="cards d-grid gap-4 timeline">
                    <div class="card">
                        <div class="card-header timeline-circle">
                            2021-2024
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Ngee Ann Polytechnic</h5>
                            <p class="card-text">Currently a year three student studing Information Technology at Ngee Ann
                                Polytechnic.</p>
                            <ul>
                                <li>Cumulative GPA: 3.8889</li>
                                <li>Third Most Outstanding Performance in Year 2</li>
                                <li>Director's List (Oct Semester AY 2021/2022)</li>
                                <li>Director's List (April Semester AY 2022)</li>
                                <li>Director's List (Oct Semester AY 2022/2023)</li>
                                <li>Best Performance in Artificial Intelligence for Games</li>
                                <li>Best Performance in Data Science Fundamentals</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header timeline-circle">
                            2017-2020
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Zhenghua Secondary School</h5>
                            <div class="card-text">
                                <p>Graduated with an L1R5 of 11.</p>
                                <ul>
                                    <li>GCE 'O' Level Achievers Award (Express) in 2021</li>
                                    <li>Top 10% in 2020</li>
                                    <li>Top 25% in 2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-0 col-lg-2"></div>
        </div>
        <div class="row margin-top-120">
            <div class="col-0 col-lg-2"></div>
            <div class="col">
                <h1 class="mb-4">Experience</h1>
                <div class="cards d-grid gap-4 timeline">
                    <div class="card">
                        <div class="card-header timeline-circle">
                            Apr 2023 - Mar 2024
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Operations - GovTech</h5>
                            <p class="card-text">
                                Attached to MOM ISTD under iOSH team. Manage and ensure IM8 compliance in our application systems.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header timeline-circle">
                            Aug 2022 - Sep 2022
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Flutter Developer - CyberLife AI</h5>
                            <p class="card-text">
                                Designed, developed and maintained several cross-platform applications using flutter and
                                dart. Key features include firebase and chatbot integration.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header timeline-circle">
                            Jan 2021 - Feb 2021
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Assistant Instructor - Saturday Kids</h5>
                            <p class="card-text">Volunteered as an assistant instructor to teach children how to use the
                                micro:bit and how to code in python. Learned important communication skills, interpersonal
                                relationships skills and teamwork.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header timeline-circle">
                            Nov 2020 - Dec 2020
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Front End Web Developer - PMG Asia</h5>
                            <p class="card-text">Responsible for converting EDM design from AdobeXD into HTML Code. Learned
                                important time management skills to keep up with projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-0 col-lg-2"></div>
        </div>
        <div class="row margin-top-120">
            <div class="col-0 col-lg-2"></div>
            <div class="col">
                <h1 class="mb-4">Achievements</h1>
                <div class="d-grid gap-3">
                    <div id="carouselExampleIndicators" class="carousel slide carousel-dark slide border border-dark"
                        data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/img/certificates/Tensorflow.jpg" class="img-fluid"
                                    alt="Introduction to TensorFlow">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/img/certificates/entreperneuship.jpg" class="img-fluid"
                                    alt="Entrepreneurship First Steps">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/img/certificates/CS50x.png" class="img-fluid"
                                    alt="Harvard cs50's Introduction to computer science">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/img/certificates/citc.jpg" class="img-fluid" alt="Code In the Community">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/img/certificates/learningHowToLearn.jpg" class="img-fluid"
                                alt="Learning How to Learn: Powerful mental tools to help you master tough subjects">
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
            </div>
        </div>
        <div class="col-0 col-lg-2"></div>
        </div>
    </div>
</main>
</template>

<script setup>
    import { ref } from 'vue'

    const skillList = ref([
        {
            name: "UI/UX Design",
            imgTag: '<img src="/PersonalBrandingWebsite/src/assets/img/undraw_design_team_af2y 1.svg" height="200" class="img-fluid" alt="">',
        },
        {
            name: "Web Development",
            imgTag: '<img src="/PersonalBrandingWebsite/src/assets/img/Group 44.svg" class="img-fluid" style="margin-top: 20px;" alt="">',
        },
        {
            name: "Mobile App Development",
            imgTag: '<img src="/PersonalBrandingWebsite/src/assets/img/undraw_mobile_login_re_9ntv.svg" class="img-fluid" style="margin-top: 20px;"alt="">',
        },
        {
            name: "Applied Analytics",
            imgTag: '<img src="/PersonalBrandingWebsite/src/assets/img/undraw_predictive_analytics_re_wxt8.svg" width="175" class="img-fluid" style="margin-top: 20px;" alt="">',
        },
    ]);
</script>
