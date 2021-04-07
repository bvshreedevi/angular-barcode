import { Component } from '@angular/core';
import { AutherizationService } from './services/autherization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:AutherizationService){}
  
}
