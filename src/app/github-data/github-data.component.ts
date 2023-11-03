import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


imports: [
  HttpClientModule,
  // ...
]
@Component({
  selector: 'app-github-data',
  templateUrl: './github-data.component.html',
  styleUrls: ['./github-data.component.scss']
})

@Component({
  selector: 'app-github-data',
  templateUrl: './github-data.component.html',
  styleUrls: ['./github-data.component.css']
})
export class GithubDataComponent implements OnInit {
  profiles: any[] = []; // Initialize with an empty array
  repositories: any[] = []; // Initialize with an empty array


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make HTTP requests to your API to fetch data
    this.http.get('/api/profiles').subscribe((data: any) => {
      this.profiles = data;
    });

    this.http.get('/api/repositories').subscribe((data: any) => {
      this.repositories = data;
    });
  }
}
