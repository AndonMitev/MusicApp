import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  public songForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeSongForm();
  }

  public submitSongForm(): void {}

  public initializeSongForm(): void {
    this.songForm = this.fb.group({
      title: '',
      author: '',
      album: ''
    });
  }

  public get title(): AbstractControl {
    return this.songForm.get('title');
  }

  public get author(): AbstractControl {
    return this.songForm.get('author');
  }

  public get album(): AbstractControl {
    return this.songForm.get('album');
  }
}
