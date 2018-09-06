import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './component/city.component';
import { DogComponent } from './component/dog.component';
import { PageNotFoundComponent} from './component/page-not-found.component';

const appRoutes = [
    {
        path: 'City',
        component: CityComponent,
    },
    {
        path: 'Dog',
        component: DogComponent,
    },
    {
        path: '',
        redirectTo: '/City',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    declarations: [

    ],

    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
})

export class RoutingModule { }