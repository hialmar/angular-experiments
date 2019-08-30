import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'wt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'book-shop';
  bookName = 'eXtreme Programming Explained';
  bookPictureUrl = 'https://robohash.org/xp?set=set4';
  isAvailable = true;
  isImportant = true;

  secondes: number;
  counterSubscription: Subscription;

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
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
