import { Component, ElementRef, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; // Standard Angular stuff
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // <--- ADD THIS
import { faHome, faGear, faMoon, faColumns, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, FontAwesomeModule, RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  encapsulation: ViewEncapsulation.None
})
export class Navbar implements OnInit {
  
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
  
  constructor(private eRef: ElementRef, public themeService: ThemeService) {}

  ngOnInit() {
    // 1. Check if 'darkMode' was previously saved in the browser
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'enabled') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

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
  this.themeService.toggleDarkMode();
  // 1. Flip the boolean value
  this.isDarkMode = !this.isDarkMode;

  // 2. Add or Remove the class based on that boolean
  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save it to the browser
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save the "off" state
  }

  console.log('Dark mode is now:', this.isDarkMode);
}


  toggleSidebar() {
    // We will just log this for now to stop the error. 
    // Usually, you'd toggle a variable here to change your CSS layout.
    this.isSidebarActive = !this.isSidebarActive;
    console.log('Sidebar mode toggled');
  }
}
