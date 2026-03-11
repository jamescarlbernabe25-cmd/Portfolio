import { Component, OnInit, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  // Start with false so it doesn't "flicker" hidden
  isDismissed = false; 
  isDarkMode: boolean = false; // Must be declared here

  // Add the service to the constructor
constructor(public themeService: ThemeService, private renderer: Renderer2) {}

   // ... inside your App class
ngOnInit() {
  const seen = sessionStorage.getItem('welcome_seen');
  if (seen === 'true') {
    this.isDismissed = true;
  } else {
    this.lockScroll();
  }
}

dismissWelcome() {
  this.isDismissed = true;
  sessionStorage.setItem('welcome_seen', 'true');
  this.unlockScroll();
}

private lockScroll() {
  // Apply to both html and body for maximum gadget compatibility
  this.renderer.addClass(document.documentElement, 'no-scroll');
  this.renderer.addClass(document.body, 'no-scroll');
}

private unlockScroll() {
  this.renderer.removeClass(document.documentElement, 'no-scroll');
  this.renderer.removeClass(document.body, 'no-scroll');
}
}
