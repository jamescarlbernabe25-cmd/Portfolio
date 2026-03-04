import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projs } from './projs/projs';
import { Contacts } from './contacts/contacts';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'projs', component: Projs },
    { path: 'contacts', component: Contacts },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Starts at Home
    { path: '**', redirectTo: 'home' }
];

