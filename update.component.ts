import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private lservice: LibraryService) { }
  updatebookdetail(updateform: { value: any; })
  {
    this.lservice.updatebook(updateform.value).subscribe();
  } 


  ngOnInit(): void {
  }

}