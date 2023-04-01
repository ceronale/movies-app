import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.searchTerm = 'john';
    this.searchMovies();
  }

  searchMovies() {
    try {
      this.http
        .get<any>(
          `http://www.omdbapi.com/?apikey=3fc37304&s=${this.searchTerm}`
        )
        .subscribe((data) => {
          const movieList = data.Search;
          try {
            const moviePromises = movieList.map((movie: any) => {
              return this.http
                .get<any>(
                  `http://www.omdbapi.com/?apikey=3fc37304&i=${movie.imdbID}`
                )
                .toPromise();
            });

            Promise.all(moviePromises).then((results) => {
              this.movies = results.map((result, index) => {
                return {
                  ...movieList[index],
                  descripcion: result.Plot,
                };
              });
            });
          } catch (error) {
            this.handleError();
          }
        });
    } catch (error) {
      console.log('aas');
      this.handleError();
    }
  }

  async handleError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se encontraron resultados :(',
      buttons: ['OK'],
    });
    await alert.present();
  }
  logOut() {
    localStorage.removeItem('x');
    this.router.navigateByUrl('/');
  }
}
