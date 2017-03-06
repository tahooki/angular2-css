import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'BOOTSTRAP',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  onClickLink() {
    this.router.navigate(['bootstrap',{ outlets: { bootstrapOutlet: ['login']} } ]);
  }
}
