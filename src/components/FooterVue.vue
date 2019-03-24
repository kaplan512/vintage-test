<template>
    <div>
        <div class = "wrapper">
            <b-container fluid>
                <b-row>
                    <b-col md="6">
                        <h3>Contact us</h3>
                        <form @submit.prevent = "submitForm">
                            <div class = "input-wrapper">
                                <input id = "name" :class = "{error: !isNameValid}" @change = "validateName" v-model = "form.name" type = "text"/>
                                <label for = "name">Name</label>
                            </div>
                            <div class = "input-wrapper">
                                <input id = "phone" :class = "{error: !isPhoneValid}" @change = "validatePhone" v-model = "form.phone" type = "tel"/>
                                <label for = "phone">Phone</label>
                            </div>
                            <div class = "input-wrapper">
                                <input id = "email" :class = "{error: !isEmailValid}" @change = "validateEmail" v-model = "form.email" type = "email"/>
                                <label for = "email">Email</label>
                            </div>

                            <label class="checkbox-container">
                                I agree the processing of personal data
                                <input v-model = "agree" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <button type="submit" :disabled='!isComplete'>
                                Get in touch
                            </button>
                        </form>
                    </b-col>
                    <b-col md="6" class = "right">
                        Please tell us more about your request and give us info about your company and country
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterVue",
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    email: '',
                },
                agree: false,
                disableBtn: false,
                isEmailValid: true,
                isPhoneValid: true,
                isNameValid: true,
                errors: [],

            }
        },
        methods: {
            submitForm() {
                this.disableBtn = true
                this.axios.post('http://httpbin.org/post', this.form)
                    .then((response) => {
                    console.log(response)
                        this.form = {
                            name: '',
                            phone: '',
                            email: '',
                        },
                        this.agree = false
                        this.disableBtn = false
                })
                    .catch(e =>{
                        console.log(e)
                        this.disableBtn = false
                    })
            },
            validateEmail() {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(this.form.email) {
                    if(re.test(this.form.email)) {
                        this.isEmailValid = true;
                    } else {
                        this.isEmailValid = false;
                        this.$notify({
                            group: 'foo',
                            title: 'Error',
                            text: 'Email is invalid',
                            type: 'error',
                        });

                    }
                }
            },
            validatePhone() {
                if(this.form.phone.length < 10) {
                    this.isPhoneValid = false;
                    this.$notify({
                        group: 'foo',
                        title: 'Error',
                        text: 'Phone is invalid',
                        type: 'error',
                    });
                } else {
                    this.isPhoneValid = true;
                }
            },
            validateName() {
                if(this.form.name.length < 2) {
                    this.isNameValid = false;
                    this.$notify({
                        group: 'foo',
                        title: 'Error',
                        text: 'Name is invalid',
                        type: 'error',
                    });
                }
                else {
                    this.isNameValid = true;
                }
            }
        },
        computed: {
            isComplete () {
                return this.form.name && this.form.phone && this.form.email && this.agree && !this.disableBtn;
            },
        }
    }
</script>

<style lang = "scss" scoped>
    .wrapper {
        background: url("../assets/images/pattern.png");
        padding: 50px 0;
        h3 {
            color: white;
            font-size: 34px;
        }
        .right {
            padding-top: 100px;
            font-size: 18px;
        }
        form {
            margin-top: 30px;
            .input-wrapper {
                position: relative;
                margin-bottom: 15px;
                label {
                    position: absolute;
                    cursor: pointer;
                    margin-bottom: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                }
                input {
                    background: transparent;
                    border: none;
                    width: 100%;
                    outline: none;
                    border-bottom: 1px solid black;
                    padding: 10px 0 10px 100px;
                    &:focus {
                        border-bottom: 1px solid white;
                    }
                    &:focus + label {
                        color: white;
                    }
                    &.error {
                        border-bottom: 1px solid red;
                        & + label {
                            color: red;
                        }
                    }
                }
            }
            .checkbox-container {
                display: block;
                position: relative;
                padding-left: 25px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 18px;
                user-select: none;
                color: white;
                margin-top: 40px;
            }
            .checkbox-container input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            .checkmark {
                position: absolute;
                top: 50%;
                left: 0;
                height: 15px;
                width: 15px;
                background-color: #eee;
                transform: translateY(-50%);
            }
            .checkbox-container:hover input ~ .checkmark {
                background-color: #ccc;
            }
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }
            .checkbox-container input:checked ~ .checkmark:after {
                display: block;
            }
            .checkbox-container .checkmark:after {
                left: 6px;
                top: 1px;
                width: 5px;
                height: 10px;
                border: solid black;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            button {
                width: 280px;
                height: 80px;
                background: #262626;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                margin-top: 30px;
                border: none;
                outline: none;
                &:disabled {
                    opacity: 0.7;
                }
            }
        }

    }
    .errors {
        position: fixed;
        background: red;
        color: white;
        padding: 15px;
        top: 30px;
        right: 30px;
    }
</style>