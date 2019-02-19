import { Inject, Injectable } from '@angular/core';
import { StoryInterface, Story } from './story';

// @Injectable()
export class StoryLocal extends Story{
    whoAmI(): string {
        return "story-local";
    }

}