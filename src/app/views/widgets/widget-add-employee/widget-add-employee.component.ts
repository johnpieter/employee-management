import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-widget-add-employee',
  templateUrl: './widget-add-employee.component.html',
  styleUrls: ['./widget-add-employee.component.css']
})
export class WidgetAddEmployeeComponent implements OnInit {

  public model: any = {};
  
  public todayDateISO: any = moment().add(1, 'days').format('YYYY-MM-DD');
  public today: any;
  public myDateRangePickerOptions: IMyDpOptions;
  constructor() { }

  ngOnInit() {
    this.today = this.todayDateISO.split('-');
    this.myDateRangePickerOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd/mm/yyyy',
      firstDayOfWeek: 'mo',
      sunHighlight: true,
      height: '27px',
      width: '20em',
      showInputField: true,
      disableSince: { year: this.today[0], month: this.today[1], day: this.today[2] },
    };
  }

  onDateChange(val) {
    const { year, month, day } = val.date;

    if (year === 0 && month === 0 && day === 0) {

    } else {
      this.model.birthDate = {
        date: {
          year: year,
          month: month,
          day: day,
        }
      };
    }
  }

}
