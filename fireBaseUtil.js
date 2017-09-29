import * as firebase from "firebase";
import React, { Component } from 'react';
import {Button,Alert} from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyA6BvWbNH4AoVI_j4p4-HlkH7L6xVRNSWI",
  authDomain: "hytteroger.firebaseapp.com",
  databaseURL: "https://hytteroger.firebaseio.com",
  storageBucket: "hytteroger.appspot.com",
};
	var currentUser = null;

const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports =
{
	async signup(email, pass) 
	{

	    try {
	        await firebase.auth()
	            .createUserWithEmailAndPassword(email, pass);
	            this.initilazieUser();

	        console.log("Account created");

	        // Navigate to the Home page, the user is auto logged in

	    } catch (error) {
	        console.log(error.toString())
	    }
	},

    async login(email, pass) 
    {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);
            this.initilazieUser();

        // Navigate to the Home page

    } catch (error) {
    	Alert.alert(error.toString());
        console.log(error.toString())
        return null
    }

	},

	async logout() 
	{

    try {

        await firebase.auth().signOut();
        this.initilazieUser();

        // Navigate to login view
        console.log("done");


    } catch (error) {
        console.log(error.toString());
    }

	},

	async initilazieUser()
	{
	  firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log(currentUser);
	  	currentUser =  user;
	  } 
	});

	},

	getUser()
	{
		return currentUser;
	}
}

