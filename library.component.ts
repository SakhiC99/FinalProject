import { Component, OnInit } from '@angular/core';
import { Library } from '../librarys';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  lib! : Library[];

  constructor(private lserive : LibraryService) { }

  ngOnInit(): void {
    this.lserive.getbooks().subscribe((data:Library[])=>{
      this.lib = data;
    }
      
    );

  }

}