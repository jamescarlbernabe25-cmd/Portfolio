import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // 1. Initialize the state from localStorage
  isDarkMode = signal<boolean>(localStorage.getItem('darkMode') === 'enabled');

  constructor() {
    // 2. Apply the correct class to the body immediately when the app starts
    this.applyTheme(this.isDarkMode());
  }

  // 3. The function your toggle button will call
  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    const mode = this.isDarkMode() ? 'enabled' : 'disabled';
    localStorage.setItem('darkMode', mode);
    this.applyTheme(this.isDarkMode());
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
