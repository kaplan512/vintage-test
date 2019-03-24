<template>
    <div>
        <b-container fluid>
            <h1>Contacts</h1>
            <b-row>
                <b-col md="6">
                    <h3><span class = "green">GMS</span> Headquarters</h3>
                    <b-row>
                        <b-col md="6">
                            <p class = "simple-p">
                                Global Message Services Ukraine LLC<br>
                                Bundesstrasse 5 | 3rd Floor<br>
                                6300 Zug<br>
                                Switzerland
                            </p>
                            <a class = "phone" href = "tel: +41 41 544 62 00">+41 41 544 62 00</a>
                        </b-col>
                        <b-col md="6">
                            <p class = "simple-p">Email</p>
                            <a class = "simple-a" href = "mailto: info@gms-worldwide.com">info@gms-worldwide.com</a>
                            <p class = "simple-p">Send message</p>
                            <a class = "simple-a" href="viber://add?number=+41 41 544 62 00">VIBER US</a>
                            <p class = "simple-p">Contact us</p>
                            <a href="viber://add?number=+41 41 544 62 00">SEND FORM</a>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="6">
                    <h3>Technical support <span class = "green">24/7</span></h3>
                    <p class = "simple-p">
                        GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
                    </p>
                    <a class = "phone" href = "tel: +41 41 544 62 00">+41 41 544 62 00</a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "HeaderVue"
    }
</script>

<style lang = "scss" scoped>
    .container-fluid {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    h1 {
        font-size: 50px;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 34px;
        margin-bottom: 15px;
        .green {
            color: #3db565;
        }
    }
    .simple-p {
        line-height: 28px;
        font-size: 15px;
        margin-bottom: 0;
    }
    a {
        color: #3db565;
        &:hover {
            text-decoration: none;
            color: #3db565;
        }
        &.phone {
            font-size: 26px;
            margin-top: 25px;
            display: block;
        }
    }
    .simple-a {
        margin-bottom: 15px;
        display: block;
    }
</style>