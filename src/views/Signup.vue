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
                            <v-text-field
                                v-model="username"
                                label="Name"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Normal with hint text"
                                hint="We recommend at least 8 characters"
                                counter
                                @click:append="showPassword = !showPassword">
                            </v-text-field>
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
declare var v : any;

@Component
export default class Signup extends Vue {
    private username = '';

    private email = '';

    private password = '';

    private success = false;

    private errorMessage : string = '';

    private showPassword = false;

    private emailRules : Array<any> = [
        (v : string) => !!v || 'E-mail is required',
        (v : string) => /.+@.+/.test(v) || 'E-mail must be valid'
    ];

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
