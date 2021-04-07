import { Component, OnInit } from '@angular/core';
import { AutherizationService } from 'src/app/services/autherization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AutherizationService) { }

  ngOnInit() {
  }

}
