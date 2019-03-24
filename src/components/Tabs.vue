<template>
    <div>
        <div class = "wrapper">
            <h3>Our Offices</h3>
            <div class = "flex">
                <div
                        v-for = "(city, index) in cities"
                        :key = index
                        @click = "setChosenCity(city)"
                        :class="{ active: city.title === chosenCity.title }"
                >
                    {{city.title}}
                </div>
            </div>
            <div>
                <div class = "description">{{chosenCity.description}}</div>
                <div class = "city-info">
                    <p>
                        {{chosenCity.address}}
                    </p>
                    <p>
                        {{chosenCity.zip}}
                    </p>
                    <p>
                        {{chosenCity.title}}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Tabs",
        data() {
            return {
                cities: [
                    {
                        title: 'Kiyv',
                        description: 'Global Message Services Ukraine LLC',
                        address: 'Kuiv, Stepan Bandera, 33',
                        zip: '02066',
                        country: 'Ukraine',
                        map: {
                            lat: '50.446102',
                            lng: '30.548075'
                        }
                    },
                    {
                        title: 'New York',
                        description: 'Global Message Services USE LLC',
                        address: 'Usa, Stepan Bandera, 33',
                        zip: '02066',
                        country: 'USA',
                        map: {
                            lat: '40.706272',
                            lng: '-74.019490'
                        }
                    },
                    {
                        title: 'Guangzhou',
                        description: 'Global Message Services Chine LLC',
                        address: 'Chine, Stepan Bandera, 33',
                        zip: '02066',
                        country: 'China',
                        map: {
                            lat: '23.138938',
                            lng: '113.259472'
                        }
                    },
                    {
                        title: 'Barcelona',
                        description: 'Global Message Services Spain LLC',
                        address: 'Spain, Stepan Bandera, 33',
                        zip: '02066',
                        country: 'Spain',
                        map: {
                            lat: '41.382367',
                            lng: '2.173128'
                        }
                    }
                ]
            }
        },
        methods: {
            ...mapActions({
                setChosenCity: 'setChosenCity',
            }),
        },
        computed: {
            ...mapGetters({
                chosenCity: 'chosenCity',
            }),
        },
        mounted(){
            this.setChosenCity(this.cities[0])
        }
    }
</script>

<style lang = "scss" scoped>
    .wrapper {
        padding: 50px 0;
        h3 {
            color: white;
            font-size: 34px;
            font-weight: 400;
        }
        .flex {
            display: flex;
            margin-top: 40px;
            div {
                color: white;
                margin-right: 20px;
                cursor: pointer;
                &.active {
                    color: #3db565;
                }
            }
        }
        .description {
            color: white;
            font-size: 26px;
            margin-top: 50px;
        }
        .city-info {
            color: white;
            font-size: 11px;
            margin-top: 30px;
        }
    }
</style>