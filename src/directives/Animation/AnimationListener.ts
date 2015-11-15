import {Directive, Output, EventEmitter} from 'angular2/angular2';

@Directive({
    selector: '[.animated]',
    host: {
        '(animationstart)': 'animationStarted($event)',
        '(webkitAnimationStart)': 'animationStarted($event)',
        '(oanimationstart)': 'animationStarted($event)',
        '(MSAnimationStart)': 'animationStarted($event)',
        '(animationend)': 'animationEnded($event)',
        '(webkitAnimationEnd)': 'animationEnded($event)',
        '(oanimationend)': 'animationEnded($event)',
        '(MSAnimationEnd)': 'animationEnded($event)'
    }
})
export class AnimationListener {
    @Output() animationStart: EventEmitter = new EventEmitter();
    @Output() animationEnd: EventEmitter = new EventEmitter();

    constructor() {
    }

    animationStarted($event: Event): void {
        this.animationStart.next($event);
    }

    animationEnded($event: Event): void {
        this.animationEnd.next($event);
    }
}

export var ANIMATION_LISTENER_PROVIDERS = [
    AnimationListener
];