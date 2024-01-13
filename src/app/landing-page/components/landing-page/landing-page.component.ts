import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;

  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  onContinueToSnapface() {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitFormNewsletter(form: NgForm): void {
    console.log(form.value);
    console.log(this.userEmail);
  }
}
