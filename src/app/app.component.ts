import { Component } from '@angular/core';

import { ApiService } from './api/api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries : any
  country : any
  confirmed : any 
  recovered : any
  deaths : any

  

  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries = data
      

    })
  }

 getCoronaData(){
   this.api.getCoronaRealTimeData(this.country).subscribe((data)=>{
     console.log(data)
     var index = data.length - 1
     
     this.confirmed = data[index].Confirmed
     this.recovered = data[index].Recovered
     this.deaths = data[index].Deaths
     
   })
 }
getCountry(country:any){
  this.country= country
}

}
