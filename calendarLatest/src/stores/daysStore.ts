import {defineStore} from "pinia"

import {ref} from "vue";

export const useDaysStore = defineStore("daysStore", () => {
  const MONTHS = {
    MARCH: 0,
    APRIL: 1,
    MAY: 2
  }

  const MONTHS_LABELS = {
    [MONTHS.MARCH]: "Март",
    [MONTHS.APRIL]: "Апрель",
    [MONTHS.MAY]: "Май"
  }

  const dictionary = {
    [MONTHS.MARCH]: [  
        {day:"1", active:true},
        {day:"2", active:true},
        {day:"3", active:true},
        {day:"4", active:true},
        {day:"5", active:true},
        {day:"6", active:true},
        {day:"7", active:true},
        {day:"8", active:true},
        {day:"9", active:true},
        {day:"10", active:true},
        {day:"11", active:true},
        {day:"12", active:true},
        {day:"13", active:true},
        {day:"14", active:true},
        {day:"15", active:true},
        {day:"16", active:true},
        {day:"17", active:true},
        {day:"18", active:true},
        {day:"19", active:true},
        {day:"20", active:true},
        {day:"21", active:true},
        {day:"22", active:true},
        {day:"23", active:true},
        {day:"24", active:true},
        {day:"25", active:true},
        {day:"26", active:true},
        {day:"27", active:true},
        {day:"28", active:true},
        {day:"29", active:true},
        {day:"30", active:true},
        {day:"31", active:true},
        {day:"1", active:false},
        {day:"2", active:false},
        {day:"3", active:false},
        {day:"4", active:false}
    ],
    [MONTHS.APRIL]: [
        {day:"29",active:false},
        {day:"30",active:false},
        {day:"31",active:false}, 
        {day:"1",active:true},
        {day:"2",active:true},
        {day:"3",active:true},
        {day:"4",active:true},
        {day:"5",active:true},
        {day:"6",active:true},
        {day:"7",active:true},
        {day:"8",active:true},
        {day:"9",active:true},
        {day:"10",active:true},
        {day:"11",active:true},
        {day:"12",active:true},
        {day:"13",active:true},
        {day:"14",active:true},
        {day:"15",active:true},
        {day:"16",active:true},
        {day:"17",active:true},
        {day:"18",active:true},
        {day:"19",active:true},
        {day:"20",active:true},
        {day:"21",active:true},
        {day:"22",active:true},
        {day:"23",active:true},
        {day:"24",active:true},
        {day:"25",active:true},
        {day:"26",active:true},
        {day:"27",active:true},
        {day:"28",active:true},
        {day:"29",active:true},
        {day:"30",active:true},
        {day:"1",active:false},
        {day:"2",active:false}
    ],
    [MONTHS.MAY]: [
        {day:"26",active:false},
        {day:"27",active:false}, 
        {day:"28",active:false},
        {day:"29",active:false},
        {day:"30",active:false}, 
        {day:"1",active:true},
        {day:"2",active:true},
        {day:"3",active:true},
        {day:"4",active:true},
        {day:"5",active:true},
        {day:"6",active:true},
        {day:"7",active:true},
        {day:"8",active:true},
        {day:"9",active:true},
        {day:"10",active:true},
        {day:"11",active:true},
        {day:"12",active:true},
        {day:"13",active:true},
        {day:"14",active:true},
        {day:"15",active:true},
        {day:"16",active:true},
        {day:"17",active:true},
        {day:"18",active:true},
        {day:"19",active:true},
        {day:"20",active:true},
        {day:"21",active:true},
        {day:"22",active:true},
        {day:"23",active:true},
        {day:"24",active:true},
        {day:"25",active:true},
        {day:"26",active:true},
        {day:"27",active:true},
        {day:"28",active:true},
        {day:"29",active:true},
        {day:"30",active:true},
        {day:"31",active:true},
        {day:"1",active:false},
        {day:"2",active:false},
        {day:"3",active:false},
        {day:"4",active:false},
        {day:"5",active:false},
        {day:"6",active:false}      
    ]
  }

  const currentMonth = ref(MONTHS.MARCH);
  
  return {
    dictionary,
    MONTHS,
    MONTHS_LABELS,
    currentMonth
  }
})