import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyCQ1s5nFwNQBcehfKL4-17fVRNo-m5ai7s',
            authDomain: 'sw-try-firestore.firebaseapp.com',
            databaseURL: 'https://sw-try-firestore.firebaseio.com',
            projectId: 'sw-try-firestore',
            storageBucket: 'sw-try-firestore.appspot.com',
            messagingSenderId: '244809922621',
        }),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
