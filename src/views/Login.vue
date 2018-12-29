<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 lg4>
                <v-card flat>
                    <v-card-title><h5>Lets get you set up on Libr 😃</h5></v-card-title>

                    <v-alert v-if="errorMessage"
                             v-bind:value="errorMessage"
                             color="secondary"
                             icon="info">
                        {{errorMessage}}
                    </v-alert>

                    <form ref="form">
                        <v-card-text>
                            <v-text-field
                                v-model="usernameOrEmail"
                                label="Username or email"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
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
import router from '@/router';

declare var componentHandler : any;
declare var v : any;

@Component
export default class Signup extends Vue {
    private usernameOrEmail = '';

    private password = '';

    private showPassword = false;

    private errorMessage : string = '';

    private async submit() {
        try {
            const user = await AccountService.login(this.usernameOrEmail, this.password);
            router.push('/me');
        } catch(error) {
            console.log(error);
            this.errorMessage = error.message;
        }
    }

    private clear() {
        this.usernameOrEmail = '';
        this.password = '';
    }
}
</script>
