import { AuthProvider } from './../providers/auth/auth';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { ProfileFormComponent } from './profile-form/profile-form';
@NgModule({
  declarations: [
    LoginFormComponent,
    ProfileFormComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LoginFormComponent,
    ProfileFormComponent
  ],
  providers: [
    AuthProvider
  ]
})
export class ComponentsModule { }
