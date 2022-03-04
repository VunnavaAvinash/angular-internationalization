# Internationalization
 Ref: https://github.com/ngx-translate/core
 
 1. Add necessary imports
    ```
    @NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
 2. Create Translate files under assets/il8n/en.json or assets/il8n/de.json
    ```
    {
      "hello": "Hallo daar!"
    }
    ```
 3. Add dependency injection in App component
    ```
      constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use(localStorage.getItem("lang") || 'en');
      }
    ```
 4. use `translate` pipe when required
    ```
    <div>
      {{ 'hello' | translate }}
    </div>
    ```
# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
