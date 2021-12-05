import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';


// const mapStateToProps = (state)=>({
//     employee:state.employee
// })

function mapStateToProps(state) {
    return {
        employee:state.employee,
    }
}

// const mapDipatchToProps = dispatch =>({
//     fetchEmployee:()=>{dispatch(fetchEmployee())}
// })


class App extends Component{

    // cardImage = "../assets/contactCard.jfif"


    componentDidMount=()=> {
        console.log("Inside didMount");
        // this.props.dispatch(fetchEmployee());
    }

    render(){
        const employeeData = this.props.employee;
        return(
            <>
                {employeeData.map((employee)=>{
                    return(
                        <div className="card">
                            {/* <img className="card-img-top" src="../assets/contactCard.jfif" ></img> */}
                            <div className="card-body">
                                <span className="font-weight-bold">{employee.name}</span><br/>
                                <span className="font-weight-bold">Mail: </span>{employee.email}<br/>
                                <span className="font-weight-bold">Company:</span>{employee.company.name}<br/>
                                <button className="btn btn-warning"><i className="bi bi-telephone"></i>{employee.phone}</button>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default connect(mapStateToProps)(App);