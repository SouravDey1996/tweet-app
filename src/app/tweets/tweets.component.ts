import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweetData:any;
  userName:any;
mockTweet=[{
  "loginId":'@sourav',
  "name":'Sourav Dey',
  "description":"This is a #tweet",
  "createdOn":'03/04/2021',
  "replies":[
    {
      "loginId":'@sourav',
      "description":"this tweet is created by #sourav",
      "createdOn":'03/04/2021',
      "name":'Sourav Dey',
    },
    {
      "loginId":'@srinjoy',
      "description":"this tweet is created by sourav",
      "createdOn":'03/04/2021',
      "name":'Sourav Dey',
    
    }
  ]

},
{
  "loginId":'@srinjoy',
  "description":"this tweet is created by #sourav",
  "createdOn":'03/04/2021',
  "name":'Srinjoy Choudhury',
  "replies":[
    {
      "loginId":'@sneha',
      "description":"this tweet is created by sourav",
      "createdOn":'03/04/2021',
      "name":'Srinjoy Choudhury',
    
    },
    {
      "loginId":'@RONIE',
      "description":"this tweet is created by sourav",
      "createdOn":'03/04/2021',
      "name":'Srinjoy Choudhury',
    
    }
  ]

}]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.tweetData);
    this.userName=localStorage.getItem('token');
    
  }
postTweet(){
  
  console.log(this.tweetData.toString().replace(/(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/g))
  this.mockTweet.unshift(
    {
      "loginId":'@srinjoy',
  "description":this.tweetData,
  "createdOn":'03/04/2021',
  "name":'Srinjoy Choudhury',
  "replies":[]
    }
  )
  this.tweetData="";
  
  console.log(this.mockTweet)
}
}
