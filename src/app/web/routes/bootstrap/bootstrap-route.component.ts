import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'BOOTSTRAP',
  templateUrl: './bootstrap-route.component.html',
  styleUrls: [
    'bootstrap-route.component.scss',
    './css/bootstrap.min.css',
    './css/bootstrap-theme.min.css'
  ]
})
export class BootstrapRouteComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClickLink() {
    this.router.navigate([
      'bootstrap',
      {outlets: {bootstrapOutlet: ['login']}}
    ]);
  }
}
