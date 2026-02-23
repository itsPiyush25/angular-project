import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss'],
})
export class ObservableDemoComponent implements OnInit{
  
    //http constructor

    constructor(private http : HttpClient){}


    // create a subject
    subject = new Subject<number>();

    // behavior subject --> stores latest value | requires initial value
    behaviorSubject$ = new BehaviorSubject<number>(0);

    // ReplaySubject (stores multiple values)

    replaySubject$ = new ReplaySubject(3);
  
  ngOnInit(): void {
    this.subject.subscribe({next: (v)=> console.log(`observerA: ${v}`)});

    this.behaviorSubject$.subscribe(val => console.log('A : ', val));
    
    this.replaySubject$.next(1);
    this.replaySubject$.next(2);
    this.replaySubject$.subscribe(val => console.log("Late Sub: ", val));
  }
    // create an observable

    data : any[] = [];

    myObservable = new Observable((observer)=>{
        setTimeout(()=> {observer.next(1)},1000);
        setTimeout(()=> {observer.next(2)},2000);
        setTimeout(()=> {observer.next(3)},3000);
        setTimeout(()=> {observer.next(4)},4000);
        setTimeout(()=> {observer.next(5)},5000);
        
         // observer.next(2);
        // observer.next(3);
    });

    GetAsyncData(){
      // observer
      this.myObservable.subscribe((val : any)=>{
          this.data.push(val)
      });
    }

  search(term: string) {
    return this.http.get(`api/search?q=${term}`);
  }

  

}
