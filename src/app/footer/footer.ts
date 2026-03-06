import { Component, HostListener } from '@angular/core';
import { faEnvelope, faFilePdf, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   currentYear = new Date().getFullYear();
  showScrollButton = false;

  // Icon Definitions
  faEnvelope = faEnvelope;
  faFilePdf = faFilePdf;
  faChevronUp = faChevronUp;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Robust check for scroll height
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
