import React, { Component } from 'react'
import { connect } from 'react-redux';
class DanhSachGhe extends Component {

    renderGhe = () => {
        // console.log(this.props.danhSachghedadat)
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGhedadat = ''
            let disable =  false
            if (ghe.daDat) {
                cssGhedadat = 'gheDuocChon'
                disable=true
            }
            let cssGhedangdat = ''
            let viTri = this.props.danhSachghedadat.findIndex((gheDangdat) => { 
                return gheDangdat.soGhe == ghe.soGhe
            })
            if (viTri > -1) {
                cssGhedangdat = 'gheDangChon';
            }
            return <button onClick={() => {
                let action = {
                    type: "GHE_DAT",
                    gheDat: ghe,
                }
                this.props.dispatch(action)

            }} key={ghe.soGhe} disabled={disable} className={`ghe ${cssGhedadat} ${cssGhedangdat}`} style={{ color: "black" }}>
                {ghe.soGhe}
            </button>
        })
    }
    rendersoghe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return <button key={index} className="rowNumber" style={{ fontSize: "20px" }}>
                {ghe.soGhe}
            </button>
        })
    }
    renderHangghe = () => {
        if (this.props.index === 0) {
            return <>
             <span></span>
             {this.props.hangGhe.hang} {this.rendersoghe()}
            </>
        } else {
            return <> {this.props.hangGhe.hang}{this.renderGhe()}
            </>
        }
    }
    render() {
        return (
            <div className='text-light text-left ml-5 ' style={{ fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                {this.renderHangghe()}
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        danhSachghedadat: rootReducer.datVexemphim.danhSachghedadat
    }
}
export default connect(mapStateToProps)(DanhSachGhe)