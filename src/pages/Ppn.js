import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import HomeWorkIcon from '@material-ui/icons/HomeWork';

/**
 * (Algoritma/langkahnya) -> aplikasi untuk menghitung BMI 
 * 1. User masukkan nilai Harga Awal
 * 2. User masukkan nilai PPN
 * 3. User masukkan nilai Discount
 * 3. Program menghitung nilai semua
 * 4. menentukan harga akhir
 * 
 * variabel yg dibutuhkan: tinggi, berat, hasil angka, status
 * 
 */

export default class Ppn extends Component {

	constructor(props){
		super(props);
		this.state = {
            //output
			harga_awal: '',
			ppn: '',
			diskon: '',
			harga_akhir: ''
		};

		this.harga_awalChange = this.harga_awalChange.bind(this);
		this.ppnChange = this.ppnChange.bind(this);
		this.diskonChange = this.diskonChange.bind(this);
		this.hitung = this.hitung.bind(this);
	}

    //ini input
	harga_awalChange(event) {
		this.setState({harga_awal: event.target.value})
	}

	ppnChange(event){
		this.setState({ppn: event.target.value})
    }
    
    diskonChange(event){
        this.setState({diskon: event.target.value})
    }

    //perhitungan
	hitung = (event) => {
        const ha = parseInt(this.state.harga_awal);
        const ppn = parseInt(this.state.ppn) / 100;
        const disc= parseInt(this.state.diskon) / 100;
    
        const pajak= (ppn * ha);
        const disk = (ha * disc);
        const akhir = ha + pajak- disk;
    
        this.setState({harga_akhir: "Harga akhir : Rp" + akhir})
                
        event.preventDefault();
    }    

    render(){
        return(
            <>
            <PageHeader 
                title="Hitung PPN"
                subTitle="Penilaian Keterampilan Dasar-Dasar Javascript"
                icon={<HomeWorkIcon fontSize="large"/>}
            />
            
            {/* Program */}
            <div className="container">
                <div className="card">
                        <div className="card-header bg-danger text-center text-white">
                            <h4 className="mt-1" >Hitung Harga Akhir</h4>
                        </div>
                        <div className="card-body">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <label class="input-group-text" >Harga awal : </label>
                                </div>
                                <input type="number" className="form-control" onChange={this.harga_awalChange}/>
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <label class="input-group-text" >PPN (%) : </label>
                                </div>
                                <input type="number" className="form-control" onChange={this.ppnChange}/>
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <label class="input-group-text" >Diskon (%) : </label>
                                </div>
                                <input type="number" className="form-control" onChange={this.diskonChange}/>
                            </div>
                        </div>
                            
                        <div className="card-footer">
                            <button className="form-control btn btn-danger" onClick={this.hitung} >
                            Hitung
                            </button>
                            <h4 className="text-center mt-4">Hasil</h4>
                            <input className="form-control" value={this.state.harga_akhir} readOnly/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}