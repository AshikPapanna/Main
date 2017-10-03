import{Directive ,Input,ElementRef,HostListener
    ,Renderer,EventEmitter,Output}from '@angular/core'

@Directive({
    selector:'[matchPassword]'
})
export class MatchPassword{
@Input() matchPassword:string;
@Output() onerror=new EventEmitter<any>();
constructor(private elref:ElementRef,private rendr:Renderer){
}

@HostListener('blur') onblur(){
    if(this.elref.nativeElement.value!==this.matchPassword )
        {
            this.onerror.emit(null);
            this.rendr.setElementClass(this.elref.nativeElement,'valid',false);
            this.rendr.setElementClass(this.elref.nativeElement,'invalid',true);
        }
        else{
                this.rendr.setElementClass(this.elref.nativeElement,'invalid',false);    
                this.rendr.setElementClass(this.elref.nativeElement,'valid',true);
        }  
}
}