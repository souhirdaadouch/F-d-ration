import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formationService } from '@modules/frontpages/services/formation.service';
import { formation } from '@modules/frontpages/models';

@Component({
    selector: 'sb-formations',
    templateUrl: './formations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    formationForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;
    constructor() {
    }
    ngOnInit(): void {
    }

    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
    }
    onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        /* this.http.post('', fd).subscribe(res => {
             console.log(res);
         });*/
    }
    /*onFileChange(event) {
        const reader = new FileReader();

        if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.formulaire.patchValue({
                    // tslint:disable-next-line:prettier
                    file: reader.result;
                });

                // need to run CD since file load runs outside of zone
                this.cd.markForCheck();
            };
        }
    }*/
}
