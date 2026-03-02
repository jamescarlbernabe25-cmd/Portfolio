import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; // Standard Angular stuff
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // <--- ADD THIS
import { faHome, faGear, faMoon, faColumns, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, FontAwesomeModule, RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  encapsulation: ViewEncapsulation.None
})
export class Navbar {
  faHome = faHome;
  faGear = faGear;
  faMoon = faMoon;
  faColumns = faColumns; // Icon for "Sidebar/Navbar" toggle
  faBars = faBars;
  faChevronDown = faChevronDown;

  isDropdownOpen = false;
  isMenuOpen = false; // Menu is closed by default
  isDarkMode = false;
  isSidebarActive = false;
  
  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;

  // 1. DESKTOP: Close Settings Gear if clicking outside its container
  if (this.isDropdownOpen && !target.closest('.settings-container')) {
    this.isDropdownOpen = false;
  }

  // 2. MOBILE: Close Hamburger Menu if clicking outside the button AND the list
  // We only run this if the menu is actually open to save performance
  if (this.isMenuOpen) {
    const clickedMenuBtn = target.closest('.menu-btn');
    const clickedMenuList = target.closest('ul.show');

    if (!clickedMenuBtn && !clickedMenuList) {
      this.isMenuOpen = false;
    }
  }
}



 toggleDarkMode() {
    // This adds/removes a 'dark-mode' class to the entire page
    document.body.classList.toggle('dark-mode');
    console.log('Dark mode toggled');
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleSidebar() {
    // We will just log this for now to stop the error. 
    // Usually, you'd toggle a variable here to change your CSS layout.
    this.isSidebarActive = !this.isSidebarActive;
    console.log('Sidebar mode toggled');
  }
}
