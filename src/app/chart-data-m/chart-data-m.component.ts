
import { Component, OnInit } from '@angular/core';
import{VoyagesService} from '../voyages.service';
import { Forfait } from '../forfait';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-chart-data-m',
  templateUrl: './chart-data-m.component.html',
  styleUrls: ['./chart-data-m.component.css']
})
export class ChartDataMComponent implements OnInit {

  VillesdeDeparts: Array<Forfait>;
  labels:  Array<string> =[] ;
  data: Array<number>=[];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  

  public ChartLabels: Label[] = [];
  public ChartData: SingleDataSet = [];
  public ChartType: ChartType = 'doughnut';
  public ChartLegend = true;
  public ChartPlugins = [];
  ChartColors:Array<any> = [{
    backgroundColor: ['red', 'green'],
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
          this.VillesdeDeparts=resultat;
          this.getLabels();
          this.getValues();
          this.addValues();
        });
  }

  

 getLabels () :void{

    this.VillesdeDeparts.map(depart =>{
      if(!this.labels.includes(depart.villeDepart)){
        this.labels.push(depart.villeDepart);
      }
    });
    //console.log(this.labels);
  }
  getValues () :void{
    this.data= new Array(this.labels.length).fill(0);
    this.VillesdeDeparts.map(depart=>{
      if(this.labels.includes(depart.villeDepart))
      {
        let index= this.labels.indexOf(depart.villeDepart);
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


