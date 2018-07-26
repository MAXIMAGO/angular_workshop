import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'th-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
  public member: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.member = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  ngOnInit() { }

  public getErrorMessage(): string {
    const errors = [];
    for (const key in this.member.controls) {
      if (!!this.member.controls[key].errors) {
        errors.push(`${key}: ${Object.keys(this.member.controls[key].errors)}`);
      }
    }
    return errors.join('<br>');
  }

  public onSave() {
    console.log(this.member.value);
    this.member.reset();
    this.router.navigate(['members']);
  }
}
