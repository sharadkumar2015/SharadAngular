import {Directive,ElementRef,Input,OnChanges,HostListener} from "@angular/core"
//Directive,ElementRef -- we should know what it is as it could be variable, decorator, class, functions
//@angular/core -- this is type script module
//service - register the service with module
@Directive({
    selector:'[mouseovercolor]'
})

export class MouseOverDirective implements OnChanges{
    @Input()mouseovercolor:string='red'; //this variable will be available in this class and view
    constructor(private e:ElementRef){
            
    }

    ngOnChanges():void{
        //this will not be in constructor and will not take
        //html value for color
        //this.e.nativeElement.style.background=this.mouseovercolor;
    }

    @HostListener('mouseenter')
    ChangeColor():void{
        this.e.nativeElement.style.background=this.mouseovercolor;
    }
                                                                                                                                                                                                                                                    
    @HostListener('mouseleave')
    ResetColor():void{
        this.e.nativeElement.style.background='white';
    }
}