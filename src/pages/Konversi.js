import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import AcUnitIcon from '@material-ui/icons/AcUnit';

/**
 * (Algoritma/langkahnya) -> aplikasi untuk menghitung BMI 
 * 1. User masukkan nilai input (desimal, octal,biner, hexadesimal)
 * 2. User masukkan nilai output  (desimal, octal,biner, hexadesimal) 
 * 3. Program menghitung nilai 
 * 4. menentukan hasil
 * 
 * variabel yg dibutuhkan: input, output, nilai, hasil
 * 
 */

export default class Konversi extends Component {

    constructor(props){
        super(props);
        this.state = {
          input: '10',
          output: '10',
          nilai: '',
          hasil: ''
        }
          this.nilaiChange = this.nilaiChange.bind(this);
          this.outputChange = this.outputChange.bind(this);
          this.inputChange = this.inputChange.bind(this);
        }

        //ini input
        inputChange(event){
            this.setState({input: event.target.value})
        }
      
        outputChange(event){
            this.setState({output: event.target.value})
        }
      
        nilaiChange(event){
            this.setState({nilai: event.target.value})
        }

          //perhitungan
          konversi = (event) => {
            const basisInput = parseInt(this.state.input);
            const basisOutput = parseInt(this.state.output);
            const input = parseInt(this.state.nilai);
      
            // Proses Konversi
            if(basisInput == 10 || basisInput == 8 || basisInput == 2 || basisInput == 16){ // DESIMAL - OKTAL - BINER - HEXA (Input)
            if(basisOutput == 10 || basisOutput == 8 || basisOutput == 2 || basisOutput == 16){ // DESIMAL - OKTAL - BINER - HEXA (Output)
            let hasil = parseInt(input,basisInput).toString(basisOutput).toUpperCase();
            this.setState({hasil: hasil})
            }
          }
          event.preventDefault();
        }

    render(){
        return(
            <>
            <PageHeader 
                title="Konversi Suhu"
                subTitle="Penilaian Keterampilan Dasar-Dasar Javascript"
                icon={<AcUnitIcon fontSize="large"/>}
            />      
            
            {/* Program */}
            <div className="container">
                <div className="card">
                    <div className="card-header bg-danger text-center text-white">
                        <h4 className="mt-1" >Konversi Bilangan</h4>
                    </div>
                    <div class="card-body">
                        {/* <!-- Menu DropDown --> */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="basisInput">Bilangan : </label>
                            </div>
                            <select className="custom-select" value={this.state.input} onChange={this.inputChange} >
                                <option value="10">Desimal</option>
                                <option value="8">Oktal</option>
                                <option value="2">Biner</option>
                                <option value="16">Hexadesimal</option>
                            </select>
                        </div>
                        {/* Input Bilangan */}
                        <input type="text" className="form-control mb-2 text-center" placeholder="Input Bilangan" value={this.state.nilai} onChange={this.nilaiChange} />
                        {/* <!-- Menu DropDown --> */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="basisOutput">Konversi Ke : </label>
                            </div>
                            <select className="custom-select" value={this.state.output} onChange={this.outputChange} >
                                <option value="10">Desimal</option>
                                <option value="8">Oktal</option>
                                <option value="2">Biner</option>
                                <option value="16">Hexadesimal</option>
                            </select>
                        </div>
                    </div>
                        
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger form-control" onClick={this.konversi}>Convert</button>
                            <h4 className="text-center mt-4">Hasil</h4>
                            <input type="text" className="form-control mt-3 text-center" value={this.state.hasil} readOnly />
                        </div>
                    </div>

            </div>
            </>
        )
    }
}