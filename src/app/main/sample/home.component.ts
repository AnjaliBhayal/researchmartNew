import { Component, ElementRef, OnInit, ViewChild,HostListener  } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from "@angular/forms";import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from 'app/Services/admin-service.service';
import { ToastrService } from 'ngx-toastr';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("content",{static:true}) content:ElementRef | undefined;
  constructor(private modalService: NgbModal, private toastr:ToastrService,private fb: FormBuilder,private adminService: AdminServiceService) {}
  public contactForm: FormGroup;
  public bannerForm :FormGroup
  public contentHeader: object
  submitted = false;
  submittedb=false;
  isLargeScreen: boolean = true;
  private addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('mousedown', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  swiperBGFuction() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 1000,
        waitForTransition: true,
      },
      speed: 3000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  }
  swiperCardFunction() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
      },
      effect: 'slide',
      grabCursor: true,
    });
  }
  
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.addSmoothScroll();
    // this.checkScreenSize();
    this.swiperBGFuction();
    this.swiperCardFunction();
    
    // this.toastr.success("data.message","Success!");

  //   {
  //     "fullName": "Sahil Singh",
  //     "email": "sahilsingh.dsc@gmail.com",
  //     "phone": "8770664141",
  //     "city": "Indore",
  //     "message": "Hello"
  // }
  
    this.contactForm = this.fb.group({
      fullName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
    })
    this.bannerForm = this.fb.group({
      name: new FormControl("", [Validators.required]), 
      pNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
      ],
      
      citys: new FormControl("", [Validators.required]),
    })

    this.openModel(this.content)
    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.checkScreenSize();
  // }
  // checkScreenSize() {
  //   this.isLargeScreen = window.innerWidth > 1100; // Adjust the breakpoint as needed
  // }
  get f() {
    return this.contactForm.controls;
  }

  get b() {
    return this.bannerForm.controls;
  }

  openModel(data:any){
    this.modalService.open(data, {
      size: "md",
      centered: true,
      scrollable: true,
      keyboard: false,
    });
   }


   banneronSubmit(){
    this.submittedb = true;
    if (this.bannerForm.invalid) {
      return;
    } else {
      let body={
      fullName: this.bannerForm.value.name ,
      phone: this.bannerForm.value.pNumber ,
     city: this.bannerForm.value.citys ,
     
        }
        console.log(body);
         this.adminService.contactForm(body).subscribe((data: any) => {
          console.log(data)
          if(data.status){
            this.toastr.success(data.message,"Success!");
            this.bannerForm.reset()
            this.submittedb = false;
           
          }else{
            this.toastr.error(data.message,"error!")
            
          }
          
        });  
    }
  }
   
   onSubmit(){
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } else {
      let body={
      fullName: this.contactForm.value.fullName ,
      email: this.contactForm.value.email ,
      phone: this.contactForm.value.phone ,
      city: this.contactForm.value.city ,
      message: this.contactForm.value.message ,
        }
        console.log(body);
         this.adminService.contactForm(body).subscribe((data: any) => {
          console.log(data)
          if(data.status){
            
            this.toastr.success(data.message,"Success!");
            this.contactForm.reset()
            this.submitted=false;
           
          }else{
            this.toastr.error(data.message,"error!")
            
          }
         
          
        });  
    }
  }
  
}
