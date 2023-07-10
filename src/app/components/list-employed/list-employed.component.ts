import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employed } from 'src/app/models/employed.model';
import { EmployedService } from 'src/app/services/employed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-employed',
  templateUrl: './list-employed.component.html',
  styleUrls: ['./list-employed.component.scss']
})
export class ListEmployedComponent implements OnInit {

  listEmployed: Array<Employed>;
  employedDelete: Employed | null;

  constructor(
    private employedService: EmployedService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.listEmployed = [];
    this.employedDelete = null;
  }

  ngOnInit(): void {
    this.getAllEmployed();
  }

  private getAllEmployed() {
    this.employedService.getAll().subscribe({
      next: (list: any) => this.listEmployed = list.employeds,
      error: console.error
    });
  }

  edit(id: string) {
    return this.router.navigate(['employed', id]);
  }

  register() {
    return this.router.navigate(['employed']);
  }

  consfirmDelete(employed: Employed, content: any) {
    this.employedDelete = employed;
    this.modalService.open(content, { size: 'sm' });
  }

  deleteEmployed(id?: string) {
    if (id)
      this.employedService.delete(id).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.getAllEmployed();
        },
        error: console.error
      });
  }

}
