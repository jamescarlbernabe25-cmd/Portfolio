import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  faChevronDown = faChevronDown;
  faArrowExternal = faArrowUpRightFromSquare;

  @ViewChild('aboutSection') aboutElement!: ElementRef;
  @ViewChild('projs') projsElement!: ElementRef;
  @ViewChild('aboutDetailed') aboutDetailedElement!: ElementRef; // Add this
  
  // Set About to true so it's already there on page load
  isAboutVisible = true; 
  isProjsVisible = false;
  isAboutDetailedVisible = false; // Add this

 projects = [
  {
    type: 'video',
    src: 'assets/videos/sampleproj.mp4',
    title: 'Fujitsu Bootcamp Final Project',
    tech: ['MEAN Stack', 'JS']
  },
  {
    type: 'image',
    src: 'assets/img/zodiac.png',
    title: 'Horoscope Site',
    tech: ['Angular']
  },
  {
    type: 'image',
    src: 'assets/img/bible.png',
    title: 'Bible Site',
    tech: ['Angular', 'API']
  },
  {
    type: 'video',
    src: 'assets/videos/weservclone.mp4',
    title: 'Weserv Home page Clone',
    tech: ['Angular']
  }
];


  scrollToProjects(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

   ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === this.aboutElement.nativeElement) {
          this.isAboutVisible = entry.isIntersecting;
        } 
        else if (entry.target === this.projsElement.nativeElement) {
          this.isProjsVisible = entry.isIntersecting;
        }
        // Add this check for your new section
        else if (entry.target === this.aboutDetailedElement.nativeElement) {
          this.isAboutDetailedVisible = entry.isIntersecting;
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' 
    });

    observer.observe(this.aboutElement.nativeElement);
    observer.observe(this.projsElement.nativeElement);
    observer.observe(this.aboutDetailedElement.nativeElement); // Observe the new section
}
}