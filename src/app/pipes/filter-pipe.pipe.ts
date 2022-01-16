import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    
    return filterText?value.filter((c:CarDetailDto)=>c.brandName
    .toLocaleLowerCase().indexOf(filterText)!==-1||c.colorName
    .toLocaleLowerCase().indexOf(filterText)!==-1||c.modelYear.toString()
    .toLocaleLowerCase().indexOf(filterText)!==-1||c.dailyPrice.toString()
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
   
  }

  brandText(value:CarDetailDto[], brandFilter:string): CarDetailDto[]{
    brandFilter=brandFilter?brandFilter.toLocaleLowerCase():""
    return brandFilter?value.filter((c:CarDetailDto)=> c.brandName
    .toLocaleLowerCase().indexOf(brandFilter)!==-1):value;
  }
  colorText(value:CarDetailDto[], colorFilter:string): CarDetailDto[]{
    colorFilter=colorFilter?colorFilter.toLocaleLowerCase():""
    return colorFilter?value.filter((c:CarDetailDto)=> c.colorName
    .toLocaleLowerCase().indexOf(colorFilter)!==-1):value;
  }

}




