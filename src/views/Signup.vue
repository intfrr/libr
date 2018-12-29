<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 lg4>
                <v-card flat>
                    <v-card-title><h5>Lets get you set up on Libr 😃</h5></v-card-title>

                    <v-alert v-if="errorMessage"
                             v-bind:value="errorMessage"
                             color="error"
                             icon="warning">
                        {{errorMessage}}
                    </v-alert>

                    <form ref="form">
                        <v-card-text>
                            <v-text-field
                                v-model="username"
                                label="Your new username"
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
                                label="Password"
                                hint="We recommend at least 8 characters"
                                counter
                                @click:append="showPassword = !showPassword">
                            </v-text-field>
                            Everything below is optional, but recommended :)
                            <v-combobox
                                v-model="gender"
                                :items="genders"
                                label="Gender">
                            </v-combobox>
                            <v-combobox
                                v-model="sexuality"
                                :items="sexualities"
                                label="Sexual Orientation">
                            </v-combobox>
                            <v-combobox
                                v-model="relationshipStyle"
                                :items="relationshipStyles"
                                label="Relationship Style">
                            </v-combobox>
                            <v-combobox
                                v-model="relationshipStatus"
                                :items="relationshipStatuses"
                                label="Relationship Status">
                            </v-combobox>
                            Date of birth
                            <v-combobox
                                v-model="dobDay"
                                :items="days"
                                label="Day">
                            </v-combobox>
                            <v-combobox
                                v-model="dobMonth"
                                :items="months"
                                label="Month">
                            </v-combobox>
                            <v-combobox
                                v-model="dobYear"
                                :items="years"
                                label="Year">
                            </v-combobox>
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
    private username = '';

    private email = '';

    private password = '';

    private gender = '';

    private sexuality = '';

    private relationshipStyle = '';

    private relationshipStatus = '';

    private dobDay = 1;

    private dobMonth = 1;

    private dobYear = 2018;

    private success = false;

    private errorMessage : string = '';

    private showPassword = false;

    private genders = [
        'Male',
        'Female',
        'Other'
    ];

    private sexualities = [
        'Straight',
        'Bisexual',
        'Pansexual',
        'Gay',
        'Lesbain'
    ];

    private relationshipStyles = [
        'Monogamous',
        'Non monogamous'
    ];

    private relationshipStatuses = [
        'Single',
        'In a relationship',
        'In non-monogamous relationship/s'
    ];

    private days : Array<number> = [];

    private months : Array<number> = [];

    private years : Array<number> = [];

    private emailRules : Array<any> = [
        (v : string) => !!v || 'E-mail is required',
        (v : string) => /.+@.+/.test(v) || 'E-mail must be valid'
    ];

    private async submit() {
        const user : User = new User();
        user.setUsername(this.username);
        user.setEmail(this.email);
        user.setPassword(this.password);
        user.setGender(this.gender);
        user.setSexuality(this.sexuality);
        user.setRelationshipStyle(this.relationshipStyle);
        user.setRelationshipStatus(this.relationshipStatus);
        user.setDob(this.dobYear + '-' + this.dobMonth + '-' + this.dobDay);

        try {
            await AccountService.signUp(user);
            router.push('/me');
        } catch(error) {
            this.errorMessage = 'Oops, something went wrong! Please try again later'
        }
    }

    private mounted() {
        let now = new Date();
        let currentYear = now.getFullYear();

        for(var i=1; i <= 31; i++) {
            this.days.push(i);
        }

        for(var i=1; i <= 12; i++) {
            this.months.push(i);
        }

        for(var i=currentYear; i >= 1900; i--) {
            this.years.push(i);
        }
    }

    private clear() {
        this.username = '';
        this.password = '';
        this.email = '';
    }
}
</script>
