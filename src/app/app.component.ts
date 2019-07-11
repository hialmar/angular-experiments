import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'wt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'book-shop';
  bookName = 'eXtreme Programming Explained';
  bookPictureUrl = 'https://robohash.org/xp?set=set4';
  isAvailable = true;
  isImportant = true;

  bookList = [
    {
      name: 'eXtreme Programming Explained'
    },
    {
      name: 'Clean Code'
    }
  ];
  buy() {
    console.log('test');
  }

  onDrop($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
  }

}
