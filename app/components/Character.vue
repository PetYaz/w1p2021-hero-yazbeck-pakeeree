<template>
    <transition name="scale">
    <article class="character" v-if="show">
        <h2>{{ character.name }}</h2>
        <h3>{{ character.speciality }}</h3>
    </article>
    </transition>
</template>

<style scoped>
    h2 {
        font-size: 28px;
        font-weight: bold;
    }
    h3 {
        font-size: 24px;
        text-decoration: underline;
    
    }
    .character {
        transition : transform 10s;
    }
    .scale-enter {
        transform: scale(0) rotate(180deg);
    }
    .scale-enter-to {
        transform: scale(2) rotate(-270deg);
    }
</style>


<script>
export default {
    props: ['character'],
    data: function() {
        return {
            show: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.show=true;
        }, 2000
        )
    }
};
</script>