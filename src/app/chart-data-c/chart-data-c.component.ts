import { Component, OnInit } from '@angular/core';
import{VoyagesService} from '../voyages.service';
import { Forfait } from '../forfait';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
  


@Component({
  selector: 'app-chart-data-c',
  templateUrl: './chart-data-c.component.html',
  styleUrls: ['./chart-data-c.component.css']
})
export class ChartDataCComponent implements OnInit {
  villeDestination: Array<Forfait>;
  labels:  Array<string> =[] ;
  data: Array<number>=[];
  public ChartOptions: ChartOptions = {
    responsive: true,
  };

  public ChartLabels: Label[] = [];
  public ChartData: SingleDataSet = [];
  public ChartType: ChartType = 'pie';
  public ChartLegend = true;
  public ChartPlugins = [];
  ChartColors:Array<any> = [{
    backgroundColor: ['red', 'yellow', 'blue', 'pink'],
    borderColor: [ 'black','black','black','black']
  }];

  constructor(private voyageService: VoyagesService){
   
   }

  ngOnInit(): void {
    
    this.getForfait();
  }
  

  getForfait(): void {  
    this.voyageService.getForfait()
        .subscribe(resultat => { 
          this.villeDestination=resultat;
          this.getLabels();
          this.getValues();
          this.addValues();
        });
  }

 getLabels () :void{

    this.villeDestination.map(destination =>{
      if(!this.labels.includes(destination.destination)){
        this.labels.push(destination.destination);
      }
    });
    //console.log(this.labels);
  }
  getValues () :void{
    this.data= new Array(this.labels.length).fill(0);
    this.villeDestination.map(destination =>{
      if(this.labels.includes(destination.destination))
      {
        let index= this.labels.indexOf(destination.destination);
        this.data[index]++;
      }
    });

  }

  addValues () :void{
    for(let i=0; i<this.labels.length; i++){
      this.ChartLabels.push(this.labels[i]);
      this.ChartData.push(this.data[i]);
     

    }
   }
   
  

}


var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'red'
    }
  }
};