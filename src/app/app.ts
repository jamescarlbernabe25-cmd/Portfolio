import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  // Start with false so it doesn't "flicker" hidden
  isDismissed = false; 

  ngOnInit() {
    // Check if they dismissed it in THIS specific session
    const seen = sessionStorage.getItem('welcome_seen');
    if (seen === 'true') {
      this.isDismissed = true;
    }
  }

  dismissWelcome() {
    this.isDismissed = true;
    sessionStorage.setItem('welcome_seen', 'true');
  }
}
