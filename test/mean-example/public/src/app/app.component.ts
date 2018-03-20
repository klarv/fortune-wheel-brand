import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./prize/css/layout.css']
})
export class AppComponent {
    brands = ['youwager', 'betpop', 'brand1', 'brand2', 'brand3'];
    
}
