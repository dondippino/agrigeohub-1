import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Router, RouterStateSnapshot} from '@angular/router';
import {NgxFormConfig} from '@ngx-plus/ngx-forms'
import * as shp from 'shapefile';
import * as jQuery from 'jquery';
import {tileLayer, latLng, geoJSON, Layer, Map, LatLngBounds} from 'leaflet';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-save-farmer',
    templateUrl: './save-farmer.component.html',
    styleUrls: ['./save-farmer.component.css']
})
export class SaveFarmerComponent implements OnInit {

    constructor(private modalService: NgbModal, private zone: NgZone, private router: Router) {
        const snapshot: RouterStateSnapshot = router.routerState.snapshot;
        console.log(snapshot);
    }
    @ViewChild('uploader') el: ElementRef
    @ViewChild('content') content: ElementRef
    public item: any = {};
    public formConfig: NgxFormConfig = {
        title: 'Fill in the appropriate information',
        icon: 'fa fa-tasks',
        fields: {
            first_name: {
                type: 'input',
                label: 'First Name',
                placeholder: 'First Name',
            }
            ,

            last_name: {
                type: 'input',
                label: 'Last Name',
                placeholder: 'Last Name',
            },
            date_of_birth: {
                type: 'date',
                label: 'Date of Birth'

            },
            nationality: {
                type: 'input',
                label: 'Nationality',
                placeholder: 'Nationality'
            },
            address_1: {
                type: 'textarea',
                label: 'Nationality',
                placeholder: 'Address 1 (Home Address)'
            },
            address_2: {
                type: 'textarea',
                label: 'Nationality',
                placeholder: 'Address 2 (Work Address)'
            },
            state_province: {
                type: 'input',
                label: 'State / Province',
                placeholder: 'State / Province'
            },
            lga_county: {
                type: 'input',
                label: 'LGA / County',
                placeholder: 'LGA / County'
            },

            country: {
                type: 'input',
                label: 'Country',
                placeholder: 'Country'
            },

            bvn_passport: {
                type: 'input',
                label: 'BVN / International Passport ID',
                placeholder: 'BVN / International Passport ID'
            },
            selectOptions: {
                type: 'select',
                label: "Specialty (eg. Crops/Poultry/Fishery,etc.)",
                options: [
                    {label: "Crop Farming", value: "crops"},
                    {label: "Poultry", value: "poultry"},
                    {label: "Fishery", value: "fishery"},
                    {label: "Other", value: "fishery"},
                ],
            }

        },
        buttons: [{
            label: 'Save',
            type: 'submit',
            classNames: 'btn-primary',
            click: {type: 'submit'},
        }],
    }
    public handleAction($event) {
        console.log('$event', $event)
    }
    ngOnInit() {


    }

    geoJson: any = {
        "id": "preview_shape",
        "type": "FeatureCollection",
        "features": []
    };
    ngAfterViewInit() {
        //------------------FileReader-------------------------
        this.el.nativeElement.addEventListener('change', (x) => {
            var reader = new FileReader();
            reader.onload = () => {
                var result = reader.result;
                var __this = this;
                shp.open(result).then(
                    source => source.read()
                        .then(
                        function log(resultx) {
                            if (resultx.done) {
                                __this.addGeoJsonLayer(__this.geoJson)
                                __this.open(__this.content);
                                return;
                            };
                            __this.geoJson.features.push(resultx.value)
                            return source.read().then(log);
                        }
                        )).catch(error => console.error(error.stack));
            }
            reader.readAsArrayBuffer(x.target.files[0]);

        }, false);

    }
    open(content) {
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
            this.layers.shift();
            this.map.eachLayer((lyr) => {
                console.log(lyr)
            });
        }, (reason) => {
            this.layers.shift();
            this.map.eachLayer((lyr) => {
                console.log(lyr)
            });
        });;
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    //------------------------------- Map ---------------------------------
    map: Map;
    fitBounds: LatLngBounds;
    leafletOptions = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
        ],
        zoom: 5,
        center: latLng(46.879966, -121.726909)
    };
    layers: Layer[] = [];
    addGeoJsonLayer(layer: any) {
        //        this.layers = [];
        var gLayer = geoJSON(layer);
        this.fitBounds = gLayer.getBounds();
        this.layers.push(gLayer);

    }
    onMapReady(map: Map) {
        this.map = map;
    }

}

;