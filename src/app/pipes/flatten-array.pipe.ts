import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flattenArray'
})
export class FlattenArrayPipe implements PipeTransform {

  transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  flattenArray(values: any[]): any[] {
    const results=[];

    values.forEach((value:any)=>{
      if(Array.isArray(value)){
        results.push(...this.flattenArray(value));
      }else{
        results.push(value);
      }
    })
    return results;
  }

}
