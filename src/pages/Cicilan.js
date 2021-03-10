import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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

export default class Cicilan extends Component {

    constructor(props){
        super(props);
        this.state = {
        nominal: '',
        bunga: '',
        periode: '12',
        hasil: 'Cicilan per bulan:'
      };
    
      this.nominalChange = this.nominalChange.bind(this);
      this.bungaChange = this.bungaChange.bind(this);
      this.periodeChange = this.periodeChange.bind(this);
      }
    
      nominalChange(event){
        this.setState({nominal: event.target.value})
      }
    
      bungaChange(event){
        this.setState({bunga: event.target.value})
      }
    
      periodeChange(event){
        this.setState({periode: event.target.value})
      }
    
      hitung = (event)  => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;
    
        let b = bunga / 100;
        let pbulan = nominal / periode; 
        let flower = (pbulan / 100) * 10;
        let hasil = pbulan + flower;
    
        // output
        this.setState({hasilA: "Cicilan per bulan : Rp. " + hasil})
    
        event.preventDefault();
      }

    render(){
        return(
            <>
            <PageHeader 
                title="Hitung Cicilan"
                subTitle="Penilaian Keterampilan Dasar-Dasar Javascript"
                icon={<AccountBalanceWalletIcon fontSize="large"/>}
            />
            
            {/* Program */}
            <div className="container">
            <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h4 className="mt-1" >Cicilan Bank</h4>
                    </div>
                    {/* Input Bilangan */}
                    <div className="card-body">
                        <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Nominal : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.nominalChange}/>
                        </div>
                        <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Bunga (%) : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.bungaChange}/>
                        </div>
                        <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <label className="input-group-text" >Periode : </label>
                        </div>
                        <select className="custom-select" value={this.state.periode} onChange={this.periodeChange}>
                            <option value="12">12 Bulan</option>
                            <option value="24">24 Bulan</option>
                            <option value="36">36 Bulan</option>
                        </select>
                        </div>
                    </div>
                        
                        <div className="card-footer">
                            <button className="form-control btn btn-primary text-white" onClick={this.hitung}>
					        Hitung
				            </button>
				            <h4 className="text-center mt-4">Hasil</h4>
                            <input className="form-control mb-1" value={this.state.hasilA} readOnly/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}