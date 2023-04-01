import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import {
  AvailableResult,
  BiometryType,
  NativeBiometric,
} from 'capacitor-native-biometric';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  correo: string | undefined;
  password: string | undefined;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private platform: Platform
  ) {}
  setCredential() {
    // Save user's credentials
    NativeBiometric.setCredentials({
      username: 'username',
      password: 'password',
      server: 'www.example.com',
    }).then();
  }

  async checkCredential() {
    // Check if user's credentials are saved
    const isWeb = this.platform.is('mobileweb');
    if (isWeb) {
      // La plataforma actual es web, por lo que la verificación biométrica no es compatible.
      this.login('admin', 'admin');
    } else {
      NativeBiometric.isAvailable().then((result: AvailableResult) => {
        // const isFaceId=result.biometryType==BiometryType.FACE_ID;
        // const isFaceId = result.biometryType == BiometryType.FACE_ID;

        NativeBiometric.verifyIdentity({
          reason: 'For easy log in',
          title: 'Log in',
          subtitle: 'Subtitle',
          description: 'Description',
        })
          .then(() => {
            alert('SUCCESS!!');

            this.login('admin', 'admin');
          })
          .catch(async (err) => {
            // Usuario o contraseña inválidos, mostrar mensaje de error
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'Usuario o contraseña incorrectos.',
              buttons: ['OK'],
            });
            await alert.present();
          });
        //if (isAvailable) {
        // Get user's credentials
        //NativeBiometric.getCredentials({
        //   server: 'www.example.com',
        // }).then((credentials) => {
        //  alert('CREDENTIAL ' + JSON.stringify(credentials));
        //  // Authenticate using biometrics before logging the user in
        //
        //});
        //}
      });
    }
  }

  async login(user: string, pass: string) {
    if (this.correo === user && this.password === pass) {
      localStorage.setItem('x', 'true');
      this.router.navigateByUrl('/dashboard');
      this.setCredential();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
