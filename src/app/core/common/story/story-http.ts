import { Injectable } from '@angular/core';
import { StoryInterface, Story } from './story';

@Injectable()
export class StoryHttp extends Story{
    whoAmI(): string {
        return "story-http";
    }

}