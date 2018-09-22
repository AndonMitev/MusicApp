import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlbumInputModel } from '../../../core/models/input-models/album.model';

//Service
import { AddAlbumService } from '../../../core/services/album/add-album.service';

@Component({
  selector: 'album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit {
  public albumForm: FormGroup;
  public categories = ['Jazz', 'HIP-HOP'];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeAlbumForm();
  }

  public initializeAlbumForm(): void {
    this.albumForm = this.fb.group({
      title: '',
      year: null,
      image: '',
      category: '',
      author: ''
    });
  }

  public submitAlbumForm(): void {
    console.log(this.albumForm.value);
  }
}
