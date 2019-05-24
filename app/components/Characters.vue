<template>
    <div class="big-header">
        <h1>Choix du personnage</h1>
        <br />
        <br />

        <Character v-for="character in characters" v-bind:character="character">
        </Character>
        <br />
        <br />

        <router-link class="button" to="/character">Choose</router-link>
    </div>
</template>

<script>
import Character from './Character.vue';

export default {
    data: function() {
        return {
            characters: [
            {
                name:  'Peter',
                speciality: 'BG'
            },
            {
                name: 'Anouk',
                speciality: 'Leopard',
                main: true
            }
            ]
        }
    },
    components: {
        Character
    }
};
</script>
