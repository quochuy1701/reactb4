import React, { Component } from 'react'
import {connect} from 'react-redux'
 class ThongTin extends Component {
  render() {
    return (
      <div className="col-4 text-center">
        <div className="display-4 text-warning" style={{ fontSize: "35px" }}>Danh sách ghế đã chọn</div>
        <div className="mt-5 text-left">
          <button className='gheDuocChon'></button>
          <span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button>
          <span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span>
          <br />
          <button className='ghe' style={{ marginLeft: "0" }}></button>
          <span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span>
        </div>
        <table className="table mt-5 text-warning" border={2}>
          <thead>
            <tr className='text-light' style={{ fontSize: 25 }}>
              <th>số ghế</th>
              <th>giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.props.danhSachghedadat.map((ghedat,index) => { 
                return <tr>
                  <td>{ghedat.soGhe}</td>
                  <td>{ghedat.gia}</td>
                  <td>
                    <button onClick={() => { 
                        let action ={
                          type: "XOA_GHE",
                          soghe:ghedat.soGhe,
                        }
                        this.props.dispatch(action)
                     }}>Hủy</button>
                    </td>
                </tr>
               })}
           
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>
                {this.props.danhSachghedadat.reduce((tongTien,ghedangdat) => { 
                  return tongTien += ghedangdat.gia
                 },0)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
  return {
      danhSachghedadat: rootReducer.datVexemphim.danhSachghedadat
  }
}
export default connect(mapStateToProps)(ThongTin)