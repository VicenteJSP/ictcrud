import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employed } from 'src/app/models/employed.model';
import { EmployedService } from 'src/app/services/employed.service';

@Component({
  selector: 'app-employed',
  templateUrl: './employed.component.html',
  styleUrls: ['./employed.component.scss']
})
export class EmployedComponent implements OnInit {

  _id: string | null;
  formEmployed: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private employedService: EmployedService
  ) {
    this._id = null;
    this.formEmployed = this.initForm();
  }

  ngOnInit(): void {
    this._id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this._id){
      this.getDataEmployed(this._id);
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      employedName: '',
      date: '',
      punchIn: '',
      punchOut: ''
    });
  }

  getDataEmployed(id: string) {
    const observer = {
      next: (data: any) => this.loadDataEmployed(data.employed),
      error: console.error
    };
    this.employedService.getById(id).subscribe(observer);
  }

  loadDataEmployed(employed: Employed) {
    this.formEmployed.patchValue(employed);
  }

  back() { return this.router.navigateByUrl(''); }

  save() {
    const observer = {
      next: () => this.router.navigateByUrl(''),
      error: console.error
    };
    if(this.formEmployed.touched){
      if(this._id){
        this.employedService.update(this._id, this.formEmployed.value).subscribe(observer);
      } else {
        this.employedService.register(this.formEmployed.value).subscribe(observer);
      }
    }
  }

}
