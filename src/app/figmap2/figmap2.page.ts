import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertserviceService } from '../alertservice.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-figmap2',
  templateUrl: './figmap2.page.html',
  styleUrls: ['./figmap2.page.scss'],
})
export class Figmap2Page implements OnInit {
  public figmap2arry: any = {};
  public figmap2arry2: any = {};
  public figmap2arry3: any = {};
  public figmap2arry4: any = {};
  public figmap2arry5: any = {};
  public figmap2arry6: any = {};
  public figmap2arry7: any = {};

  email: string = '';
  password: string = '';
  yourNumber: string = '';
  incorrectAttempts: number = 0;
  isDisabled: boolean = false;
  isPermanentlyDisabled: boolean = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  criteria = {
    atLeast8Chars: false,
    oneUppercaseLetter: false,
    oneNumber: false,
    oneSymbol: false,
  };

  get isPasswordValid(): boolean {
    return (
      this.criteria.atLeast8Chars &&
      this.criteria.oneUppercaseLetter &&
      this.criteria.oneNumber &&
      this.criteria.oneSymbol
    );
  }

  constructor(
    public router: Router,
    private dataService: DataserviceService,
    private alertService: AlertserviceService
  ) {}

  ngOnInit() {
    this.figmap2arry = this.dataService.figmap2arry;
    this.figmap2arry2 = this.dataService.figmap2arry2;
    this.figmap2arry3 = this.dataService.figmap2arry3;
    this.figmap2arry4 = this.dataService.figmap2arry4;
    this.figmap2arry5 = this.dataService.figmap2arry5;
    this.figmap2arry6 = this.dataService.figmap2arry6;
    this.figmap2arry7 = this.dataService.figmap2arry7;
  }

  validatePassword() {
    this.criteria.atLeast8Chars = this.password.length >= 8;
    this.criteria.oneUppercaseLetter = /[A-Z]/.test(this.password);
    this.criteria.oneNumber = /[0-9]/.test(this.password);
    this.criteria.oneSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
  }

  async done() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Your Number:', this.yourNumber);

    if (this.isPermanentlyDisabled) {
      console.log('Button is permanently disabled.');
      await this.alertService.presentPermanentDisableAlert();
      return;
    }

    if (this.password !== 'Ali13049@') {
      this.incorrectAttempts++;
      this.isDisabled = true;

      let disableDuration: number;
      if (this.incorrectAttempts === 1) {
        disableDuration = 10;
      } else if (this.incorrectAttempts === 2) {
        disableDuration = 30;
      } else if (this.incorrectAttempts === 3) {
        disableDuration = 60;
      } else {
        this.isPermanentlyDisabled = true;
        this.isDisabled = true;
        console.log('Button permanently disabled after 4 incorrect attempts.');
        await this.alertService.presentPermanentDisableAlert();
        return;
      }

      console.log(`Incorrect attempt #${this.incorrectAttempts}. Button disabled for ${disableDuration} seconds.`);
      this.alertService.presentCountdownAlert(disableDuration, () => {
        this.isDisabled = false;
      });
    } else {
      this.incorrectAttempts = 0;
      console.log('Password is correct. Button re-enabled.');
    }
  }

  onEmailInput() {
    if (this.email.endsWith('@gmail.com')) {
      this.isPermanentlyDisabled = false;
      this.isDisabled = false;
      console.log('Button re-enabled as email ends with @gmail.com.');
    }
  }

  next() {
    this.router.navigate(['/figmap3']);
  }

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye-outline';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off-outline';
    }
  }
}
