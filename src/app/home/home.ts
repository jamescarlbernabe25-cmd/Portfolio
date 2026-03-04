import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faChevronDown = faChevronDown;
faArrowExternal = faArrowUpRightFromSquare;

scrollToProjects(element: HTMLElement) {
    // block: 'start' ensures the top of the section hits the top of the screen
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



}
