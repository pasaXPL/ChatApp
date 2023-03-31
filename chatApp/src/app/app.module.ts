import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from './environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { LoginframeComponent } from './loginframe/loginframe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ChatlistComponent } from './chatlist/chatlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent,
    LoginframeComponent,
    LoginComponent,
    SignupComponent,
    ContactlistComponent,
    ChatlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
