import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tim-bao-dong',
  templateUrl: './tim-bao-dong.page.html',
  styleUrls: ['./tim-bao-dong.page.scss'],
})
export class TimBaoDongPage implements OnInit {

  public formPTH: FormGroup;
  public KQ = [];
  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit() {
    this.formAdd();
  }

  public formAdd() {
    this.formPTH = this.fb.group({
      item: ['', [Validators.required]],
      PTH: ['', [Validators.required]],
      baoDong: ['', [Validators.required]],
  });
  }

  public result() {
    this.KQ = [];
    const item = this.convertStringToArrayAndCleanData(this.formPTH.value.item);
    const PTH = this.convertStringToArrayAndCleanData(this.formPTH.value.PTH);
    let baoDong = this.convertStringToArrayAndCleanData(this.formPTH.value.baoDong);
    baoDong.forEach(element => {
      this.KQ.push({
        baodong: '(' + element + ')+ =',
        KQbaodong: element,
        PTH: ''
      });
    });

    for(let i = 0 ; i < this.KQ.length; i ++) {
      this.KQ[i] = this.tinhBaoDong(this.KQ[i], PTH, item);
    }
  }

  private tinhBaoDong(baoDong, PTH, item) {
    const PTH2 = [];
    PTH.forEach(e => {
      const temp = e.split('-');
      PTH2.push({
        start: temp[0],
        end: temp[1]
      });
    });
      let temp2 = PTH2;
      let temp3 = PTH;
      // for (let y = 0 ; y < temp2.length ;) {
      // const check = this.checkCurrent(baoDong.KQbaodong, temp2[y].start);
      //   if (baoDong.KQbaodong.indexOf(temp2[y].start) >= 0 && baoDong.KQbaodong.indexOf(temp2[y].end) < 0) {
      //     baoDong.PTH = PTH[y];
      //     baoDong.KQbaodong = baoDong.KQbaodong + temp2[y].end;
      //     y = 0;
      //     temp2[y] = null;
      //     temp2 = temp2.filter((item) => {
      //       return item != null;
      //   });
      //   } else {
      //     y++;
      //   }
      // }
      for( let i = 0 ; i < temp2.length ;) {
        const check = this.checkCurrent(temp2[i].start, baoDong);
        if(check === true) {
            baoDong.PTH = (baoDong.PTH === '') ? 'Với các PTH ' + temp3[i] : baoDong.PTH + ' -> ' + temp3[i];
           baoDong.KQbaodong = this.addPTH(baoDong.KQbaodong, temp2[i].end);
           temp3[i] = null;
           temp3 = temp3.filter((item) => {
             return item != null;
         });
           temp2[i] = null;
           temp2 = temp2.filter((item) => {
             return item != null;
         });
         i = 0;
        } else {
          i++;
        }
      }

    return baoDong;

  }

  public addPTH(baoDong, PTH) {
    for ( let i = 0 ; i < PTH.length ;i++) {
      if(baoDong.indexOf(PTH[i]) < 0) {
        baoDong = baoDong + PTH[i];
      }
    }
    return baoDong;
  }

  public checkCurrent(dataCheck, validate) {

      let resultCheck = true;
      for ( let i = 0 ; i < dataCheck.length ; i++) {
        if (validate.KQbaodong.indexOf(dataCheck[i]) < 0) {
          resultCheck = resultCheck && false;
        }
      }
      return resultCheck;
  }

  // public checkCurrent(dataCheck, validate) {
  //   console.log(dataCheck, 'dataCheck');
  //   console.log(validate, 'validate');
    
    
  //   const re = /(['validate'])\w+/g;
  //   return re.test(dataCheck);
  // }


  private convertStringToArrayAndCleanData(data) {
    data = data.split(',');
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].replace(/^\s+|\s+$/gm, '');
    }
    const temp = data.filter((item: any, index: any) => {
        return data.indexOf(item) >= index;
    });
    return temp;
  }

}
