import {PersonData} from '../models/persondata.model';

export class TaskData{
    constructor(
        public userId:String,
        public name:String,
        public description:String,
        public primary_person:PersonData,
        public secondary_person:PersonData,
        public priority:String,
        public date:Date
    ){}
}