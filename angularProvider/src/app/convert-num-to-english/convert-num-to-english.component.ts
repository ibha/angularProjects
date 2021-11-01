import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-convert-num-to-english',
  templateUrl: './convert-num-to-english.component.html',
  styleUrls: ['./convert-num-to-english.component.scss']
})
export class ConvertNumToEnglishComponent implements OnInit {
  private static SPACE:string = " ";
  value:number = 0;
  numberInWords:string = "";

  submitted = false;

  onSubmit() { 
      this.numberInWords = this.numberToWords(this.value);
   }

  constructor() { }

  ngOnInit(): void {
      

     
    //0~999

  }
  public numberToWords(num:number) {
    if (num == 0) {
        return "Zero";
    }
     
    let result = this.numberToWordsHelper(num % 1000);
    num = num / 1000;
    if (num > 0 && num % 1000 > 0) {
        result = this.numberToWordsHelper(num % 1000) + ConvertNumToEnglishComponent.SPACE + "Thousand" + ConvertNumToEnglishComponent.SPACE + result;
    }
     
    num = num / 1000;
    if (num > 0 && num % 1000 > 0) {
        result = this.numberToWordsHelper(num % 1000) + ConvertNumToEnglishComponent.SPACE + "Million" + ConvertNumToEnglishComponent.SPACE + result;
    }
     
    num = num / 1000;
    if (num > 0) {
        result = this.numberToWordsHelper(num %  1000) + ConvertNumToEnglishComponent.SPACE + "Billion" + ConvertNumToEnglishComponent.SPACE + result;
    }
     
    return result.trim();
}

private numberToWordsHelper(num:number) {
  let digitNum:string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  let teenNum:string[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  let tenNum:string[] = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  let result:string = "";
  if (num > 99) {
      result += digitNum[num / 100] + ConvertNumToEnglishComponent.SPACE + "Hundred" + ConvertNumToEnglishComponent.SPACE;
  }
  num = num % 100;
  //10 ~ 19
  if (num > 9 && num < 20) {
      result += teenNum[num % 10];
  } else {
      //20 ~ 99
      if (num > 19) {
          result += tenNum[num / 10] + ConvertNumToEnglishComponent.SPACE;
      }
      num = num % 10;
      // 1 ~ 9
      if (num > 0) {
          result += digitNum[num % 10];
      }
  }
   
  return result.trim();
}

}
