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
    const item = this.convertStringToArrayAndCleanData(this.formPTH.value.item);
    const PTH = this.convertStringToArrayAndCleanData(this.formPTH.value.PTH);
    const baoDong = this.convertStringToArrayAndCleanData(this.formPTH.value.baoDong);
    const result = this.tinhBaoDong(baoDong, PTH, item);
    // console.log(baoDong, 'baoDong');

    baoDong.forEach(element => {
      this.KQ.push({
        baodong: '(' + element + ')+ =',
        KQbaodong: ''
      });
    });
    // console.log(item.length, "point");
    // console.log(PTH, "point");
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
    console.log(PTH2, 'PTH2');
    
    // for (let i = 0 ; i < )
  }

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
