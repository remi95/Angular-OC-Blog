import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm = () => {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit = () => {
    const formValue = this.postForm.value;
    const newPost = new Post(formValue.title, formValue.content);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}
