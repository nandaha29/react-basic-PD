import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Alert from '../components/Alert';

/**
 * (Algoritma/langkahnya) -> aplikasi untuk menghitung BMI 
 * 1. User masukkan nilai berat badan (kg)
 * 2. User masukkan nilai tinggi badan (m)
 * 3. Program menghitung nilai bmi
 * 4. menentukan status bmi
 * 
 * variabel yg dibutuhkan: tinggi, berat, hasil angka, status
 * 
 */

export default class Bmi extends Component {

    constructor(props){
        super(props)
        this.state = {
            // masukkan variabel
            berat: '58',
            tinggi: '1.60',
            hasil: "Anda Ideal",
            status: "",
        };
        
        // ?
        this.BeratChange = this.BeratChange.bind(this);
        this.TinggiChange = this.TinggiChange.bind(this);
        this.hitungBmi = this.hitungBmi.bind(this);
    }

    // ini input
    BeratChange(event) {
        this.setState({berat: event.target.value})
    }
	TinggiChange(event){
		this.setState({tinggi: event.target.value})
	}

    // perhitungan
    hitungBmi = (event) => {
        let tinggi = this.state.tinggi;
        let berat = this.state.berat;

        let result = berat / ( tinggi * tinggi);
        let status = " "

        if(result <= 18.5){
            status = "Kurang Berat Badan"
        } else if(result >= 18.5 && result <= 22.9){
            status = "Normal (Ideal)"
		} else if(result >= 23 && result <= 24.9){
			status = "Kelebihan Berat Badan"
		} else {
			status = "Obesitas (Overweight)"
		}

        this.setState({
            hasil: result,
            status: status
        })

        event.preventDefault();
    }

    render(){
        return(
            <>
            <PageHeader 
                title="Hitung Index Masa Tubuh (Body Mass Index)"
                subTitle="Penilaian Keterampilan Dasar-Dasar Javascript"
                icon={<AccessibilityIcon fontSize="large"/>}
            />
            
            {/* Program */}
            <div className="container">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h4 className="mt-1" >Body Mass Index</h4>
                    </div>
                    <div className="card-body">
                        {/* Input Bilangan */}
                        <div className="col-auto">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Berat (kg) :</div>
                                </div>
                                <input type="text" className="form-control" 
                                    id="inlineFormInputGroup" 
                                    value={this.state.berat}
                                    onChange={this.BeratChange}
                                />
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Tinggi (m) :</div>
                                </div>
                            <input type="text" className="form-control" 
                                id="inlineFormInputGroup"                                         
                                value={this.state.tinggi}
                                onChange={this.TinggiChange}
                            />
                            </div>
                        </div>

                        <div className="card-footer">
                            <button className="form-control btn btn-primary btn-block" onClick={this.hitungBmi}>Hitung</button>
                            <h4 className="text-center mt-4">Hasil</h4>
                            {/* Alert */}
                            <Alert 
                                type={this.state.hasil}  
                                header={this.state.status}
                                // color={this.state.color}
                            />

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}