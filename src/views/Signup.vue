<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 lg4>
                <v-card flat>
                    <v-card-title><h5>Lets get you set up on Libr 😃</h5></v-card-title>

                    <v-alert v-if="errorMessage"
                             v-bind:value="success"
                             color="error"
                             icon="warning">
                        {{errorMessage}}
                    </v-alert>

                    <form ref="form">
                        <v-card-text>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="username">Username</label>
                                <input class="signup-text-field mdl-textfield__input"
                                        type="text"
                                        id="username"
                                        v-model="username"
                                        required>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="email">Email</label>
                                <input class="signup-text-field mdl-textfield__input"
                                        type="email"
                                        id="email"
                                        v-model="email"
                                        required>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="password">Password</label>
                                <input class="signup-text-field mdl-textfield__input"
                                        type="password"
                                        id="password"
                                        v-model="password"
                                        required>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                @click="submit"
                                >
                                submit
                            </v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="scss">
    .signup-text-field:valid {
        background-image: url('/img/green_tick.png');
        background-position: right;
        background-repeat: no-repeat;
    }
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from '@/model/user';
import AccountService from '@/model/account-service';

declare var componentHandler : any;

@Component
export default class Signup extends Vue {
    private username = '';

    private email = '';

    private password = '';

    private success = false;

    private errorMessage : string = '';

    private async submit() {
        const user : User = new User();
        user.setUsername(this.username);
        user.setEmail(this.email);
        user.setPassword(this.password);

        try {
            await AccountService.signUp(user);
        } catch(error) {
            this.errorMessage = 'Oops, something went wrong! Please try again later'
        }
    }

    private clear() {
        this.username = '';
        this.password = '';
        this.email = '';
    }
}
</script>
