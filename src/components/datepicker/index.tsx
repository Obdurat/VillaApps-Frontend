import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { ghIssues } from '../../Context/ghIssuesCtx';

type ValuePiece = Date | null;

export type Value = ValuePiece;

export default function DatePicker({issue}: {issue: ghIssues}) {
  const [value, setValue] = useState<Value>(new Date(Date.now() + 300000));

  return (
    <div>
      <DateTimePicker 
        onChange={(e) => {setValue(e); issue.scheduled_to = e?.toJSON()}} 
        value={value} 
        disableClock
        minDate={new Date(Date.now())}
      />
    </div>
  );
}