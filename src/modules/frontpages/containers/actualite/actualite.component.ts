import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'sb-actualite',
    templateUrl: './actualite.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    actuForm: FormGroup;
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
}
