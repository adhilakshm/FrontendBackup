import { Component } from '@angular/core';
import { myHttpService } from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  newPassword: string = ''; // New password for changing password
  passwordUpdated: boolean = false; // Flag to indicate if password was updated
  updateMessage: string = ''; // Message to display
  passwordEmptyError: boolean = false; // Flag to indicate if password is empty
  isInputDisabled: boolean = false; // Flag to indicate if the input should be disabled
  isInputEnabled: boolean=false;

  constructor(private myHttpService: myHttpService) { }
  passwordTouched: boolean = false;

  onPasswordInputBlur() {
    this.passwordTouched = true;
    this.isInputDisabled = true;
  }
  onEnableInput() {
    this.isInputEnabled = true;
  }


  onSubmit() {
    if (!this.newPassword) {
      this.passwordEmptyError = true;
      this.passwordTouched = false;
      this.passwordUpdated = true;
      if (this.isInputEnabled) {
        // Handle password update logic here
        this.passwordUpdated = true;
      }
      return; // Stop processing if password is empty
    }

    // Disable the input field
    this.isInputDisabled = true;

    const userId = 1; // Replace with the actual user ID or get it dynamically

    const newPasswordObj = { newPassword: this.newPassword };

    this.myHttpService.updatePassword(userId, newPasswordObj).subscribe(
      (response: any) => {
        this.passwordUpdated = true;
        this.updateMessage = 'Password updated successfully.';
        console.log('Password updated:', response);

        // Enable the input field after password is updated
        this.isInputDisabled = false;
      },
      (error: any) => {
        console.error('Password update failed:', error);
        this.passwordUpdated = true;
        this.updateMessage = 'Password update failed';

        // Enable the input field on error
        this.isInputDisabled = false;
      }
    );
  }
}
